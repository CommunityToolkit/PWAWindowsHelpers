"use strict";
// import "babel-polyfill"
/* =========================== /
 /    Create Seccondary Tile    /
/ =========================== */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//Options:
//tileID - Unique ID that lets other functions change or unpin this tile (required)
//title - title name of secondary tile (required)
//activationArguments - arguments used when app is opened through tile
//logoURI - Image file path
function createSecondaryTile(tileId, options) {
    var _this = this;
    if (!tileId) {
        console.log("No tileId supplied.");
        return;
    }
    console.log(options.logoUri);
    var logoUri = new Windows.Foundation.Uri(options.logoUri);
    var newTileDesiredSize = Windows.UI.StartScreen.TileOptions.showNameOnLogo;
    console.log(logoUri);
    if (!options.activationArguments) {
        options.activationArguments = " ";
    }
    var tile;
    try {
        tile = new Windows.UI.StartScreen.SecondaryTile(tileId, options.title, options.title, options.activationArguments, newTileDesiredSize, logoUri);
        // Include any tile properties here v
        //Title text color
        if (options.foregroundText) {
            if (options.foregroundText == "dark") {
                var foregroundTextVal = 0;
                tile.foregroundText = foregroundTextVal;
            }
            else if (options.foregroundText == "light") {
                var foregroundTextVal = 1;
                tile.foregroundText = foregroundTextVal;
            }
        }
        // Background Color Update Code:
        if (options.backgroundColorWin) {
            tile.backgroundColor = options.backgroundColorWin;
        }
        else if (options.backgroundColor.a && options.backgroundColor.r && options.backgroundColor.g && options.backgroundColor.b) {
            tile.backgroundColor = Windows.UI.ColorHelper.fromArgb(options.backgroundColor.a, options.backgroundColor.r, options.backgroundColor.g, options.backgroundColor.b);
        }
        ;
        // Include any tile properties here ^
    }
    catch (e) {
        //Utils.error('failed to create secondary tile', e);
        return;
    }
    var element = document.body;
    if (element) {
        var selectionRect = element.getBoundingClientRect();
        var buttonCoordinates = { x: selectionRect.left, y: selectionRect.top, width: selectionRect.width, height: selectionRect.height };
        var placement = Windows.UI.Popups.Placement.above;
        return new Promise(function (resolve, reject) {
            try {
                tile.requestCreateForSelectionAsync(buttonCoordinates, placement).done(function (isCreated) {
                    if (isCreated) {
                        resolve(true);
                        console.log("Secondary Tile Id [" + tileId + "] successfully created!");
                    }
                    else {
                        reject(false);
                        console.log("Secondary Tile Id [" + tileId + "] Was not created.");
                    }
                });
            }
            catch (e) {
                //Utils.error('failed to create secondary tile', e);
                reject(false);
            }
        });
    }
    else {
        //Utils.debug('No element to place (shall I pin a tile) question above:' + elementId);
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                reject(false);
                return [2 /*return*/];
            });
        }); });
    }
}
exports.createSecondaryTile = createSecondaryTile;
/* =========================== /
/    Remove Seccondary Tile    /
/ =========================== */
function removeSecondaryTile(tileId) {
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
                console.log("Secondary Tile ID [" + tileId + "] Has been Deleted.");
            }
            else {
                // Secondary tile not deleted.
                console.log("Secondary Tile ID [" + tileId + "] Does not exist or had an error deleting.");
            }
        });
    }
}
exports.removeSecondaryTile = removeSecondaryTile;
/* =========================== /
/    Update Secondary Tile     /
/ =========================== */
// Update Secondary Tile with provided tileID and options. Available options are 
function updateSecondaryTile(tileId, options) {
    if (Windows.UI.StartScreen.SecondaryTile.exists(tileId)) {
        var tileToBeUpdated = new Windows.UI.StartScreen.SecondaryTile(tileId);
        // Background Color Update Code:
        if (options.backgroundColorWin) {
            tileToBeUpdated.backgroundColor = options.backgroundColorWin;
        }
        else if (options.backgroundColor.a && options.backgroundColor.r && options.backgroundColor.g && options.backgroundColor.b) {
            tileToBeUpdated.backgroundColor = Windows.UI.ColorHelper.fromArgb(options.backgroundColor.a, options.backgroundColor.r, options.backgroundColor.g, options.backgroundColor.b);
        }
        ;
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
        if (options.showNameOnSquare == 0) {
            var showText = Windows.UI.StartScreen.TileOptions.none;
            console.log("Expecting: 1 Show: " + showText);
        }
        else {
            var showText = Windows.UI.StartScreen.TileOptions.showNameOnLogo;
            console.log("Expecting: 0 Show: " + showText);
        }
        tileToBeUpdated.tileOptions = showText;
        if (options.foregroundText) {
            if (options.foregroundText == "dark") {
                var foregroundText = 0;
                tileToBeUpdated.foregroundText = foregroundText;
            }
            if (options.foregroundText == "light") {
                var foregroundText = 1;
                tileToBeUpdated.foregroundText = foregroundText;
            }
            else {
            }
        }
        // Sync
        tileToBeUpdated.updateAsync().then(function (success) {
            console.log("Secondary Tile ID [" + tileId + "] was updated!");
        });
    }
    else {
        console.log("Secondary Tile ID [" + tileId + "] is not pinned.");
    }
}
exports.updateSecondaryTile = updateSecondaryTile;
/* =========================== /
/      Check for Dark Theme    /
/ =========================== */
function checkForDarkTheme() {
    if (window.window) {
        // Change the theme to light or dark
        var uiSettings = new Windows.UI.ViewManagement.UISettings();
        var color = uiSettings.getColorValue(Windows.UI.ViewManagement.UIColorType.background);
        if (color.b === 0) {
            return "Theme is Dark";
        }
        else {
            return "Theme is Light";
        }
    }
}
exports.checkForDarkTheme = checkForDarkTheme;
/* =========================== /
/    Change Title Bar Colors   /
/ =========================== */
function changeAppTitleBarColor(colorOptions) {
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
        console.log("Title Bar Color Changed");
    }
}
exports.changeAppTitleBarColor = changeAppTitleBarColor;
/* =========================== /
/ Toggle Compact Overlay Mode  /
/ =========================== */
function toggleCompactOverlayMode(forceCompactOverlay) {
    if (forceCompactOverlay === void 0) { forceCompactOverlay = false; }
    if (!window.window)
        return Promise.resolve("unsupported");
    var applicationView = Windows.UI.ViewManagement.ApplicationView;
    var currentMode = applicationView.getForCurrentView().viewMode;
    //console.log(applicationView.getForCurrentView());
    var newMode = (currentMode == Windows.UI.ViewManagement.ApplicationViewMode.default) || forceCompactOverlay
        ? Windows.UI.ViewManagement.ApplicationViewMode.compactOverlay
        : Windows.UI.ViewManagement.ApplicationViewMode.default;
    console.log("newMode: ", newMode);
    console.log("currentMode: ", currentMode);
    console.log("Compact Mode Toggled");
    return applicationView.getForCurrentView()
        .tryEnterViewModeAsync(newMode)
        .then(function () { return newMode; });
}
exports.toggleCompactOverlayMode = toggleCompactOverlayMode;
/* =========================== /
/      Change Wallpaper        /
/ =========================== */
function changeDesktopBackgroundImage(localImagePath) {
    return __awaiter(this, void 0, void 0, function () {
        var profileSettings, originalBg, last, newName, localBg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!window.window || !Windows.System.UserProfile.UserProfilePersonalizationSettings.isSupported()) {
                        return [2 /*return*/];
                    }
                    profileSettings = Windows.System.UserProfile.UserProfilePersonalizationSettings.current;
                    return [4 /*yield*/, Windows.Storage.StorageFile.getFileFromApplicationUriAsync(new Windows.Foundation.Uri("ms-appx:///images/Square150x150Logo.png"))];
                case 1:
                    originalBg = _a.sent();
                    last = function (arr) { return arr[arr.length - 1]; };
                    newName = last(localImagePath.split('/'));
                    return [4 /*yield*/, originalBg.copyAsync(Windows.Storage.ApplicationData.current.localFolder, newName, 1)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, Windows.Storage.ApplicationData.current.localFolder.getFileAsync(newName)];
                case 3:
                    localBg = _a.sent();
                    // 3. Set as desktop bg image
                    return [4 /*yield*/, profileSettings.trySetWallpaperImageAsync(localBg)];
                case 4:
                    // 3. Set as desktop bg image
                    _a.sent();
                    console.log("Background Changed Successfully");
                    return [2 /*return*/];
            }
        });
    });
}
exports.changeDesktopBackgroundImage = changeDesktopBackgroundImage;
/* =========================== /
/       Add To Timeline        /
/ =========================== */
function addTimelineActivity(options) {
    return __awaiter(this, void 0, void 0, function () {
        var imageUrl, cardJson, adaptiveCard, channel, activity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!window.window) {
                        return [2 /*return*/, false];
                    }
                    console.log(options.title, " ", options.bodyText, " ", options.imagePath, " ", options.activationUri);
                    imageUrl = window.location.protocol + '//' + window.location.host + options.imagePath;
                    cardJson = Object.assign({}, adaptiveCardTemplate);
                    cardJson.backgroundImage = imageUrl;
                    cardJson.body[0].items[0].text = options.title;
                    cardJson.body[0].items[1].text = options.bodyText;
                    adaptiveCard = Windows.UI.Shell.AdaptiveCardBuilder.createAdaptiveCardFromJson(JSON.stringify(cardJson));
                    channel = Windows.ApplicationModel.UserActivities.UserActivityChannel.getDefault();
                    return [4 /*yield*/, channel.getOrCreateUserActivityAsync(options.id)];
                case 1:
                    activity = _a.sent();
                    activity.visualElements.content = adaptiveCard;
                    activity.visualElements.displayText = options.bodyText;
                    activity.activationUri = new Windows.Foundation.Uri(options.activationUri);
                    return [4 /*yield*/, activity.saveAsync()];
                case 2:
                    _a.sent();
                    console.log("Timeline Updated");
                    if (lastKnownSession && lastKnownSession.close) {
                        lastKnownSession.close();
                    }
                    lastKnownSession = activity.createSession();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addTimelineActivity = addTimelineActivity;
var lastKnownSession = null;
var adaptiveCardTemplate = {
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
