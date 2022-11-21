
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
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
        console.log(id);
        const date = new Date().toString();
        const createdAt = date.slice(0, 24);
        const { name, email, password } = data;
        await DB.query(
            `INSERT INTO "users" ("id", "name", "email", "password", "createdAt")  
             VALUES ($1, $2, $3, $4, $5)`, [id, name, email, password, createdAt]);

    } catch (error) {
        console.log('Error inserting user.', error);
    }
};

app.get('/users', async (req, res) => {
    const result = await getUsers();
    if (!result) {
        return res.status(500).json({ error: 'Error fetching users.' });
    }
    return res.json(result);
});

app.post('/users', async (req, res) => {
    const data = req.body;
    const { name, email, password } = data;
    if (!name || !email || !password) {
        return res.status(400).send({ error: 'Invalid input.' });
    }
    await createUser(data);
    return res.json({ success: true });
});

app.listen(3001, () => {
    console.log('app listening on port 3001');
});

const getUserCards = async (userId) => {//still need to be fixed.
    try {
        const result = await DB.query(`SELECT * FROM cards WHERE cards.userId = $1`, [userId]);
        return result.rows;
    } catch (error) {
        console.log(error);
        console.log('Error fetching users pokemon cards.', error);
        return [];
    }
};