const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const app = express();

const apiKey = "b251b209e255fea2fbf21995ad4a3ee9";

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index",{code:null,message:null,data:null})
})

app.post("/", (req,res) => {
    let city = req.body.city;
    let url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    request(url, (err,response,body) => {
        if (err) {
            res.render("index",{code:500,message:"Terjadi kesalahan pada server, coba lagi!",data:null});
        } else {
            let data = JSON.parse(body);
            
            if (data.message == 'city not found') {
                res.render("index",{code:404,message:"Ups, Nama kota tidak ditemukan",data:null});
            } else {
                res.render("index",{code:200,data:data});
            }

            console.log(data);
        }
    })
})

app.listen(8081, () => {
    console.log("App running at port:8081");
})