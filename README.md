# Simple Progressive Web App API

Github: `https://github.com/bixybixy2/TS-PWAAPI`
- Download utils.js from dist folder and add to your project

NPM: `https://www.npmjs.com/package/ts-pwaapi`
- From the command line, run `npm i ts-pwaapi` 

Functions:

- createSecondaryTile(tileId, options)
Options group includes title, activationArguments, logoUri, foregroundText, backgroundColorWin, and backgroundColor{a,r,g,b}
example:
createSecondaryTile(12345,{
    title: SecondaryTile,
    activationArguments: Args,
    logoUri: URI,
    foregroundText: light,
    backgroundColorWin: '',
    backgroundColor: {a: 255, r: 255, g: 255, b: 255}
    })

- updateSecondaryTile(tileId, options)
Options group includes displayName, showNameOnSquare, foregroundText, squareMedUri, backgroundColorWin, and backgroundColor{a,r,g,b},
Example:
updateSecondaryTile(12345,{
    displayName: SecondaryTile,
    showNameOnSquare: 1, 
    foregroundText: light, 
    backgroundColorWin: '', 
    backgroundColor: {a: 255, r: 255, g: 255, b: 255}
    })

- removeSecondaryTile(tileId)

- checkForDarkTheme()

- changeAppTitleBarColor(colorOptions)
Options group includes backgroundColor, foregroundColor, buttonBackgroundColor, buttonForegroundColor, buttonHoverBackgroundColor, buttonHoverForegroundColor, buttonPressedBackgroundColor, buttonPressedForegroundColor, inactiveBackgroundColor, inactiveForegroundColor, buttonInactiveBackgroundColor, buttonInactiveForegroundColor. All use {a,r,g,b}
Example:
changeAppTitleBarColor( // ARGB settings, all accept 0-255 decimal or 0x## hexadecimal
    {a: 255,r: 100,g: 200,b: 225}, //backgroundColor
    {a: 255,r: 125,g: 225,b: 250}, //foregroundColor
    {a: 255,r:  75,g: 175,b: 200}, //buttonBackgroundColor
    {a: 255,r:  25,g:  25,b:  25}, //buttonForegroundColor
    {a: 255,r:  65,g: 165,b: 190}, //buttonHoverBackgroundColor
    {a: 255,r:  25,g:  25,b:  25}, //buttonHoverForegroundColor
    {a: 255,r:  55,g: 155,b: 180}, //buttonPessedBackgroundColor
    {a: 255,r:  35,g:  35,b:  35}, //buttonPressedForegroundColor
    {a: 100,r: 100,g: 200,b: 225}, //inactiveBackgroundColor
    {a: 100,r: 125,g: 225,b: 250}, //inactiveForegroundColor
    {a: 100,r:  75,g: 175,b: 200}, //buttonInactiveBackgroundColor
    {a: 100,r:  25,g:  25,b:  25}, //buttonInactiveForegroundColor    
})


- toggleCompactOverlayMode()

- addTimelineActivity(options)
Options group includes id, title, bodytext, imagepath, and activationUri.

- changeDesktopBackgroundImage(localImagePath)

