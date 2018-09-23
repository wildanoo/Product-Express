'use strict';
const {products} = require('../services/v1');

const getData = async (req,res) => {
    try {
        let fetchData;
        if(req.params.id){
            let id = req.params.id;
            fetchData = await products.getOne(id);
        }else{
            fetchData = await products.getAll();
        }

        if(!fetchData){
            throw new Error("Fetch empty");
        }
        return res.status(200).json({
            success: true,
            message: "Fetch success",
            data : fetchData
        })
    } catch (err) {
        return res.status(400).json({
            success : false,
            message : err.message
        })
    }
}

const createData = async (req, res) => {
    try {
        console.log('isi body : ', req.body)
        let createProduct = await products.createProduct(req.body)

        return res.status(200).json({
            success: true,
            message: "Create product success",
            data : createProduct
        })
    } catch (err) {
        return res.status(400).json({
            success : false,
            message : err.message
        })
    }
}

const updateData = async (req, res) => {
    try {
        let updateProduct = await products.updateProduct(req.params.id,req.body)

        return res.status(200).json({
            success: true,
            message: "Update product success",
            data : updateProduct
        })
    } catch (err) {
        return res.status(400).json({
            success : false,
            message : err.message
        })
    }
}

const deleteData = async (req, res) => {
    try {
        let deleteProduct = await products.deleteProduct(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Remove product success",
            data : deleteProduct
        })
    } catch (err) {
        return res.status(400).json({
            success : false,
            message : err.message
        })
    }
}


module.exports = {getData,createData,updateData,deleteData}
