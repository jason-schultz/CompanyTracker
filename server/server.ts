import express from 'express'
import mongoose from 'mongoose'

require('./models/company')
require('./models/person')

import routes from './routes'

var mongoUri = 'mongodb://mongo:27017/companyTracker'
mongoose.connect(mongoUri)

var db = mongoose.connection
db.on('error', () => {
    throw new Error(`Unable to connect to database at ${mongoUri}`)
})

const app = express()

const port = 3001

app.get('/', (req, res) => res.send('Express + Typescript Server'))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
        next()
})

app.use('/', routes)

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`)
})