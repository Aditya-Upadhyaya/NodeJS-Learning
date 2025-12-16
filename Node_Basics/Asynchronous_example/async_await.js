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

const getDogPic = async () => {
  try {
    const fileData = await readFilePro("dogData.txt");
    console.log("data from file - ", fileData.toString());

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${fileData.toString()}/images/random`
    );
    await writeFilePro("daogResponse.txt", res.body.message);
  } catch (error) {
    console.log("error - ", error);
    //throwing err is imp beacuse if we did not throw thne it will not catch as async will return promise
    throw err;
  }
  return "Return value from async";
};

//using IIFE function
(async () => {
  try {
    const value = await getDogPic();
    console.log("Value from aync using IIFE - ", value);
  } catch (error) {
    console.log("error - ", error);
  }
})();

//using then
// getDogPic().then((val) => {
//   console.log("using then - ", val);
// });
