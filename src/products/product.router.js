const router = require('express').Router()
const productServices = require('./product.services')

router.get('/', productServices.getProducts )
router.post('/', productServices.createProduct)

router.get('/:id', productServices.getProductById)

router.patch('/:id', productServices.updateProduct)
router.delete('/:id', productServices.deleteProduct)


module.exports = router