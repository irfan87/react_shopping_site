let express = require('express');
let browserify = require('browserify-middleware');
let babelify = require('babelify');
let browerSync = require('browser-sync');
let app = express();
let port = process.env.PORT || 8080;

browserify.settings({
    transform: [babelify.configure({})],
    presets: ["es2015", "react"],
    extensions: ['.js', '.jsx'],
    grep: /\.jsx?$/
});

app.get('/bundle.js', browserify(__dirname + '/source/app.jsx'));

app.get(['*.png', '*.jpg', '*css', '*.map'], (req, res) => {
    res.sendFile(__dirname + '/public/' + req.path);
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    browerSync({
        proxy: 'localhost:' + port,
        files: ['source/**/*.{jsx}', 'public/**/*.{css}'],
        options: {
            ignored: 'node_modules'
        }
    })
})