const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/**
 * Example Midleware
 */
app.use("/ko*de", (req,res,next) => {
    console.log("START");
    next()
})

app.get("/ko*de", (req,res,next) => {
    res.send("Hello GET match");
    next()
})

app.use("/ko*de", (req,res,next) => {
    console.log("END");
})

/**
 * Handling Form
 */
app.get('/index.html', (req,res) => {
    res.sendFile(__dirname+"/index.html");
})

app.get("/user", (req,res) => {
    let response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        gender: req.query.gender,
    }

    console.log("GET: "+JSON.stringify(response));

    res.end(JSON.stringify(response));
})

app.post("/user", (req,res) => {
    let response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
    }

    console.log("POST: "+JSON.stringify(response));

    res.end(JSON.stringify(response));
})

let server = app.listen(8081, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`App running at ${host} ${port}`);
})

