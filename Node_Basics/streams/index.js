const { log } = require("console");
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //method 1
  // fs.readFile('text.txt',(err, data)=>{
  //     if (err) {
  //         console.log(err);
  //     }
  //     res.end(data);
  // })

  //method 2 Streams
  const readable = fs.createReadStream("text.txt", {
    encoding: "utf8",
    highWaterMark: 64, //bytes
  });
  readable.on("data", (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
    console.log(chunk.toString());
    res.write(chunk);
  });

  readable.on("end", () => {
    console.log("No more data to read.");
    res.end();
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening...");
});
