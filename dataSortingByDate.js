let fs = require('fs');

  // Lire le fichier .json
  fs.readFile('movies.json',{encoding: 'utf8'}, function(err, data){
      let moviesData = JSON.parse(data);
      if(err) return console.error(err);
      // Tri et affiche les films par date croissante
      sortByDate(moviesData);
      console.log(moviesData)
  })
  
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
