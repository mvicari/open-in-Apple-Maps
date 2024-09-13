document.addEventListener('DOMContentLoaded', () => {
  const durationInput = document.getElementById('notificationDuration');
  const autodetectCheckbox = document.getElementById('autodetectEnabled');
  const openInAppCheckbox = document.getElementById('openInApp');
  const saveButton = document.getElementById('save');
  const status = document.getElementById('status');

// Load saved options
chrome.storage.sync.get(['notificationDuration', 'autodetectEnabled', 'openInApp'], (result) => {
  durationInput.value = result.notificationDuration || 5;
  autodetectCheckbox.checked = result.autodetectEnabled !== false;
  openInAppCheckbox.checked = result.openInApp !== false; // Default to true
});

  // Save options
  saveButton.addEventListener('click', () => {
    const duration = parseInt(durationInput.value, 10);
    if (isNaN(duration) || duration < 1 || duration > 30) {
      alert('Please enter a valid notification duration between 1 and 30 seconds.');
      return;
    }

    chrome.storage.sync.set({
      notificationDuration: duration,
      autodetectEnabled: autodetectCheckbox.checked,
      openInApp: openInAppCheckbox.checked
    }, () => {
      status.textContent = 'Options saved!';
      setTimeout(() => {
        status.textContent = '';
      }, 2000);
    });
  });
});