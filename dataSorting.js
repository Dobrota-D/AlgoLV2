let fs = require('fs');
let moviesData;

fs.readFile('movies.json', {encoding: 'utf8'}, 
function (err, data) {
    moviesData = JSON.parse(data);
    if (err) return console.error(err);
    let countKey = Object.keys(moviesData).length;
    for (i = 0; i < countKey; i++) {
        let moviesDate = moviesData[i]['release_date']
        console.log(moviesDate)
    }
})






