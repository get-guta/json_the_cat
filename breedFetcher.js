const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) {
      if (response.statusCode === 200) {
        const data = JSON.parse(body);
        if(!data.length){
          callback(null, null);
        }else{
          callback(null,  data[0].description);
        }
        
     
      }

    } else {
      callback(error, null);

    }

  })
}

module.exports = fetchBreedDescription;
