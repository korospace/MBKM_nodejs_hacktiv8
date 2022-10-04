const request = require("supertest");
const { sequelize } = require("../models");
const app = require("../app");

const userData = {
    username : "user_pertama",
    password : "user_pertama",
    email : "user_pertama@gmail.com",
}

const wrongData = {
    username : "user_pertamaxx",
    password : "user_pertamaxx",
    email : "user_pertamaxx@gmail.com",
}

describe("POST /user/register", () => {
    it("should send response with 201 status code", (done) => {

        request(app)
            .post('/user/register')
            .send(userData)
            .end(function (err,res) {
                if(err) {
                    done(err)
                }

                expect(res.status).toEqual(201);
                expect(typeof res.body).toEqual("object");
                expect(res.body).toHaveProperty("error");
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
                expect(res.body.data).toHaveProperty("id");
                expect(res.body.data).toHaveProperty("username");
                expect(res.body.data).toHaveProperty("password");
                expect(res.body.data).toHaveProperty("email");
                expect(res.body.data.username).toEqual(userData.username);
                expect(res.body.data.email).toEqual(userData.email);
                done()
            })
            
    })
})

describe("POST /user/login", () => {
    it("should send response with 200 status code", (done) => {

        request(app)
            .post('/user/login')
            .send(userData)
            .end(function (err,res) {
                if(err) {
                    done(err)
                }

                expect(res.status).toEqual(200);
                expect(typeof res.body).toEqual("object");
                expect(res.body).toHaveProperty("error");
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("token");
                expect(typeof res.body.token).toEqual("string");
                done()
            })
            
    })
})

describe("ERROR /user/login", () => {
    it("should send response with 401 status code", (done) => {

        request(app)
            .post('/user/login')
            .send(wrongData)
            .end(function (err,res) {
                if(err) {
                    done(err)
                }

                expect(res.status).toEqual(401);
                expect(typeof res.body).toEqual("object");
                expect(res.body).toHaveProperty("error");
                expect(res.body).toHaveProperty("message");
                done()
            })
            
    })
})

afterAll((done) => {
    sequelize.queryInterface.bulkDelete("Users", {})
        .then(() => {
            return done()
        })
        .catch((err) => {
            done(err)
        })
})