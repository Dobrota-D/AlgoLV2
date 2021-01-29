let fs = require('fs');
const {
  title
} = require('process');

let args = process.argv;
let inputFile;
let keyWord = args[5];
let genre = args[6];

/*console.log(args[5])
for (let i = 0; i < args.length; i++) {
  if (args[i] == '–action' && args[i + 1] == 'search_key_word') {
    inputFile = args[i + 2]
    keyWord = args[i + 3]
    genre = args[i + 4]
    //console.log(args[i])
  }
  console.log(keyWord)
}
*/

let data = fs.readFileSync('./movies.json', {
  encoding: 'utf8'
})
moviesData = JSON.parse(data);
let countKey = Object.keys(moviesData).length;
let movies = []
//console.log(keyWord)
for (i = 0; i < countKey; i++) {
  movie = hasGenres(moviesData[i].genres, genre)
  //console.log(typeof movie)
  if (typeof movie != "object") {
    movies.push(moviesData[i])
  }

}
let finalMovies = []
for (let i = 0; i < movies.length; i++) {
  //regex pour split les mots espace , et . et les comparer 
  const words = movies[i].overview.split(/[\s,.]+/);
  movie = hasKeyWord(words, keyWord)
  //console.log(words)
  if (typeof movie != "object") {
    finalMovies.push(movies[i])
  }

}
finalMovies.forEach(element => {
  console.log(element.id)
});



function hasKeyWord(words, keyWord) {
  let movie = []
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    if (element == keyWord) {
      movie = words[i]
    }
    //console.log(words)
  }
  return movie
}

function hasGenres(genres, genre) {
  let movie = []
  //console.log(keyWord)
  if (genres) {
    for (let i = 0; i < genres.length; i++) {
      const element = genres[i];
       //console.log(element)
      if (element == genre) {
        movie = genres[i]
      }

    }
  }

  return movie
}