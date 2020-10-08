const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const createError = require('http-errors')
const allRoutes = require('./router/index')

const PORT = process.env.PORT || 3000

// DB connction
mongoose.connect('mongodb://localhost:27017/curriculum_app', {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true
}).then(() => {
    console.log('MongoDb connected...')
})


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(morgan('dev'))
app.use(cors())

// Routes & Error Handling
app.use('/api', allRoutes)
app.use(async (req, res, next) => {
    next(createError.NotFound())
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            error: err.message
        }
    })
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})