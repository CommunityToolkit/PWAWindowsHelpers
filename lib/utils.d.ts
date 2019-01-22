export declare function createSecondaryTile(tileId: any, options: any): Promise<{}>;
export declare function removeSecondaryTile(tileId: any): void;
export declare function updateSecondaryTile(tileId: any, options: any): void;
export declare function checkForDarkTheme(): "Theme is Dark" | "Theme is Light";
export declare function changeAppTitleBarColor(colorOptions: any): void;
export declare function toggleCompactOverlayMode(forceCompactOverlay?: boolean): any;
export declare function changeDesktopBackgroundImage(localImagePath: any): Promise<void>;
export declare function addTimelineActivity(options: any): Promise<boolean>;
