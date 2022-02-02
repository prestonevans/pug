const express = require('express');
const path = require('path');
const fs = require('fs')
const users = [ ]
const app = express();

app.use(express.urlencoded({extended:false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('form')
});

app.get('/users/:username', (req, res) => {
	res.end(`You clicked on: ${req.params.username}`);
});

app.get('/users', (req, res) => {
	res.render('index', {
		users: users
	})
});

app.post('/create', (req, res) => {
	const uid = `${req.body.name}${Math.ceil(Math.random()*1000)}`
	const user = {
		name: req.body.name,
		email: req.body.email,
		age: req.body.age,
		uid: uid
	};
	users.push(user)
	res.redirect('/users')
	fs.appendFile('./log.txt', `${JSON.stringify(user)}\n`, err => {
		if (err) {
			console.log(err)
			return
		}
	})
	res.end()
});

app.get('/delete/:uid', (req, res) => {
	users.splice(users.findIndex(user => user.uid === req.params.uid),1)
	res.redirect('/users')
	res.end();
})

app.listen(3002, () => {
	console.log('Listening on port 3000');
});

