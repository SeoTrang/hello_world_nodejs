const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {   
    res.send('Hello World!') 
});

const port = 8080;  

app.listen(port, () => {   
    console.log(`Example app listening on port ${port}!`) 
});