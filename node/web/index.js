import express from 'express';

const app = express();
// Middleware
app.use((request, response, next) => {
    console.log('Middleware');
    console.log(request.url);
    next();
});

// Routing - HTTP Method + URL Path
app.get('/', (request, response) => {
    console.log('Get / Route');
    response.send('Hello World!');
});

app.listen(8080, () => console.log('Server running on port 8080'));