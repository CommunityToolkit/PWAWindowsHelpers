const path = require('path');

module.exports = {
    entry: {
        auth: './lib/utils.js'
    },
    output : {
        filename: 'pwa.js',
        library: 'PWA',
        path: path.resolve(__dirname, 'dist')
    }
};