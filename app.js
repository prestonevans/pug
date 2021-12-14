const express = require('express')
const path = require('path')

const app = express()

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index',{users:
        [ 'brad','presto','test']})
})
app.get('/users/:username', (req,res) => {
    res.end(`You clicked on: ${req.params.username}`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})