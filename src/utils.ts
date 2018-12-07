import 'babel-polyfill';

/* =========================== /
 /    Create Seccondary Tile    /
/ =========================== */

//Options:
//tileID - Unique ID that lets other functions change or unpin this tile (required)
//title - title name of secondary tile (required)
//activationArguments - arguments used when app is opened through tile
//logoURI - Image file path

export function createSecondaryTile(tileId, options) {
  if (!tileId) {
      console.log("No tileId supplied.")
      return;
  }
  console.log(options.logoUri)
  var logoUri = new Windows.Foundation.Uri(options.logoUri);
  var newTileDesiredSize = Windows.UI.StartScreen.TileOptions.showNameOnLogo;
  console.log(logoUri)
  if (!options.activationArguments)
 {
     options.activationArguments = " ";
 }
  var tile;
  try {
      tile = new Windows.UI.StartScreen.SecondaryTile(tileId, options.title, options.title, options.activationArguments, newTileDesiredSize, logoUri);
// Include any tile properties here v

//Title text color
if (options.foregroundText) {
    if (options.foregroundText == "dark") {
        var foregroundTextVal = 0
        tile.foregroundText = foregroundTextVal
    } else if (options.foregroundText == "light") {
        var foregroundTextVal = 1
        tile.foregroundText = foregroundTextVal
    }
}
// Background Color Update Code:
if (options.backgroundColorWin) {
    tile.backgroundColor = options.backgroundColorWin;
    } else if (options.backgroundColor.a && options.backgroundColor.r && options.backgroundColor.g && options.backgroundColor.b) {
        tile.backgroundColor = Windows.UI.ColorHelper.fromArgb(options.backgroundColor.a, options.backgroundColor.r, options.backgroundColor.g, options.backgroundColor.b);
    };


// Include any tile properties here ^
  } catch (e) {
      //Utils.error('failed to create secondary tile', e);
      return;
  }
  var element = document.body;
  if (element) {
      var selectionRect = element.getBoundingClientRect();
      var buttonCoordinates = { x: selectionRect.left, y: selectionRect.top, width: selectionRect.width, height: selectionRect.height };
      var placement = Windows.UI.Popups.Placement.above;
      return new Promise((resolve, reject) => {
          try {
              tile.requestCreateForSelectionAsync(buttonCoordinates, placement).done((isCreated) => {
                  if (isCreated) {
                      resolve(true);
                      console.log("Secondary Tile Id [" + tileId + "] successfully created!")
                  } else {
                      reject(false);
                      console.log("Secondary Tile Id [" + tileId + "] Was not created.")
                  }
              });
          } catch (e) {
              //Utils.error('failed to create secondary tile', e);
              reject(false);
          }
      });
  } else {
      //Utils.debug('No element to place (shall I pin a tile) question above:' + elementId);
      return new Promise(async (resolve, reject) => {
          reject(false);
      });
  }
}
  /* =========================== /
 /    Remove Seccondary Tile    /
/ =========================== */

