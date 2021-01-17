const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const router = require('./router')

app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`Book list app listening on http://localhost:${port}`)
})