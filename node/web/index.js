import { createWriteStream } from 'node:fs';
import { join } from 'node:path';
import express from 'express';
import morgan from 'morgan';
import { getDirname } from './dirname.js';
import { router as userRouter } from './users/index.js';

const dirname = getDirname(import.meta.url);

const app = express();

var accessLogStream = createWriteStream(join(dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/users', userRouter);

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