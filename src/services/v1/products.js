'use strict';
const {products, categories, product_category } = require('../../models')

let product = {
    getAll : async () => {
        const data = await products.findAll({
            attributes : {
                exclude: ["created_at","updated_at"]
            },
            include: [
                { model: categories, as:'categories', attributes: {exclude: ["created_at","updated_at"]} ,through: { attributes: [] }}
            ]
        });
        return data;
    },
    getOne : async (id) => {
        const data = await products.findOne({
            where : {"id" : id},
            attributes : {
                exclude: ["created_at","updated_at"]
            },
            include: [
                { model: categories, as:'categories', attributes: {exclude: ["created_at","updated_at"]} ,through: { attributes: [] }}
            ]
        })
        return data;
    },
    createProduct : async (input) => {
        const data = await products.create({ name: input.name, code: input.code })
        if(input.category){
            let category = JSON.parse(input.category)
            await Promise.all(
                category.map(async (id) => {
                    await product_category.create({product_id:data.id, category_id: id})
                })
            )
        }
        
        return data;
    },
    updateProduct : async (idProduct,input) => {
        const data = await products.update({ name: input.name, code: input.code },{where: {id: idProduct}})
        if(input.category){
            let category = JSON.parse(input.category)
            await product_category.destroy({where : {product_id:idProduct}})
            await Promise.all(
                category.map(async (id) => {
                    await product_category.create({product_id:idProduct, category_id: id})
                })
            )
        }

        return data;
    },
    deleteProduct : async (idProduct) => {
        const data = await products.destroy({where : {id : idProduct}});
        await product_category.destroy({where : {product_id:idProduct}});

        return data;
    }
    
}

module.exports = product
