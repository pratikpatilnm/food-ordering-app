// import express
const express = require ('express')

// create app
const app = express()
// set PORT
const PORT = 4000;

// set the middleware
app.use(express.json())
app.use(express.urlencoded())

// add the routes
const userRouter = require('./routes/users')

app.use('/user', userRouter)




// start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`server started on port ${PORT}`)
})