import express from 'express';

export const questionRouter = express.Router();

questionRouter.get('/', (req, res) => {
    res.send('Hi');
});