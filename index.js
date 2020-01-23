const express = require('express');

const app = express();

app.get('/', (request, response) => {
   return response.json({ message :'O serviço está no ar!'});
});

// Definição da porta de acesso 
app.listen(3335);
