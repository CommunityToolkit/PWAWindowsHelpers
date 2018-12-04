import * as util from './utils';

  /* =========================== /
 /    html button controller    /
/ =========================== */
window.onload = function () {
    document.getElementById("createtile").onclick = function (evt) {
        //var text = "Text";
        var text = (document.getElementById("pinTextInput") as any).value;
        var activationArguments = (document.getElementById("pinArgumentInput") as any).value;
        var tileId = (document.getElementById("pinIdInput") as any).value;
        var logoUri = "";
        var uriSmallLogo = "";
        var foregroundText = (document.getElementById("pinFTextInput") as any).value;
        util.createSecondaryTile(text, activationArguments, tileId, logoUri, uriSmallLogo, foregroundText);
    };
    
    document.getElementById("update").onclick = function (evt) {
        util.updateSecondaryTile((document.getElementById("updIdInput") as any).value,
            {
                displayName: (document.getElementById("updTextInput") as any).value, // accepts strings. Keep short to avoid truncation.
                showNameOnSquare: (document.getElementById("updShowName") as any).value, // accepts 0 or 1. 0 is to hide displayName, 1 is to show displayName
                foregroundText: (document.getElementById("updFTextInput") as any).value, // changes text color between 'dark' or 'light'
                backgroundColorWin: (document.getElementById("updBGCWin") as any).value, // accepts Windows.UI.Colors.[Color]  Leave '' to use ARGB
                backgroundColor: { // ARGB settings, all accept 0-255 decimal or 0x## hexadecimal
                    a: (document.getElementById("updBGC-A") as any).value,
                    r: (document.getElementById("updBGC-R") as any).value,
                    g: (document.getElementById("updBGC-G") as any).value,
                    b: (document.getElementById("updBGC-B") as any).value,
                },
                squareTinyUri: '', //Square30x30Logo
                squareSmallUri: '', //Square70x70Logo
                squareMedUri: '', //Square150x150Logo
                squareWideUri: '', //Square310x150Logo
                squareLargeUri: '', //Square310x310Logo
            });
    };

    document.getElementById("checkpin").onclick = function (evt) {
        var isPinned = Windows.UI.StartScreen.SecondaryTile.exists('12345');
        console.log(isPinned);
    };

    document.getElementById("unpin").onclick = function (evt) {
        util.removeSecondaryTile('12345');
    };

    document.getElementById("CheckTheme").onclick = function (evt) {
        var theme = util.checkForDarkTheme();
        console.log(theme);
    };
    document.getElementById("titleBarColor").onclick = function (evt) {
        util.changeAppTitleBarColor({ // ARGB settings, all accept 0-255 decimal or 0x## hexadecimal
            backgroundColor: { a: 255, r: 24, g: 260, b: 216 },
            foregroundColor: { a: 255, r: 22, g: 211, b: 262 },
            buttonBackgroundColor: { a: 255, r: 54, g: 260, b: 116 },
            buttonForegroundColor: { a: 255, r: 232, g: 111, b: 162 },
            buttonHoverBackgroundColor: { a: 255, r: 19, g: 221, b: 40 },
            buttonHoverForegroundColor: { a: 255, r: 25, g: 255, b: 255 },
            buttonPressedBackgroundColor: { a: 255, r: 22, g: 211, b: 162 },
            buttonPressedForegroundColor: { a: 255, r: 54, g: 260, b: 116 },
            inactiveBackgroundColor: { a: 255, r: 135, g: 11, b: 199 },
            inactiveForegroundColor: { a: 255, r: 232, g: 21, b: 162 },
            buttonInactiveBackgroundColor: { a: 255, r: 135, g: 241, b: 199 },
            buttonInactiveForegroundColor: { a: 255, r: 232, g: 211, b: 162 }
        });
    };

    document.getElementById("compactOverlay").onclick = function (evt) {
        var forceCompactOverlay = false;
        var Promise = util.toggleCompactOverlayMode(forceCompactOverlay);
    };
    document.getElementById("background").onclick = function (evt) {
        var localImagePath = "images/Square150x150Logo.png";

        util.changeDesktopBackgroundImage(localImagePath);
    };
    document.getElementById("addTimeline").onclick = function (evt) {
        var id = "23456";
        var title = "Banana";
        var bodyText = "Graasdpe";
        var imagePath = "";
        var activationUri = "https://www.google.com";
        util.addTimelineActivity(id, title, bodyText, imagePath, activationUri);
    };
};


  /* =========================== /
 /  console.log to html Console /
/ =========================== */
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
            } else {
                logger.innerHTML += arguments[i] + '<br />';
            }
        }
    }
})();