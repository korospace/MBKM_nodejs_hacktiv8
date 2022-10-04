const { Users } = require("../models");
const { verifyToken } = require("../helpers/jwt");

function authentication(req,res,next) {
    try {
        const token = req.get("token");
        const decodedToken = verifyToken(token);

        Users.findOne({
            where:{
                id:decodedToken.id,
                email:decodedToken.email,
            }
        })
            .then(result => {
                if (!result) {
                    throw {
                        error: true,
                        code: 401,
                        message: `Unauthorized`
                    }
                }

                res.locals.user = result;
                next();
            })
            .catch(err => {
                res.status(401).json(err);
            })

    } catch (error) {
        res.status(error.code).json(error);
    }
}

module.exports = authentication;