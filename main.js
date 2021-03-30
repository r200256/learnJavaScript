function getCats(callback){
  fetch('https://cat-fact.herokuapp.com/facts')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      callback(data)
    });
}
function showCats(d){
  d.forEach(item=>console.log(item.text))
}
getCats(showCats)
