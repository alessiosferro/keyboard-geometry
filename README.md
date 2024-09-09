# Keyboard Geometry

Effortlessly select tools using customizable shortcuts or by searching and choosing them with the aid of an autocomplete
search bar 🏄‍♂️

## How it works?

This extension allows you to select tools using customizable shortcuts and easily find them through an autocomplete
search bar. You can also choose between two languages, English and Italian, with each language storing its shortcuts
separately. Shortcuts are searchable within the extension’s popup by tool name or assigned shortcut. You cannot assign
the same shortcut to two different tools: if you attempt to do so, the system will prompt you to confirm whether you
want to clear the previous shortcut, giving you the option to continue or abort the operation.

To quickly select the search bar, you can use a specific key combination, and then navigate through the options using
the up and down arrow keys. Press Enter while typing to select the first tool in the list, or scroll through the tools
and press Enter on the one you prefer.

Changing a shortcut is very simple: just select an input and press your preferred key combination! You can also use
special keys such as Shift, Control, or Alt. After entering your desired combination, simply click away from the input
field, and the shortcut will be saved automatically. The website will then reflect your changes by reloading
automatically.

## Build and run locally

Follow the steps below to install the extension locally:

1. run `npm install` to install all the node modules
2. run `npm build` to compile the React Typescript code into the dist folder by using webpack
3. go to `chrome://extensions` on your browser and turn on the development mode.
4. click on `Load the unpacked extension.` and select the dist folder on your machine.
5. go to https://www.geogebra.org/calculator or https://www.geogebra.org/geometry to use the extension
6. enjoy! 🤙