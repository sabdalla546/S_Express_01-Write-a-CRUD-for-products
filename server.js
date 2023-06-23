const express = require('express');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(express.json());
app.use('/product', productRouter)


app.listen(3000, ()=>{
    console.log('server is runing in port 3000');
});

