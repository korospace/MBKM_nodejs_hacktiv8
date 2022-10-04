const { Users } = require("../models");
const {hashPassword,comparePassword} = require("../helpers/bcrypt");
const {generateToken} = require("../helpers/jwt");

class UsersController {
    static register(req,res) {
        let {email,username,password} = req.body;
        let realPass = password;
        password = hashPassword(password);

        Users.create({
            email,
            username,
            password
        })
        .then(result => {
            let responseBody = {
                error:false,
                message:"user resgister success",
                data: {
                    id: result.id,
                    email: result.email,
                    username: result.username,
                    password: realPass,
                }
            }

            res.status(201).json(responseBody);
        })
        .catch(err => {
            res.status(500).json({
                error:true,
                message:err,
            });
        })
    }

    static login(req,res) {
        let {email,password} = req.body;

        Users.findOne({
            where:{
                email
            }
        })
        .then(result => {
            if (!result) {
                throw {
                    error: true,
                    code: 401,
                    message: `user with ${email} not found`
                }
            }

            const passIsCorrect = comparePassword(password,result.password);

            if (!passIsCorrect) {
                throw {
                    error: true,
                    code: 401,
                    message: `password not match`
                }
            }

            let payload = {
                id: result.id,
                email: result.email,
            }

            let responseBody = {
                error:false,
                message:"user login success",
                token: generateToken(payload)
            }

            res.status(200).json(responseBody);
        })
        .catch(err => {
            res.status(err.code).json(err);
        })
    }
}

module.exports = UsersController;