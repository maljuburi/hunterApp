cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "id": "cordova-plugin-flashlight.Flashlight",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-flashlight": "3.2.0",
    "cordova-plugin-whitelist": "1.3.2"
}
// BOTTOM OF METADATA
});