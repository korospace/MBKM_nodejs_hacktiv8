const { Photos,Users } = require("../models");

class PhotosController{
    static getAll(req,res){
        Photos.findAll({
            include: Users
        })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static getById(req,res){
        let id = req.params.id;

        Photos.findByPk(id)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static createPhoto(req,res){
        let {title,caption,image_url} = req.body;

        Photos.create({title,caption,image_url})
            .then(result => {
                res.status(201).json(result);
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