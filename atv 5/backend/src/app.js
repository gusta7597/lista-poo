import express, { Router } from "express";
import cors from 'cors';
import connectToDB from './db/dbconfig.js';
import queryClientes from "./model/clientes.js";
import queryCpf from "./model/cpf.js";

import queryPets from "./model/pets.js";
import queryProduto from "./model/produto.js";

import queryRg from "./model/rg.js";
import queryServico from "./model/servico.js";

import queryTelefone from "./model/telefone.js";
import queryEmpresas from "./model/empresas.js";
import queryServicoUtilizado from "./model/servicoUtilizado.js";
import queryProdutoUtilizado from "./model/produtoUtilizado.js";
import { allClientes, createClientes, deleteCliente, specificClientes, updateClientes } from "./controller/controllerCliente.js";
import { allCpf, createCpf, deleteCpf, specificCpf, updateCpf } from "./controller/controllerCpf.js";
import { allEmpresas, createEmpresas, deleteEmpresa, specificEmpresas, updateEmpresas } from "./controller/controllerEmpresas.js";
import { allPets, createPets, deletePets, specificPets, updatePets } from "./controller/controllerPets.js";
import { allProduto, createProduto, deleteProduto, specificProduto, updateProduto } from "./controller/controllerProduto.js";
import { allProdutoUtilizado, createProdutoUtilizado, deleteProdutoUtilizado, specificProdutoUtilizado } from "./controller/controllerProdutoUtilizado.js";
import { allRg, createRg, deleteRg, specificRg, updateRg } from "./controller/controllerRg.js";
import { allServico, createServico, deleteServico, specificServico, updateServico } from "./controller/controllerServico copy.js";
import { allServicoUtilizado, createServicoUtilizado, deleteServicoUtilizado, specificServicoUtilizado } from "./controller/controllerServicoUtilizado.js";
import { allTelefone, createTelefone, deleteTelefone, specificTelefone, updateTelefone } from "./controller/controllerTelefone.js";


export const app = express();
const router = Router(); 

app.use(express.json());
app.use(router)
router.use(cors({
    origin: '*'
}));

app.use(cors({
    origin: '*'
}));


app.get('/', (req, res) => {
    res.status(200).send({message: "Desafio BackEnd"});
})

router.get('/clientes', async (req, res) => {
    
    allClientes(req,res);
});

router.get('/clientes/:id', async (req, res) => {
    specificClientes(req,res);
});

router.post('/clientes', async (req, res) => {
    createClientes(req,res);
});

router.put('/clientes', async (req, res) => {
    updateClientes(req,res);
});

router.delete('/clientes', async (req, res) => {
    deleteCliente(req,res);
});



router.get('/cpf', async (req, res) => {
    allCpf(req,res);
});

router.get('/cpf/:id', async (req, res) => {
    specificCpf(req,res);
});

router.post('/cpf', async (req, res) => {
    createCpf(req,res);
});

router.put('/cpf', async (req, res) => {
    updateCpf(req,res);
});

router.delete('/cpf', async (req, res) => {
    deleteCpf(req,res);
});



router.get('/empresa', async (req, res) => {
    allEmpresas(req,res);
});

router.get('/empresa/:id', async (req, res) => {
    specificEmpresas(req,res);
});

router.post('/empresa', async (req, res) => {
    createEmpresas(req,res);
});

router.put('/empresa', async (req, res) => {
    updateEmpresas(req,res);
});

router.delete('/empresa', async (req, res) => {
    deleteEmpresa(req,res);
});


router.get('/pets', async (req, res) => {
    allPets(req,res);
});

router.get('/pets/:id', async (req, res) => {
    specificPets(req,res);
});

router.post('/pets', async (req, res) => {
    createPets(req,res);
});

router.put('/pets', async (req, res) => {
    updatePets(req,res);
});

router.delete('/pets', async (req, res) => {
    deletePets(req,res);
});


router.get('/produto', async (req, res) => {
    allProduto(req,res);
});

router.get('/produto/:id', async (req, res) => {
    specificProduto(req,res);
});

router.post('/produto', async (req, res) => {
    createProduto(req,res);
});

router.put('/produto', async (req, res) => {
    updateProduto(req,res);
});

router.delete('/produto', async (req, res) => {
    deleteProduto(req,res);
});



router.get('/produto', async (req, res) => {
    allProduto(req,res);
});

router.get('/produto/:id', async (req, res) => {
    specificProduto(req,res);
});

router.post('/produto', async (req, res) => {
    createProduto(req,res);
});

router.put('/produto', async (req, res) => {
    updateProduto(req,res);
});

router.delete('/produto', async (req, res) => {
    deleteProduto(req,res);
});



router.get('/produtoUtilizado', async (req, res) => {
    allProdutoUtilizado(req,res);
});

router.get('/produtoUtilizado/:id', async (req, res) => {
    specificProdutoUtilizado(req,res);
});

router.post('/produtoUtilizado', async (req, res) => {
    createProdutoUtilizado(req,res);
});

router.delete('/produtoUtilizado', async (req, res) => {
    deleteProdutoUtilizado(req,res);
});




router.get('/rg', async (req, res) => {
    allRg(req,res);
});

router.get('/rg/:id', async (req, res) => {
    specificRg(req,res);
});

router.post('/rg', async (req, res) => {
    createRg(req,res);
});

router.put('/rg', async (req, res) => {
    updateRg(req,res);
});

router.delete('/rg', async (req, res) => {
    deleteRg(req,res);
});



router.get('/servico', async (req, res) => {
    allServico(req,res);
});

router.get('/servico/:id', async (req, res) => {
    specificServico(req,res);
});

router.post('/servico', async (req, res) => {
    createServico(req,res);
});

router.put('/servico', async (req, res) => {
    updateServico(req,res);
});

router.delete('/servico', async (req, res) => {
    deleteServico(req,res);
});



router.get('/servicoUtilizado', async (req, res) => {
    allServicoUtilizado(req,res);
});

router.get('/servicoUtilizado/:id', async (req, res) => {
    specificServicoUtilizado(req,res);
});

router.post('/servicoUtilizado', async (req, res) => {
    createServicoUtilizado(req,res);
});

router.delete('/servicoUtilizado', async (req, res) => {
    deleteServicoUtilizado(req,res);
});



router.get('/telefone', async (req, res) => {
    allTelefone(req,res);
});

router.get('/telefone/:id', async (req, res) => {
    specificTelefone(req,res);
});

router.post('/telefone', async (req, res) => {
    createTelefone(req,res);
});

router.put('/telefone', async (req, res) => {
    updateTelefone(req,res);
});

router.delete('/telefone', async (req, res) => {
    deleteTelefone(req,res);
});
export default app;