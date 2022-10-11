const express = require('express')

const db = require('./utils/database')
const config = require('./config')
const initModels = require('./models/initModels')
const productRouter = require('./products/product.router')

const app = express()



db.authenticate()
    .then(() => console.log('Authenticated from database!'))
    .catch(error => console.log(error));

db.sync()
    .then(() => console.log('Syncronized succefuly!'))
    .catch(error => console.log(error));

initModels()



app.use(express.json())

app.use('/products', productRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})





app.listen(config.port, () => {
    console.log(`Port started at port ${config.port}`)
})