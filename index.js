var express = require('express');
var app = express();
app.use(express.json());

var restaurantes = [
    {
        "codigo": 1,
        "nome": "Spoletto"
    },
    {
        "codigo": 2,
        "nome": "Podrão do Seu Zé"
    },
    {
        "codigo": 3,
        "nome": "China in Box"
    }];

app.get('/api/helloworld', function(req, res) {
    console.log(req.body);
    res.send('Hello World');
});

app.get('/api/retornatodososrestaurantes', function(req, res) {
    console.log(req.body);
    res.send(restaurantes);
});

app.post('/api/CadastraRestaurante', function(req, res) {
    console.log(req.body);
    restaurantes.push(req.body);	
    res.send(req.body);
}); 

app.listen(3000);
