let fs = require('fs');

let args = process.argv
let inputFile; 
let outputFile;

for (let i = 0; i < args.length; i++){
    if(args[i] == '-action' && args[i+1] == 'sort_date'){
        inputFile = args[i + 2];
        outputFile = args[i + 3];
        sortingByDate(outputFile);
    }
}

function sortingByDate (outputFile){
    // Lecture du fichier JSON
    fs.readFileSync('movies.json',{encoding: 'utf8'},function(err,data) {
    //start = new Date().getTime();
    let movieData = JSON.parse(data);
    if(err) return console.error(err);
    sortByDate(movieData);  
        // Enregistrement des données dans le fichier de sortie après le tri par date
        let stringOut = JSON.stringify(movieData,null,'\t')
        fs.writeFile(outputFile,stringOut,function(err) {
        if(err)returnconsole.error(err);
        })
    })
    // let stop = new Date().getTime();
    // console.log("\n Benchmark " + (stop - start) + " ms");
}


//fonction d'échange
function swap(tab,a,b){
    let tmp = tab[a];
    tab[a] = tab[b];
    tab[b] = tmp;
}
  
  //tri par date
  function sortByDate(array){
    // Pour i allant de (taille de T)-1 à 1
      for (let i = array.length -1; i >= 1; i--){
          // Pour j allant de 0 à i-1
          for (let j = 0; j <= i-1; j++){
              // si T[j+1] < T[j]
              if (array[j+1]['release_date'] < array[j]['release_date']){
                  // échanger T[j+1]['release_date'] avec T[j]['release_date']
                  swap(array, j+1, j)
            }
        }
    }
}
