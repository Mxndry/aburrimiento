const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send("ursl en decadencia");
});

app.listen(8080, () => {
    console.log("Sv iniciado en el puerto 8080");
});
