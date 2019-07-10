//Create server api -----------------
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { Todo } = require('./models/todo');

//Port from server -------------------
app.listen(3003);

//Routes ------------------------------------------------
app.get('/', (req, res) => {
	res.send('DHJS2838dhshd38238QE -------- WELCOME TO API BASIC FOR NODE-JS -------- DH28373daeiw3938AKDHSDD93DKSHDS');
});

app.get('/todo', (req, res) => {
	Todo.findAll()
		.then((data) => {
			return res.status(200).send(data);
		})
		.catch((err) => {
			return res.status(400).send({ error: err });
		});
});

app.post('/todo', async (req, res) => {
	try {
		const { name, amount } = req.body;
		const todo = await Todo.create({
			name: name,
			amount: amount
		});

		return res.status(200).send(todo);
	} catch (err) {
		return res.status(400).send({ error: err });
	}
});

app.put('/todo/:id', async (req, res) => {
	const id = req.params.id;
	const { name, amount } = req.body;
	Todo.findByPk(id)
		.then((data) => {
			data
				.update({
					name: name,
					amount: amount
				})
				.then((data) => {
					res.status(200).send(data);
				})
				.catch((err) => {
					res.status(400).send({ error: err });
				});
		})
		.catch((err) => {
			res.status(400).send({ error: err });
		});
});

app.get('/todo/:id', (req, res) => {
	const id = req.params.id;
	Todo.findByPk(id)
		.then((data) => {
			return res.status(200).send(data);
		})
		.catch((err) => {
			return res.status(400).send({ error: err });
		});
});
