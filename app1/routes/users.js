const express = require('express')
const db = require('../database')
const crypto = require('crypto-js')
const utils = require('../utils')

const router = express.Router()

router.get('/test', (request, response) => {
    response.send(`Server test successfull`);
})

router.post('/register', (request, response) => {
    console.log(`method=${request.method}, url=${request.url}`)
    const { firstName, lastName, email, password } = request.body
    
    console.log(`
        firstName=${firstName},
        lastName=${lastName},
        email=${email},
        password=${password}
        `)

        // create sql statement
        const statement = `
            insert into users (first_name, last_name, email, password) values (?,?,?,?);
        `
        // encrypt the password
        encryptedPassword = String(crypto.SHA256(password))

        db.pool.execute(statement, [firstName, lastName, email, encryptedPassword],
        (error, result) => {
            // if (error) {
            //     // something gone wrong
            //     console.log(`error: `, error)
            //     response.send(error)
            // } else {
            //     console.log(`status: `, result)
            //     response.send({status: 'success', data: 'ok'})
            // }

            // send the result to the client
            response.send(utils.createResult(error, result))
        }
        )

})


module.exports = router