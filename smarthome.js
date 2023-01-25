const express = require('express')
const app = express()

const port = 3000;

app.get('/v1.0', (req, res) => {
  res.sendStatus(200);
});
app.get('/test', (req, res) => {
  res.send("Echo test");
});

app.listen(port,()=>{
    console.log("App listening");
});