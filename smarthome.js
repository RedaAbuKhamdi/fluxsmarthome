const express = require('express')
const app = express()

const port = 3000;

app.get('/v1.0', (req, res) => {
  res.sendStatus(200);
});

app.listen(port,()=>{
    console.log("App listening");
});