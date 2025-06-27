const express = require('express')

const router = express.Router()

const db = require('../database')
const utils = require('../utils')

router.get('/', (request, response) => {
    const statement = `SELECT c.id, c.foodItemId, c.quantity, c.price, f.title, f.image from cart c, foodItem f where userid = ? and c.foodItemId = f.id`
    db.pool.execute(statement, [request['userInfo']['id']], (error, result)=> {
        response.send(utils.createResult(error, result))
    })

})

router.post('/', (request, response) => {
    const {foodItemId, quantity, price} = request.body
    const statement = `INSERT INTO cart(userId, foodItemId, quantity, price) VALUES (?, ?, ?, ?)`
                      
    db.pool.query(statement, [request['userInfo']['id'], foodItemId, quantity, price ], (error, result)=> {
        response.send(utils.createResult(error, result))
    })
})

router.put('/:id', (request, response) => {
    const {id} = request.params
    const {quantity, price} = request.body
    const statement = `UPDATE cart SET quantity=?, price=? WHERE id=? `
    db.pool.execute(statement, [quantity, price, id], (error, result)=> {
        response.send(utils.createResult(error, result))
    })
})

router.delete('/:id', (request, response) => {
    const {id} = request.params
    const statement = `DELETE FROM cart where id = ? and userId = ?`
    db.pool.execute(statement, [id, request['userInfo']['id']], (error, result)=> {
        response.send(utils.createResult(error, result))
    })
})



module.exports = router