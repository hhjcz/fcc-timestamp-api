const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world\n')
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server started on ${port}`)
})