    require('dotenv').config();
    const express = require('express'),
        massive = require('massive'),
        ctrl = require('./controller/controller'),
        app = express(),
        {SERVER_PORT, CONNECTION_STRING} = process.env;

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {
            rejectUnauthorized: false
        }  

    }).then(db => {
        app.set('db', db);
        console.log('DB is connected');
    }).catch(err => console.log(err));

    app.use(express.json());

    //ENDPOINTS
    app.get('/api/inventory', ctrl.retrieveInventory)
    app.post('/api/create/inventory', ctrl.addProduct)
    app.put('/api/inventory/:id', ctrl.updateProduct)
    app.delete('/api/inventory/:id', ctrl.deleteProduct)

    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));

