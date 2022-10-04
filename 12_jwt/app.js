const jwt = require("jsonwebtoken");
const express = require("express");
var fs = require('fs');
const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let tokenKey  = "03102000";
let dataLogin = {
    username: "tes",
    password: "tes"
}

/**
 * Login
 */
app.post("/login", (req,res) => {
    const {username,password} = req.body;

    if (username == undefined || password == undefined) {
        res.status(403).json({
            error: true,
            message: "Forbiden"
        })
    } else {
        if (username != dataLogin.username || password != dataLogin.password ) {
            res.status(401).json({
                error: true,
                message: "Unauthorized"
            })  
        } else {
            jwt.sign(
                {
                    dataLogin
                },
                tokenKey,
                (err,token) => {
                    res.status(200).json({
                        error: false,
                        token
                    })
                }
            )
        }
    }
})

/**
 * Get Data
 */
app.get("/data", verifikasi, (req,res) => {
    jwt.verify(req.token, tokenKey, (err,dataAuth) => {
        if (err) {
            res.status(403).json({
                error: true,
                message: "Forbiden"
            })
        } else {
            let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

            res.status(200).json({
                error: false,
                data
            })
        }
    })
})

function verifikasi(req,res,next) {
    let getHeader = req.headers["auth"];

    if (typeof getHeader !== "undefined") {
        req.token = getHeader;
        next();
    }
    else {
        res.sendStatus(403);
    }
}

app.listen(PORT,() => {
    console.log(`app listen at port:${PORT}`);
})
