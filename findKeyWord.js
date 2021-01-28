let fs = require('fs')

let args = process.argv;
let inputFile;
let keyWord;
let genre;

for (let i= 0; i< args.length; i++){
    if(args[i] == '–action' && args[i+1] == 'search_key_word'){
      inputFile = args[i+2]  
      keyWord = args[i+3]
      genre = args[i+4]
    
    }
}    

fs.readFile('movies.json',{encoding: 'utf8'}, function(err, data){
    moviesData = JSON.parse(data);
    if(err) return console.error(err);
    let countKey = Object.keys(moviesData).length;
    for(i = 0; i < countKey; i++){
      console.log(moviesData[i])
    }
    
})

function hasKeyWord(description, keyWord){
  let movies = []
  for (let i = 0; i < description.length; i++) {
    const element = array[i];
    if (element == keyWord) {
      
    }
    
  }
}