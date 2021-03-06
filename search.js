let fs = require('fs');

// déclaration de variables
let args = process.argv
let inputFile
let year
let sorted

// Boucle permettant de vérifier la présence de -action search_date et de récupérer le chemin d'input et d'output dans les paramètres
for (let i=0; i<args.length; i++){
  if (args[i] == '-action' && args[i+1] == 'search_date') {
    inputFile = args[i+2]
    year = args[i+3]
    sorted = args[i+4]
    
  }
}
 
let read = () => {

   let data = fs.readFileSync(`${inputFile}`)
       // Lancement du benchmark 
       let start = new Date().getTime();
        movieData = JSON.parse(data);
        // Parcours le tableau
        let countKey = Object.keys(movieData).length;
        
        for (i = 0; i < countKey; i++) {
            let movieDate = new Date(movieData[i]['release_date'] * 1000)
            let movieYear = movieDate.getFullYear();
            if (movieYear == year) {
                if (sorted == 'true') {
                    sortByYear(movieData)
                }
                console.log(movieData[i]['title'])
            }

        }
        // Fin du benchmark
        let stop = new Date().getTime();
        console.log("\n Benchmark " + (stop - start) + " ms");
    
}
read()

//fonction d'échange
function swap(tab,a,b){
    let tmp = tab[a];
    tab[a] = tab[b];
    tab[b] = tmp;
}

function sortByYear(array){
    //pour i allant de (taille de T)-1 à 1
    for( let i = array.length -1; i>=1;i--){
        //pour j allant de 0 à i-1
        for(let j = 0; j<=i-1; j++){
            //si T[j+1] < T[j]
            if(array[j+1]['title'] < array[j]['title']){
                //échanger T[j+1]['title'] avec T[j]['title']
                swap(array,j+1,j)
            }
        }
    }
    return array;
}


