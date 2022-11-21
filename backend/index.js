
const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuidv4');
const cors = require('cors');
const dotenv = require("dotenv");
const api = require('./api');
dotenv.config();

const DB = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const getUsers = async () => {
    try {
        const result = await DB.query('SELECT * FROM users');
        console.log(result);
        return result.rows;
    } catch (error) {
        console.log(error);
        console.log('Error fetching users.', error);
        return [];
    }
};


const getUsersCards = async () => {
    try {
        const result = await DB.query('SELECT * FROM users cards');
        return result.rows;
    } catch (error) {
        console.log(error);
        console.log('Error fetching users pokemon cards.', error);
        return [];
    }
};

const createCardForSell = async (data) => {
    try {
        const id = uuidv4();
        const createdAt = new Date().getMilliseconds();
        const { amount, description, operator } = data;

        await DB.query(
            `INSERT INTO "transactions" ("amount", "id", "description", "createdAt", "operator")  
             VALUES ($1, $2, $3, $4, $5)`, [amount, id, description, createdAt, operator]);

    } catch (error) {
        console.log('Error inserting transaction.', error);
    }
}

app.get('/users', async (req, res) => {
    const result = await getUsers();
    if (!result) {
        return res.status(500).json({ error: 'Error fetching users.' });
    }
    return res.json(result);
});


app.listen(3001, () => {
    console.log('app listening on port 3001');
});
