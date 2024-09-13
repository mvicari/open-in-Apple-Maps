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
      const openInApp = result.openInApp !== false; // Default to true
      if (openInApp) {
        // Use the Apple Maps URL scheme and construct the fallback URL
        const appUrl = `maps://?q=${query}`;
        const fallbackUrl = `https://maps.apple.com/?q=${query}`;

        // Inject code into the page to handle opening the app with fallback
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: openAppleMapsInAppInjected,
          args: [appUrl, fallbackUrl]
        });
      } else {
        // Open the Apple Maps beta website
        const url = `https://beta.maps.apple.com/?q=${query}`;
        chrome.tabs.create({ url: url });
      }
    });
  }
});

// Define the function to be injected
function openAppleMapsInAppInjected(appUrl, fallbackUrl) {
  // Function body similar to openAppleMapsInApp in content.js
  console.log("Attempting to open Apple Maps app with URL:", appUrl);

  // Create an invisible iframe to open the custom URL scheme
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = appUrl;
  document.body.appendChild(iframe);

  // Set a timeout to redirect to the fallback URL if the app doesn't open
  const timeoutDuration = 1500; // Time in milliseconds
  const fallbackTimeout = setTimeout(() => {
    console.log("Apple Maps app did not open, redirecting to fallback URL");
    window.location.href = fallbackUrl;
    document.body.removeChild(iframe);
  }, timeoutDuration);

  // Clean up the iframe after a longer delay
  setTimeout(() => {
    clearTimeout(fallbackTimeout);
    if (iframe.parentNode) {
      document.body.removeChild(iframe);
    }
  }, timeoutDuration + 500);
}

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

      // Inject code into the page to handle opening the app with fallback
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        func: openAppleMapsInAppInjected,
        args: [request.url, fallbackUrl]
      });
    } else {
      // Open the URL in a new tab (Apple Maps website)
      chrome.tabs.create({ url: request.url });
    }

    sendResponse({ status: "success" });
  }
  return true;
});