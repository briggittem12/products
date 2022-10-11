const productsControllers = require('./product.controller')

//* obtner productos - get
const getProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then(data => {res.status(200).json(data)})
        .catch(err => {res.status(400).json({message: err.message})})
}


//* crear nuevos productos - post 
const createProduct = (req, res) => {
    const data = req.body
        if (data.name && data.price && data.category && data.isAvalible){
            productsControllers.createProduct(data)
                .then(response => {res.status(201).json(response)})
                .catch(err => {res.status(400).json({message: err.message})})
        } else {
            res.status(400).json('Missing Data')
        }
}



//* obtner productos por su id - get/id
const getProductById = ( req, res ) => {
    const id = req.params.id
        productsControllers.getProbudtById(id)
            .then(data => {
                if (data){
                    res.status(200).json(data)
                } else {
                    res.status(404).json({message: 'INVALID ID'})
                }
            })
            .catch(err => {res.status(404).json({message: err.message})})
}


//*actualizar producto en especifico - patch id
const updateProduct = ( req, res ) => {
    const id = req.params.id
    const { name, price, category, isAvalible } = req.body
        productsControllers.editProduct(id, { name, price, category, isAvalible })
            .then(response => {
                if (response[0]){
                    res.status(200).json({message: 'Change succesful'})
                } else {
                    res.status(404).json({message: 'INVALID ID'})
                }
            })
            .catch(err => {res.status(400).json({message: err.message})})

}

//* borrar producto - delete id
const deleteProduct = ( req, res ) => {
    const id = req.params.id
        productsControllers.deleteProduct(id)
            .then(response => {
                if(response) {
                    res.status(200).json()
                } else {
                    res.status(400).json({message: 'INVALID ID'})
                }
            })
            .catch(err => {res.status(400).json({message: err.message})})
            
}




module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
}