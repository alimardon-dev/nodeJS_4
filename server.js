const express = require("express")
const app = express();
const http = require("http");
 
//1 entry codes

// this code make the public folder visible to the browser
app.use(express.static("public"));

//parses object into JSON type
app.use(express.json());

//it parses data sent from HTML forms so that we can use it as JSON type available as req.body
app.use(express.urlencoded({extended: true}));
 
//2 sessions

//3 views
app.set("views", "views");
app.set("view engine", "ejs");

//4 routing codes
// this code works with routes and gives a response for the route "/"
app.get("/", (req, res) => {
    console.log("server");
    res.end("Hello world!");
});

//this handles requests and responds for /route 
app.get("/route", (req, res)=> {
    res.end("This is a route");
    console.log("route is running...");
})
//http orqali serverni hosil qilib olamiz 
const server = http.createServer(app);
let PORT = 3000;
// opens a port on spcecified port number
server.listen(PORT, ()=> {
    console.log(`server is running on PORT ${PORT}`);
});  