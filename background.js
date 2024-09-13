console.log("Background script loaded");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  chrome.contextMenus.create({
    id: "searchAppleMaps",
    title: "Search on Apple Maps",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("Context menu clicked", info);
  if (info.menuItemId === "searchAppleMaps") {
    const query = encodeURIComponent(info.selectionText);

    // Retrieve the user's preference for opening in app or website
    chrome.storage.sync.get(['openInApp'], (result) => {
      if (result.openInApp) {
        // Use the Apple Maps URL scheme and construct the fallback URL
        const appUrl = `maps://?q=${query}`;
        const fallbackUrl = `https://maps.apple.com/?q=${query}`;

        // Send a message to the content script to open the URL with fallback
        chrome.tabs.sendMessage(tab.id, {
          action: "openAppleMapsInApp",
          appUrl: appUrl,
          fallbackUrl: fallbackUrl
        });
      } else {
        // Open the Apple Maps website
        const url = `https://maps.apple.com/?q=${query}`;
        chrome.tabs.create({ url: url });
      }
    });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    tab.url &&
    tab.url.includes('google.com/maps')
  ) {
    console.log("Sending showNotification message to tab", tabId);
    chrome.tabs.sendMessage(tabId, { action: "showNotification" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error sending message:", chrome.runtime.lastError);
      } else {
        console.log("Message sent successfully");
      }
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received in background", request);
  if (request.action === "openAppleMaps") {
    console.log("Opening Apple Maps with URL:", request.url);

    if (request.url.startsWith('maps://')) {
      // Construct the fallback URL
      const fallbackUrl = request.fallbackUrl || request.url.replace('maps://', 'https://maps.apple.com/');

      // Send a message back to the content script to handle opening the URL with fallback
      chrome.tabs.sendMessage(sender.tab.id, {
        action: "openAppleMapsInApp",
        appUrl: request.url,
        fallbackUrl: fallbackUrl
      });
    } else {
      // Open the URL in a new tab (Apple Maps website)
      chrome.tabs.create({ url: request.url });
    }

    sendResponse({ status: "success" });
  }
  return true;
});