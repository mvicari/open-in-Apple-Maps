# Open-in-Apple-Maps Fork

**Forked from [Open-in-Apple-Maps](https://github.com/openchampagne/open-in-Apple-Maps)**

A browser extension that prompts to open Google Maps links in Apple Maps and provides Right Click to Search in Apple Maps functionality.

## Features

- **Prompts on Google Maps:** Automatically displays a notification on Google Maps prompting to open the address in Apple Maps.

- **Right Click to Search:** Highlight and Right Click any text on any webpage to search Apple Maps.

- **Customizable:**
  - **Notification Duration:** Adjust the duration of the notification banner.
  - **Enable/Disable Autodetect:** Toggle the automatic prompt on Google Maps.
  - **Open in App or Web:** Choose to open locations in the Apple Maps desktop app (default) or the Apple Maps web version (`https://beta.maps.apple.com/`).

- **Seamless Integration:** Integrates smoothly with Google Chrome, providing a non-intrusive experience.

## Installation

### Note

This forked version is **not** available on the Chrome Web Store. Installation must be done manually.

### Manual Installation

1. **Download the Extension Files:**

   Download the extension files from the [GitHub repository](https://github.com/yourusername/open-in-Apple-Maps-fork/releases).

2. **Open Chrome Extensions Page:**

   Navigate to `chrome://extensions/` in your Chrome browser.

3. **Enable Developer Mode:**

   Toggle the "Developer mode" switch in the top right corner.

4. **Load Unpacked Extension:**

   Click on the "Load unpacked" button and select the directory where you downloaded the extension files.

## Usage

### Google Maps Notification

When navigating to Google Maps, the extension displays a notification banner prompting to open the current location in Apple Maps.

- **Open in App:** Click "Open" to launch the Apple Maps desktop app.
- **Fallback:** If the desktop app fails to open, it redirects to `https://maps.apple.com/`.

### Right Click to Search on Any Webpage

Highlight any address or location text on any webpage, right-click, and select "Search on Apple Maps" to open the location.

- **Open in App:** If enabled, attempts to open the Apple Maps desktop app.
- **Open in Web:** If disabled, opens the location in the Apple Maps web version (`https://beta.maps.apple.com/`).

## Options

Customize the extension's behavior via the options page.

1. **Access Options Page:**

   - Right-click on the extension icon and select "Options".
   - Or go to `chrome://extensions/`, find the extension, and click "Details" > "Extension options".

2. **Available Settings:**

   - **Notification Duration (seconds):** Set the duration the notification banner appears on Google Maps.
   - **Enable Autodetect on Google Maps:** Toggle the automatic display of the notification banner.
   - **Open locations in the Apple Maps app instead of the website:** Choose to open in the desktop app (default) or the web version.

3. **Save Settings:**

   Click the "Save" button to apply your changes.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

[MIT License](LICENSE)

## Acknowledgements

- Original extension by [OpenChampagne](https://github.com/openchampagne/open-in-Apple-Maps).

## Disclaimer

This extension is not affiliated with or endorsed by Google or Apple. It is a third-party tool intended to enhance your browsing experience.
