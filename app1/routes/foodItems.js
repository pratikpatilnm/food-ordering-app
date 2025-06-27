// import the modules
const express = require ('express')
const db = require('../database')
const utils = require('../utils')

const multer = require('multer')

const upload = multer({dest: 'files'})


const router = express.Router()

router.post('/',upload.single('photo'), (request, response) => {
    const {title, ingredients, description, categoryId, price} = request.body
    const image = request.file.filename
    statement = `insert into foodItem(title, ingredients, description, image, categoryId, price) values(?,?,?,?,?,?);` 

    db.pool.execute(statement, [
        title, ingredients, description, image, categoryId, price
    ], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/', (request, response) => {
    statement = `SELECT id, title, ingredients, description, categoryId, price FROM foodItem where isActive = 1 ; `

    db.pool.query(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })

})

router.put('/:id', (request, response) => {
    const {id} = request.params 
    const {title, ingredients, description, categoryId, price} = request.body
    statement = `update foodItem set title=?, ingredients=?, description=?, categoryId=?, price=? where id = ?;` 

    db.pool.execute(statement, [
        title, ingredients, description, categoryId, price, id
    ], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.delete('/:id', (request, response) => {
    const {id} = request.params
    statement = `UPDATE foodItem set isActive=0 where id = ?;` 

    db.pool.execute(statement, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

module.exports = router