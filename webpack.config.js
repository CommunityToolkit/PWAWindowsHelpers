const path = require('path');

module.exports = {
    entry: {
        auth: './lib/utils.js'
    },
    output : {
        filename: 'pwa.js',
        library: 'pwa',
        path: path.resolve(__dirname, 'dist')
    }
};