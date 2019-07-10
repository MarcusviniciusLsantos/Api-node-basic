const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3003);

app.get('/', (req,res) => {
	res.send('DHJS2838dhshd38238QE -------- WELCOME TO API BASIC FOR NODE-JS -------- DH28373daeiw3938AKDHSDD93DKSHDS');
});
