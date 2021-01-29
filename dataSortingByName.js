let fs = require('fs');

// Lire le fichier .json
fs.readFile('movies.json', {
    encoding: 'utf8'
}, function (err, data) {
    let moviesData = JSON.parse(data);
    if (err) return console.error(err);
    // Tri et affiche les films par date croissante

let inputFile
let outputFile
let args = process.argv

for (let i = 0; i < args.length; i++) {
    if (args[i] == '-action' && args[i + 1] == 'sort_title') {
        inputFile = args[i + 2]
        outputFile = args[i + 3]
        movieSorting(inputFile, outputFile)
    }
}


function movieSorting (inputFile, outputFile){
    let movieData;
    //lire le fichier json d'entrée
    fs.readFile('movies.json',{encoding: 'utf8'},function(err,data) {
      movieData = JSON.parse(data);
      if(err) return console.error(err);
      let countKey = Object.keys(movieData).length;  
        
        // Fonction d'enregistrement du fichier JSON
        let stringOut = JSON.stringify(movieData,null,'\t')
        fs.writeFile(outputFile,stringOut,function(err) {
        if(err)returnconsole.error(err);
      })
    })
  }    


    sortByName(moviesData);
    moviesData.forEach(moviesData => {
        console.log(moviesData.title)
    });

})
//module.exports = {
//fonction d'échange
function swap(tab, a, b) {
    let tmp = tab[a];
    tab[a] = tab[b];
    tab[b] = tmp;
}
//tri par nom
function sortByName(array) {
    //pour i allant de (taille de T)-1 à 1
    for (let i = array.length - 1; i >= 1; i--) {
        //pour j allant de 0 à i-1
        for (let j = 0; j <= i - 1; j++) {
            //si T[j+1] < T[j]
            if (array[j + 1]['title'] < array[j]['title']) {
                //échanger T[j+1]['title'] avec T[j]['title']
                swap(array, j + 1, j)
            }
        }
    }
}
