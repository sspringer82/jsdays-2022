const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    res.json([{
        id: 1,
        firstname: 'John',
        lastname: 'Doe'
    }, { id: 2, firstname: 'Jane', lastname: 'Doe' }]);
})

app.use(express.static('public'));

app.listen(8080);