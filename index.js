var express = require('express');
var app = express();
app.use(express.json());

app.get('/api/helloworld', function(req, res) {
    console.log(req.body);
    res.send('Hello World');
});

app.post('/api/CadastraRestaurante', function(req, res) {
    console.log(req.body);
    res.send(req.body);
}); 

app.listen(3000);