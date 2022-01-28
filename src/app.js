const express = require('express');
const app = express();
const cors = require('cors');
require('./db/mongoose');




const port = process.env.port||3000


app.use(express.json());
app.use(cors())

app.listen(port,()=>{
    console.log(`server is Running ${port}`)
})