let fs = require('fs');

// déclaration de variables
let args = process.argv
let inputFile
let outputFile

// Boucle permettant de vérifier la présence de -action transform et de récupérer le chemin d'input et d'output dans les paramètres 
for (let i= 0; i< args.length; i++){
  if(args[i] == '–action' && args[i+1] == 'transform'){
    inputFile = args[i+2]
    outputFile = args[i+3]
    movieTransform (inputFile, outputFile)
  }
}

//fonction permettant de prendre un fichier json, ajouter les années après le titre des films et afficher les films dans un fichier json de sortie
function movieTransform (inputFile, outputFile){
  let movieData;
  //lire le fichier json d'entrée
  fs.readFile(`${inputFile}`,{encoding: 'utf8'},function(err,data) {
    movieData = JSON.parse(data);
    if(err) return console.error(err);
    let countKey = Object.keys(movieData).length;  
      //parcourir chaque film et récupérer le release date pour le convertir en année
      for (i=0; i<countKey; i++) {
        let movieDate = new Date (movieData[i]['release_date'] * 1000)
        let movieYear = movieDate.getFullYear();

        //nouveau titre avec année
        movieData[i]['title'] = `${movieData[i]['title']} (${movieYear})`
      }
      
      // Fonction d'enregistrement du fichier JSON après modifications des titres
      let stringOut = JSON.stringify(movieData,null,'\t')
      fs.writeFile(outputFile,stringOut,function(err) {
      if(err)returnconsole.error(err);
    })

    
    })
}

export {movieTransform};
