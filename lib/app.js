"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./utils");
/* =========================== /
/    html button controller    /
/ =========================== */
window.onload = function () {
    document.getElementById("createtile").onclick = function (evt) {
        util.createSecondaryTile(document.getElementById("pinIdInput").value, // TileId
        {
            title: document.getElementById("pinTextInput").value,
            activationArguments: document.getElementById("pinArgumentInput").value,
            logoUri: document.getElementById("pinUri").value,
            foregroundText: document.getElementById("pinFTextInput").value,
            backgroundColorWin: document.getElementById("pinBGCWin").value,
            backgroundColor: {
                a: document.getElementById("pinBGC-A").value,
                r: document.getElementById("pinBGC-R").value,
                g: document.getElementById("pinBGC-G").value,
                b: document.getElementById("pinBGC-B").value
            }
        });
    };
    document.getElementById("update").onclick = function (evt) {
        util.updateSecondaryTile(document.getElementById("updIdInput").value, {
            displayName: document.getElementById("updTextInput").value,
            showNameOnSquare: document.getElementById("updShowName").value,
            foregroundText: document.getElementById("updFTextInput").value,
            backgroundColorWin: document.getElementById("updBGCWin").value,
            backgroundColor: {
                a: document.getElementById("updBGC-A").value,
                r: document.getElementById("updBGC-R").value,
                g: document.getElementById("updBGC-G").value,
                b: document.getElementById("updBGC-B").value
            },
            squareTinyUri: document.getElementById("updUri").value,
            squareSmallUri: document.getElementById("updUri").value,
            squareMedUri: document.getElementById("updUri").value,
            squareWideUri: '',
            squareLargeUri: document.getElementById("updUri").value,
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
        util.changeAppTitleBarColor({
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
        util.addTimelineActivity({
            id: document.getElementById("timeId").value,
            title: document.getElementById("timeTitle").value,
            bodyText: document.getElementById("timeBody").value,
            imagePath: document.getElementById("timeUri").value,
            activationUri: document.getElementById("timeAct").value
        });
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
            }
            else {
                logger.innerHTML += arguments[i] + '<br />';
            }
        }
    };
})();