export function removeSecondaryTile(tileId) {
    var element = document.body;
    if (element) {
        var selectionRect = element.getBoundingClientRect();
        var buttonCoordinates = { x: selectionRect.left, y: selectionRect.top, width: selectionRect.width, height: selectionRect.height };
        var placement = Windows.UI.Popups.Placement.above;
        var tileToBeDeleted = new Windows.UI.StartScreen.SecondaryTile(tileId);
        // Make the delete request.
        tileToBeDeleted.requestDeleteForSelectionAsync(buttonCoordinates, placement).then(function (isDeleted) {
            if (isDeleted) {
                // Secondary tile successfully deleted.
                console.log("Secondary Tile ID [" + tileId + "] Has been Deleted.")
            } else {
                // Secondary tile not deleted.
                console.log("Secondary Tile ID [" + tileId + "] Does not exist or had an error deleting.")
            }
        });
    }
}


  /* =========================== /
 /    Update Secondary Tile     /
/ =========================== */
// Update Secondary Tile with provided tileID and options. Available options are 
export function updateSecondaryTile(tileId, options) {
    if (Windows.UI.StartScreen.SecondaryTile.exists(tileId)) {
        var tileToBeUpdated = new Windows.UI.StartScreen.SecondaryTile(tileId);


        // Background Color Update Code:
        if (options.backgroundColorWin) {
            tileToBeUpdated.backgroundColor = options.backgroundColorWin;
        } else if (options.backgroundColor.a && options.backgroundColor.r && options.backgroundColor.g && options.backgroundColor.b) {
            tileToBeUpdated.backgroundColor = Windows.UI.ColorHelper.fromArgb(options.backgroundColor.a, options.backgroundColor.r, options.backgroundColor.g, options.backgroundColor.b);
        };

        // DisplayName Update Code:
        if (options.displayName) {
            tileToBeUpdated.displayName = options.displayName;
        }

        //Update Medium 150x150 Uri
        if (options.squareMedUri) {
            var uri = new Windows.Foundation.Uri(options.squareMedUri);
            tileToBeUpdated.visualElements.square150x150Logo = uri;
        }

        //foreground text
        if(options.showNameOnSquare == 0){
            var showText = Windows.UI.StartScreen.TileOptions.none
            console.log("Expecting: 1 Show: "+showText)
        } else {
            var showText = Windows.UI.StartScreen.TileOptions.showNameOnLogo
            console.log("Expecting: 0 Show: "+showText)
        }
            tileToBeUpdated.tileOptions = showText


        if (options.foregroundText) {
            if (options.foregroundText == "dark") {
                var foregroundText = 0
                tileToBeUpdated.foregroundText = foregroundText
            } if (options.foregroundText == "light") {
                var foregroundText = 1
                tileToBeUpdated.foregroundText = foregroundText
            } else {
                
            }
        }
        // Sync
        tileToBeUpdated.updateAsync().then(function (success) {
            console.log("Secondary Tile ID [" + tileId + "] was updated!")
        });
    } else {
        console.log("Secondary Tile ID [" + tileId + "] is not pinned.")
    }
}

  /* =========================== /
 /      Check for Dark Theme    /
/ =========================== */
export function checkForDarkTheme() {
    if (window.window) {
        // Change the theme to light or dark
        var uiSettings = new Windows.UI.ViewManagement.UISettings();
        var color = uiSettings.getColorValue(Windows.UI.ViewManagement.UIColorType.background)
        if (color.b === 0) {
            return "Theme is Dark"
        } else {
            return "Theme is Light"
        }
    }
}

  /* =========================== /
 /    Change Title Bar Colors   /
/ =========================== */
export function changeAppTitleBarColor(colorOptions) {

    if (window.window && Windows.UI.ViewManagement.ApplicationView) {
        var customColors = {
            backgroundColor: colorOptions.backgroundColor,
            foregroundColor: colorOptions.foregroundColor,
            buttonBackgroundColor: colorOptions.buttonBackgroundColor,
            buttonForegroundColor: colorOptions.buttonForegroundColor,
            buttonHoverBackgroundColor: colorOptions.buttonHoverBackgroundColor,
            buttonHoverForegroundColor: colorOptions.buttonHoverForegroundColor,
            buttonPressedBackgroundColor: colorOptions.buttonPressedBackgroundColor,
            buttonPressedForegroundColor: colorOptions.buttonPressedForegroundColor,
            inactiveBackgroundColor: colorOptions.inactiveBackgroundColor,
            inactiveForegroundColor: colorOptions.inactiveForegroundColor,
            buttonInactiveBackgroundColor: colorOptions.buttonInactiveBackgroundColor,
            buttonInactiveForegroundColor: colorOptions.buttonInactiveForegroundColor
        };

        var titleBar = Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar;
        titleBar.backgroundColor = customColors.backgroundColor;
        titleBar.foregroundColor = customColors.foregroundColor;
        titleBar.inactiveBackgroundColor = customColors.inactiveBackgroundColor;
        titleBar.inactiveForegroundColor = customColors.inactiveForegroundColor;
        console.log("Title Bar Color Changed")
    }
}

  /* =========================== /
 / Toggle Compact Overlay Mode  /
/ =========================== */
export function toggleCompactOverlayMode(forceCompactOverlay = false) {
    if (!window.window) return Promise.resolve("unsupported");

    var applicationView = Windows.UI.ViewManagement.ApplicationView;
    var currentMode = (applicationView.getForCurrentView() as any).viewMode;
    //console.log(applicationView.getForCurrentView());

    var newMode = (currentMode == (Windows.UI.ViewManagement as any).ApplicationViewMode.default) || forceCompactOverlay
        ? (Windows.UI.ViewManagement as any).ApplicationViewMode.compactOverlay
        : (Windows.UI.ViewManagement as any).ApplicationViewMode.default;

    console.log("newMode: ", newMode);
    console.log("currentMode: ", currentMode);
    console.log("Compact Mode Toggled");

    return (applicationView.getForCurrentView() as any)
        .tryEnterViewModeAsync(newMode)
        .then(() => newMode);
}
  /* =========================== /
 /      Change Wallpaper        /
/ =========================== */

