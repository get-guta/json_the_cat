const request = require("request");
const args = process.argv.splice(2);
let res;
request('https://api.thecatapi.com/v1/breeds', (err, response, body) => {
  if (!err) {
    if (response.statusCode === 200) {
      const data = JSON.parse(body);
      for (let d = 0; d < data.length; d++) {
        if (data[d].name === args) {
          console.log(data[d].description);

        }else{
          res = `No ${args} breed found`;
        }
        

      }
      console.log(res)

    }

  }else{
    console.log(err)
  }

});