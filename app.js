let express = require('express');
let app = express();
let path = require('node:path');

app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname,'views/index.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join( __dirname,'views/cart.html'));
});


app.use(express.static('public'))
app.listen(3000,()=>console.log('Server up : http://localhost:3000'));