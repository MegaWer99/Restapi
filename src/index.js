const express = require ('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));



//rutas de mi pagina web

app.use(require('./routes/index'));

app.listen(3000);
console.log("live server in port 3000");