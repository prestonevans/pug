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
	const user = {
		firstName: req.body.firstName,
		lastName: req.body.lastName
	};
	res.end(`FirstName: ${user.firstName} LastName = ${user.lastName}`);
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
