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

This forked version is **not** available on the Chrome Web Store. To use the extension, it must be **sideloaded** into your browser manually.

### Manual Installation (Sideloading)

1. **Download the Extension Files:**

   - **Clone the Repository:**
     ```bash
     git clone https://github.com/mvicari/open-in-Apple-Maps.git
     ```

   - **Or Download as ZIP:**
     - Go to the [GitHub repository](https://github.com/yourusername/open-in-Apple-Maps-fork).
     - Click the "Code" button and select "Download ZIP".
     - Extract the downloaded ZIP file to a desired location on your computer.

2. **Open Chrome Extensions Page:**

   - Open Google Chrome and navigate to `chrome://extensions/`.

3. **Enable Developer Mode:**

   - Toggle the "Developer mode" switch in the top right corner of the page.

4. **Load Unpacked Extension:**

   - Click on the "Load unpacked" button.
   - Select the directory where you downloaded or cloned the extension files (e.g., the folder containing `manifest.json`).

5. **Verify Installation:**

   - The extension should now appear in your list of installed extensions.
   - Ensure that it's enabled and functioning as expected.

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

   - Click the "Save" button to apply your changes.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

[MIT License](LICENSE)

## Acknowledgements

- Original extension by [OpenChampagne](https://github.com/openchampagne/open-in-Apple-Maps).

## Disclaimer

This extension is not affiliated with or endorsed by Google or Apple. It is a third-party tool intended to enhance your browsing experience.
