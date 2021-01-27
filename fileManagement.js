let fs = require('fs');

function toDateTime(secs) {
  var t = new Date(1970); // Epoch
  t.setTime(secs * 1000);
  return t;
}

let moviesData;
fs.readFile('/Users/MaximeLuchini/Documents/GitHub/AlgoLV2/movies.json',{encoding: 'utf8'},function(err,data) {
  moviesData = JSON.parse(data);
  if(err) return console.error(err);
  let countKey = Object.keys(moviesData).length;  
for (i=0; i<countKey; i++) {
  let moviesDate = moviesData[i]['release_date']
  //let lir = new Date (moviesDate*1000).getFullYear
  let lir = toDateTime(moviesDate)
  let year = lir.getFullYear
  console.log(year)

//console.log(moviesDate)
}
  })



//     app.get('movies.json/all',sendAll);
 
//  function sendAll(request,response){
//  response.send(words);

//  }