const express = require('express')
const app = express()
require('dotenv').config()

app.listen(process.env.PORT, () => {
    console.log(`App running at http://localhost:${process.env.PORT}.`)
})