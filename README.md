# Simple Progressive Web App API

Github: `https://github.com/bixybixy2/TS-PWAAPI`
- Download pwa.js from dist folder and add to your project

NPM: `https://www.npmjs.com/package/ts-pwaapi`
- From the command line, run `npm i ts-pwaapi` 

Example Importing the library:
```js
import * as pwa from './pwa.js'
```

Functions:

## createSecondaryTile(tileId, options)
Options group includes title, activationArguments, logoUri, foregroundText, backgroundColorWin, and backgroundColor{a,r,g,b}

Example: 
```js
pwa.createSecondaryTile(12345,{
    title: SecondaryTile,
    activationArguments: Args,
    logoUri: URI,
    foregroundText: light,
    backgroundColorWin: '',
    backgroundColor: {a: 255, r: 255, g: 255, b: 255}
    })
```

## updateSecondaryTile(tileId, options) <br>
Options group includes displayName, showNameOnSquare, foregroundText, squareMedUri, backgroundColorWin, and backgroundColor{a,r,g,b}

Example:
```js
pwa.updateSecondaryTile(12345,{
    displayName: SecondaryTile,
    showNameOnSquare: 1, 
    foregroundText: light, 
    backgroundColorWin: '', 
    backgroundColor: {a: 255, r: 255, g: 255, b: 255}
    })n
```
## removeSecondaryTile(tileId)
Unpins secondary tile from the start menu. <br>
Example:
```js
pwa.removeSecondaryTile(12345)
```

## checkForDarkTheme() 
Returns true or false if system theme is dark <br>
Example:
```js
let isDarkTheme = pwa.checkForDarkTheme();
```

## changeAppTitleBarColor(colorOptions) <br>
Options group includes backgroundColor, foregroundColor, buttonBackgroundColor, buttonForegroundColor, buttonHoverBackgroundColor, buttonHoverForegroundColor, buttonPressedBackgroundColor, buttonPressedForegroundColor, inactiveBackgroundColor, inactiveForegroundColor, buttonInactiveBackgroundColor, buttonInactiveForegroundColor. <br>
All use {a,r,g,b} settings that accept 0-255 decimal or 0x## hexadecimal

Example:
```js
pwa.changeAppTitleBarColor({
    backgroundColor: {a: 255,r: 100,g: 200,b: 225},
    foregroundColor: {a: 255,r: 125,g: 225,b: 250},
    inactiveBackgroundColor: {a: 100,r: 100,g: 200,b: 225},
    inactiveForegroundColor: {a: 100,r: 125,g: 225,b: 250}  
})
```

## toggleCompactOverlayMode() <br>
toggle window between default and shrunken overlay <br>
Example:
```js
pwa.toggleCompactOverlayMode()
```
## addTimelineActivity(options)
Options group includes id, title, bodytext, imagepath, and activationUri. <br>
Example:
```js
pwa.addTimelineActivity({id: 12345, title: 'Title!', bodytext: 'Information!', imagepath: 'Uri', activationUri: 'Uri'})
```
## changeDesktopBackgroundImage(localImagePath)
Change desktop background to provided image <br>
Example:
```js
pwa.changeDesktopBackgroundImage('Uri')
```
