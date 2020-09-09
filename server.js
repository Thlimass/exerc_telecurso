const dotenv = require("dotenv");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("olá Mundo!")
})


dotenv.config();
app.listen(process.env.PORT, function (){
    console.log(`Server executado com sucesso na porta ${process.env.PORT}`)
});
