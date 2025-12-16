const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject("Could not find file");
      resolve(data);
    });
  });
};

const writeFilePro = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);
      resolve("Data wriiten sucessfuly");
    });
  });
};

readFilePro("dogData.txt")
  .then((result) => {
    console.log(result);
    return superagent.get(
      `https://dog.ceo/api/breed/${result.toString()}/images/random`
    );
  })
  .then((res) => {
    console.log("Response from api call - ", res.body.message);
    return writeFilePro("daogResponse.txt", res.body.message);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("error - ", err);
  });
