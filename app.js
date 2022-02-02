const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended:false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', {
		users: [ 'brad', 'presto', 'test' ]
	});
});
app.get('/users/:username', (req, res) => {
	res.end(`You clicked on: ${req.params.username}`);
});

app.get('/form', (req, res) => {
	res.render('form');
});

app.post('/create', (req, res) => {
	const timeStamp = new Date();
	const timeStampString = timeStamp.toUTCString().replace(/\s/g,'')
	const uid = `${req.body.name}${timeStampString}`
	const user = {
		name: req.body.name,
		email: req.body.email,
		age: req.body.age,
		uid: uid
	};
	res.render('index', {
		users: [ 'brad', 'presto', 'test' ]
	});
	res.end(`Name: ${user.name} Email = ${user.email} Age = ${user.age} UID = ${user.uid}`);
});

app.listen(3002, () => {
	console.log('Listening on port 3000');
});
