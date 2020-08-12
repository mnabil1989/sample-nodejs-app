const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world from a Node.js app! welcome to nabil profile Thanks for your interesting')
})

app.listen(4000, () => {
    console.log('Server is up on 4000')
})
