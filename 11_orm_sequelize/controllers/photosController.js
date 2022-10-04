const { validationResult } = require('express-validator');
const { Photos,Users } = require("../models");

class PhotosController{
    static getAll(req,res){
        Photos.findAll({
            include: Users
        })
            .then(result => {
                res.status(200).json({
                    error: false,
                    data: result
                });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static getById(req,res){
        let id = req.params.id;

        Photos.findByPk(id)
            .then(result => {
                if (!result) {
                    res.status(404).json({
                        error: true,
                        code: 404,
                        message: "photo not found"
                    });
                }

                res.status(200).json({
                    error: false,
                    code: 200,
                    data: result
                });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static createPhoto(req,res){
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: true,
                code: 400,
                message: "bad request",
                errors: errors.mapped()
            });
        }

        let {title,caption,image_url} = req.body;
        let userData = res.locals.user;

        Photos.create({title,caption,image_url,UserId:userData.id})
            .then(result => {
                res.status(201).json({
                    error: false,
                    code: 201,
                    message: "new photo created",
                    data: result
                });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static updatePhoto(req,res){
        let id = req.params.id;
        let {title,caption,image_url} = req.body;

        let data = {title,caption,image_url}

        Photos.update(
            data,
            {
                where:{
                    id
                },
                returning:true
            }
        )
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static deletePhoto(req,res){
        let id = req.params.id;

        Photos.destroy({
            where:{
                id
            },}
        )
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
}

module.exports = PhotosController;