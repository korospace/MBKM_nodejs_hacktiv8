const { Photos } = require("../models");

function authorization(req,res,next) {
    let photoId = req.params.id || 0;
    const userData = res.locals.user;

    Photos.findOne({
        where: {
            id:photoId
        }
    })
        .then(result => {
            if (!result) {
                // throw {
                //     error: true,
                //     code: 404,
                //     message: `photo not found`
                // }
                return res.status(404).json({
                    error: true,
                    code: 404,
                    message: `photo not found`
                });
            }

            if (result.UserId === userData.id) {
                return next();
            } 
            else {
                return res.status(403).json({
                    error: true,
                    code: 403,
                    message: `you don't have permisson to access this photo`
                });
            }
        })
        .catch(err => {
            return res.status(500).json(err);
        })
}

module.exports = authorization;