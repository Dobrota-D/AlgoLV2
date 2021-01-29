const fs = require('fs')
const request = require('request')
const download = (url, path, callback) => { request.head(url, (err, res, body) => {
request(url) .pipe(fs.createWriteStream(path)) .on('close', callback)
}) }
const url = 'https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg'
const path = './image/image.png'
download(url, path, () => { console.log('Done!')
})