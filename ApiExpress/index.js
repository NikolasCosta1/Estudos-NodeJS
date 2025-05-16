const express = require('express');
const app = express();

app.use(express.json());

//api para todos os usuarios
app.get('/users', (req, res) =>{
    console.log(req.query);
    console.log('get de todos');
    res.status(200).send('Todos os usuarios');
})

//api para um usuario
app.get('/users/:id', (req, res) =>{
    console.log(req.params.id);
    console.log('get por id');
    res.status(200).send(req.params.id);
})

//adicionar user
app.post('/users', (req,res) =>{
    console.log(req.body);
    console.log('post de usuario');
    res.status(200).send(req.body);
})

app.put('/users/:id', (req,res) =>{
    console.log('Put de usuario')
    res.status(200).send(req.params.id)
})

app.delete('/users/:id', (req,res) =>{
    console.log('Delete de usuario')
    res.status(200).send(req.params.id)
})

app.listen(3000, () =>{
    console.log('iniciou o servidor')
})
