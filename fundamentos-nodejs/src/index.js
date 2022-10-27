const { response } = require('express');
const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'deu boa neste curso!'}); 
});

app.listen(3333);
 