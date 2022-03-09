const chalk = require('chalk')
console.log('Generating icons...')
const sharp = require('sharp')

const logo = sharp('public/static/favicon/logo.png')

// android-chrome-96x96.png
logo.resize(96, 96).toFile('public/static/favicons/android-chrome-96x96.png')

// apple-touch-icon-57x57.png
logo.resize(57, 57).toFile('public/static/favicons/apple-touch-icon.png')

// favicon-16x16.png favicon-32x32.png favicon.ico
logo.resize(16, 16).toFile('public/static/favicons/favicon-16x16.png')
logo.resize(32, 32).toFile('public/static/favicons/favicon-32x32.png')
logo.resize(64, 64).toFile('public/static/favicons/favicon.ico')

// ms-tile-150x150.png
logo.resize(150, 150).toFile('public/static/favicons/mstile-150x150.png')
