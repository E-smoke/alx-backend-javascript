function getResponseFromAPI(){
  return new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve("done");
  }, 500);
} );
}
