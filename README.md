# eft-browser-extension
Escape from Tarkov Price Checker

* [About](#about)
* [Install](#install)
* [Usage](#usage)
* [License](#license)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT -->
## About

Browser extension that will render the flea mark price, dealer, and dealer price onto [Escape from Tarkov wiki](https://escapefromtarkov.gamepedia.com/Escape_from_Tarkov_Wiki) when you are looking at an iteam

<!-- INSTALL -->
## Install

Chrome Extension: https://chrome.google.com/webstore/detail/tarkov-price-checker/biodbhjiicmpkhkiodicnomhjlimigmp
Firefox Add-On: https://addons.mozilla.org/en-US/firefox/addon/tarkov-price-checker/

### Chrome manual install

1. Clone or download this repo, uncompress if you downloaded it.
2. In the URL bar of Chrome type `chrome://extensions` and press enter.
3. Press the "Load Unpacked" option on the top left of the window.
4. Select to the folder that you got from step 1.

### Firefox manual install

1. Clone or download this repo, uncompress if you downloaded it.
2. In the URL bar of FireFox type `about:debugging#/runtime/this-firefox` and press enter.
3. Press "Load Temporary Add-On..."
4. Select `manifest.json` file to load the extention.

Note on FireFox: The extension will be deleted if you're adding it manually using the instructions above, I haven't had success installing it anyother way.

<!-- USAGE -->
## Usage

Since I'm using a free tier node service the first couple of tries after install maybe not display the data expected due to the server spinning up. Just give it 10 seconds and try again then everything should work normally after the service is started.

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* Icon made by [Pixel perfect](https://www.flaticon.com/authors/pixel-perfect) from [www.flaticon.com](https://www.flaticon.com/)
* [tarkov-market.com](https://tarkov-market.com) for their easy to use API


