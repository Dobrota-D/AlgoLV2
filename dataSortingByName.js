let fs = require('fs');

// Lire le fichier .json
fs.readFile('movies.json',{encoding: 'utf8'}, function(err, data){
    let moviesData = JSON.parse(data);
    if(err) return console.error(err);
    // Tri et affiche les films par date croissante
    sortByName(moviesData);
    console.log(moviesData)
})
module.exports = {
//fonction d'échange
swap : function(tab, a, b) {
    let tmp = tab[a];
    tab[a] = tab[b];
    tab[b] = tmp;
},
//tri par nom
sortByName : function(array) {
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
},
}


