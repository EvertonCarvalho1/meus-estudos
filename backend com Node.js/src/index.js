const { request, response } = require('express');
const cors = require ('cors');
const {uuid, isUuid} = require('uuidv4');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());

const projects = [];

// MIDDLEWARE

function logRequests(request, response, next){
    const {method, url} = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;
    
    console.log(logLabel);

    return next();
};

function validateProjectId(request, response, next){
    const {id} = request.params;

    if(!isUuid(id)){
        return response.status(400).json({error: 'ID de projeto invalido'});
    }

    return next();
};

app.use(logRequests);
app.use('projects/:id', validateProjectId);

// ROTA PARA LISTAR OS PROJETOS

app.get('/projects', (request, response) => {

    //Obtem os query params
    
    const {title} = request.query;

    const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects
    return response.json(results);
});

// ROTA PARA CRIAR OS PROJETOS

app.post('/projects', (request, response) => {
    //Obtem o conteudo do Body -> Request Body

    const {title, owner} = request.body;

    const project = {id: uuid(), title, owner};

    projects.push(project); //projects.push(project) o .push vai inserir um novo projeto dentro do array do projects.
   
    return response.json(project);
});


// ROTA PARA ATUALIZAR OS PROJETOS

app.put('/projects/:id', (request, response) => {

    //Obtem os Route Params -> "ID" 

    const {id} = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id === id) 

    if (projectIndex < 0){
        return response.status(400).json({error : "Projeto não encontrado."})
    }

    const project = {
        id, 
        title,
        owner,
    }

    projects[projectIndex] = project;

    return response.json(project);

});

// ROTA PARA DELETAR OS PROJETOS

app.delete('/projects/:id',   (request, response) => {
    const { id } = request.params

    const projectIndex = projects.findIndex(project => project.id === id) 

    if (projectIndex < 0){
        return response.status(400).json({error : "Projeto não encontrado."})
    }

    projects.splice(projectIndex, 1); //o .splice vai apagar projeto dentro do array do projects.

    return response.status(204).send();
});


app.listen(3333, () => {
    console.log('😎 Back-end started')//call back
});




