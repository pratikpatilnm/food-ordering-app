// import modules
const express = require('express')
const db = require('../database')
const config = require('../config')
const utils = require('../utils')

// import router
const router = express()

// get the list adress
router.get('/', (request, response) => {
    // statement
    const statement = `SELECT id, title, line1, line2, line3, zipcode, state from addresses where userid = ? and isDeleted = 0 `
    db.pool.query(statement, [request['userInfo']['id']], (error, address) => {
        response.send(utils.createResult(error, address))
    })

})

// add a new address
router.post('/', (request, response) => {
    const { title, line1, line2, line3, zipcode, state } = request.body

    const statement = `
        INSERT INTO addresses(title, line1, line2, line3, zipcode, state, userId) values (?,?,?,?,?,?,?);
    `
    db.pool.execute(statement, [title, line1, line2, line3, zipcode, state, request['userInfo']['id']], (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

// update the existing address
router.put('/:addressId', (request, response) => {
    const { addressId } = request.params
    const {title, line1, line2, line3, zipcode, state} = request.body

    const statement = `
        UPDATE addresses SET title=?, line1=?, line2=?, line3=?, zipcode=?, state=?, userId=? WHERE id = ?;
    `
    db.pool.execute(statement, [title, line1, line2, line3, zipcode, state, request['userInfo']['id'], addressId], (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

// delete an address
router.delete('/:addressId', (request, response) => {
    console.log(`method=${request.method}, url=${request.url}`)
    const {addressId} = request.params
    
    statement = `
        UPDATE addresses SET isDeleted = 1 where id = ? and userId = ?;
    `
    db.pool.execute(statement, [addressId, request['userInfo']['id']], (error, result) => {
        response.send(utils.createResult(error, result))
        console.log(utils.createResult(error, result))
    })

})


// export the router
module.exports = router
