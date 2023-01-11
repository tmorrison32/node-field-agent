const express = require('express');
const req = require('express/lib/request');
const app = express();


//Routes
const agentRouter = require('./routers/agentRouter');

const port = 8000;
app.use(express.json());
app.use(
    express.urlencoded({
        extended:true
})
);

app.use("/agent", agentRouter);

app.listen(port, () => {
    console.log(`Agents api is listening on port ${port}`)
});