    require('dotenv').config();
    const express = require('express'),
        massive = require('massive'),
        ctrl = require('./controller'),
        app = express();

        const {SERVER_PORT, CONNECTION_STRING} = process.env;

    app.use(express.json());

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {
            rejectUnauthorized: false
        }
    }).then(db => {
        app.set('db', db);
        console.log('DB is connected');
    }).catch(err => console.log(err));

    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));

