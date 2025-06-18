const express = require('express')
const db = require('../database')
// const crypto = require('crypto-js')
const utils = require('../utils')
const mailer = require('../mailer')

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
        // encryptedPassword = String(crypto.SHA256(password))

        db.pool.execute(statement, [firstName, lastName, email, utils.encryptedPassword(password)],
        (error, result) => {

            // send the result to the client
            mailer.sendEmail(email, 'Welcome to food ordering application', `
                <h1> Welcome </h1>
                </br>
                <div>hello ${firstName}</div>
                </br>
                <div>Thank you !</div>
                <div><>
                `)

            // send the result to the client
            response.send(utils.createResult(error, result))
        }
        )

})

router.post('/login', (request, response) => {
    const {email, password} = request.body

    const statement = `
        select id, first_name, last_name from users where email=? and password=?;
    `
    // execute the query
    db.pool.query(statement,
        [email, utils.encryptedPassword(password)],
        (error, users) => {
            if (error) {
                // error while executing sql statement
                response.send(utils.createError(error))
            } else {
                if (users.length == 0) {
                    response.send(utils.createError(`user dosenot exist`))
                } else {
                    response.send(utils.createSuccess(users[0])) 
                }
            }
        }
    )

})


module.exports = router