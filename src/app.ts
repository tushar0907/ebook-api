import express from 'express';

const app = express();


app.get("/", (req, res, next) => {

    res.json({message: "running ebook apis"});
})



export default app;