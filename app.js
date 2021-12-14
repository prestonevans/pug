const express = require('express')
const path = require('path')

const app = express()

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index',{users:[
        {userName: 'Preston', email: 'pjevans@gmail.com'},
        {userName: 'Preston', email: 'pjevans@gmail.com'},
        {userName: 'Preston', email: 'pjevans@gmail.com'}
    ],
    date: new Date()})
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})