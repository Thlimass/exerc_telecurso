const express = require("express");

const app = express();

app.listen(5000, function (erro){
    if(erro){
        console.log('Ocorreu um erro!');
    }else{
        console.log('Servidor iniciado com sucesso!');
    }
})