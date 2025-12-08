const { log } = require("console");
const EventEmmiter = require("events");
const http = require("http");

const events = new EventEmmiter();

events.on("new Sales", ()=>{
    console.log("New sale started");
})

events.on("new Sales", (stock)=>{
    console.log(`stocks = ${stock}`);
})

events.emit("new Sales",9)

//////////////////
const server = http.createServer();

server.on("request", (req, res)=>{
    console.log("Request received");
    console.log("url - ", req.url);
    res.end("response from node server")
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("waiting for request....");
})
