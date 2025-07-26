import express from 'express';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(errorHandler);

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
