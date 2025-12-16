const fs = require("fs");
const superagent = require("superagent");

fs.readFile("dogData.txt", (err, data) => {
  if (err) return console.log(err);
  console.log(" dog data - ", data.toString());

  superagent
    .get(`https://dog.ceo/api/breed/${data.toString()}/images/random`)
    .end((err, res) => {
      console.log("response - ", res.body.message);
      fs.writeFile("daogResponse.txt", res.body.message, (err) => {
        if (err) return console.log(err);
      });
    });
});