export async function changeDesktopBackgroundImage(localImagePath) {
    if (!window.window || !Windows.System.UserProfile.UserProfilePersonalizationSettings.isSupported()) {
        return;
    }

    const profileSettings = Windows.System.UserProfile.UserProfilePersonalizationSettings.current;

    // 1. Get a reference to the original image (from manifest)
    let originalBg = await Windows.Storage.StorageFile.getFileFromApplicationUriAsync(new Windows.Foundation.Uri("ms-appx:///images/Square150x150Logo.png"));//"ms-appx:///" + localImagePath));

    // 2. Copy image to LocalState folder
    const last = (arr) => arr[arr.length - 1];
    let newName = last(localImagePath.split('/'));
    await originalBg.copyAsync(Windows.Storage.ApplicationData.current.localFolder, newName, 1);
    let localBg = await Windows.Storage.ApplicationData.current.localFolder.getFileAsync(newName);

    // 3. Set as desktop bg image
    await profileSettings.trySetWallpaperImageAsync(localBg);
    console.log("Background Changed Successfully")
}

/* =========================== /
/       Add To Timeline        /
/ =========================== */

export async function addTimelineActivity(id, title, bodyText, imagePath, activationUri) {
    if (!window.window) {
        return false;
    }

    const imageUrl = window.location.protocol + '//' + window.location.host + imagePath;

    // build adaptive card
    let cardJson = Object.assign({}, adaptiveCardTemplate);
    cardJson.backgroundImage = imageUrl;
    cardJson.body[0].items[0].text = title;
    cardJson.body[0].items[1].text = bodyText;
    const adaptiveCard = (Windows.UI as any).Shell.AdaptiveCardBuilder.createAdaptiveCardFromJson(JSON.stringify(cardJson));

    const channel = (Windows.ApplicationModel as any).UserActivities.UserActivityChannel.getDefault();

    // create and save activity
    const activity = await channel.getOrCreateUserActivityAsync(id);
    activity.visualElements.content = adaptiveCard;
    activity.visualElements.displayText = bodyText;
    activity.activationUri = new Windows.Foundation.Uri(activationUri);

    await activity.saveAsync();
    console.log("Timeline Updated")

    if (lastKnownSession && lastKnownSession.close) {
        lastKnownSession.close();
    }

    lastKnownSession = activity.createSession();
}

let lastKnownSession = null;
const adaptiveCardTemplate = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "backgroundImage": null,
    "body": [
        {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": null,
                    "weight": "bolder",
                    "size": "large",
                    "wrap": true,
                    "maxLines": 3
                },
                {
                    "type": "TextBlock",
                    "text": null,
                    "size": "default",
                    "wrap": true,
                    "maxLines": 3
                }
            ]
        }
    ]
};