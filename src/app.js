const express = require('express');
const req = require('express/lib/request');
const app = express();


//Routes
const agentRouter = require('./routers/agentRouter');
const origin = "*";
const port = 8000;
app.use(express.json());
app.use(
    express.urlencoded({
        extended:true
})
);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", origin);
    next();
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message: err.message});
 
    return;
});


app.use("/agent", agentRouter);

app.listen(port, () => {
    console.log(`Agents api is listening on port ${port}`)
});