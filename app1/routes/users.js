const express = require('express')

const router = express.Router()

router.get('/test', (request, response) => {
    response.send(`Server test successfull`);
})

module.exports = router