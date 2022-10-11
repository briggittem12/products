const Products = require('../models/products.model')
const { faker } = require('@faker-js/faker')


//?funcion para crear productos aleatorios, usamos "faker"
const generateProducts = (length = 1) => {
    for (let i = 0 ; i < length ; i++){
        Products.create({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            category: faker.commerce.product(),
            price: parseInt(faker.commerce.price(100)),
            isAvalible: faker.datatype.boolean()
        })
        .then(() => { })
        .catch(err => console.log(err))
    }
}


//? funcion para obtner todos los productos 
const getAllProducts = async () => {
    const data = await Products.findAll()
        return data
}


//? función para crear un producto
const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: faker.datatype.uuid(),
        ...data
    })
    return newProduct
}

/*
 createProduct({
    name: 'Gelatina',
    category: 'Golosinas',
    price: 100,
    isAvalible: true
 })
*/


//? obtner poducto segun su id 
const getProbudtById = async (id) => {
    const data = await Products.findOne({
        where: {
            id
        }
    })
    return data 
}

//? editar o actualizar productos
const editProduct = async (id, data) => {
    const result = await Products.update(data, {
        where: {
            id
        }
    })
    return result
}

//? eliminar prductos 
const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id
        }
    })
    return data
}



module.exports = {
    getAllProducts, 
    createProduct,
    getProbudtById,
    editProduct, 
    deleteProduct
}
