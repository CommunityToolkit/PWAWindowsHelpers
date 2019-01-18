# Simple Progressive Web App API

Github: `https://github.com/bixybixy2/TS-PWAAPI`
- Download utils.js from dist folder and add to your project

NPM: `https://www.npmjs.com/package/ts-pwaapi`
- From the command line, run `npm i ts-pwaapi` 

Functions that are imported:

- createSecondaryTile(tileId, options)
Options group includes title, activationArguments, logoUri, foregroundText, backgroundColorWin, and backgroundColor{a,r,g,b}

createSecondaryTile(12345, {title: SecondaryTile, activationArguments: Args, logoUri: URI, foregroundText: light, backgroundColorWin: '', backgroundColor: {a: 255, r: 255, g: 255, b: 255})

- updateSecondaryTile(tileId, options)
Options group includes displayName, showNameOnSquare, foregroundText, squareMedUri, backgroundColorWin, and backgroundColor{a,r,g,b},

updateSecondaryTile(12345, {displayName: SecondaryTile, showNameOnSquare: 1, foregroundText: light, backgroundColorWin: '', backgroundColor: {a: 255, r: 255, g: 255, b: 255} })

- removeSecondaryTile(tileId)

- checkForDarkTheme()

- changeAppTitleBarColor(colorOptions)

Options group includes backgroundColor, foregroundColor, buttonBackgroundColor, buttonForegroundColor, buttonHoverBackgroundColor, buttonHoverFOregroundColor, buttonPressedBackgroundColor, buttonPressedForegroundColor, inactiveBackgroundColor, inactiveForegroundColor, buttonInactiveBackgroundColor, buttonInactiveForegroundColor. All use {a,r,g,b}

- toggleCompactOverlayMode()

- addTimelineActivity(options)

Options group includes id, title, bodytext, imagepath, and activationUri.

- changeDesktopBackgroundImage(localImagePath)

