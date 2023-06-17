import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/post/cadastroCliente";
import CadastroProduto from "../negocio/post/cadastroProduto";
import CadastroServico from "../negocio/post/cadastroServico";
import AtualizarProduto from "../negocio/put/atualizarProduto";
import ListagemClientes from "../negocio/get/todosClientes";
import ListagemProdutos from "../negocio/get/todosProdutos";
import ListagemServicos from "../negocio/get/todosServicos";
import ClienteUnico from "../negocio/get/clienteUnico";
import ProdutoUnico from "../negocio/get/produtoUnico";
import ServicoUnico from "../negocio/get/servicoUnico";
import AtualizarServico from "../negocio/put/atualizarServico";
import CadastroRG from "../negocio/post/cadastroRG";
import CadastrarPet from "../negocio/post/cadastrarPet";
import CadastroTelefone from "../negocio/post/cadastroTelefone";
import PetUnico from "../negocio/get/petUnico";
import AtualizarPet from "../negocio/put/atualizarPet";

console.log(`\nBem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log('\nCadastro')
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar produto`);
    console.log(`3 - Cadastrar serviço`);
    console.log('4 - Adicionar pet')

    console.log('\nListagem')
    console.log(`5 - Listar todos os clientes`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Listar todos os serviços`);

    console.log('\nEdição')
    console.log(`8 - Editar um produto`);
    console.log(`9 - Editar um serviço`);
    console.log(`10 - Editar pet`);

    console.log('\nExclusão')
    console.log(`11 - Excluir um cliente`);
    console.log(`12 - Excluir um produto`);
    console.log(`13 - Excluir um serviço`);

    console.log('\nOutras Ações')
    console.log('14 - Adicionar RG')
    console.log('15 - Adicionar telefone')

    console.log(`\n0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`\nPor favor, escolha uma opção: `)

    switch (opcao) {
        case 0:
            execucao = false
            console.log(`Fim`)
            break;

        default:
            console.log(`Digte um numero que corresponda à alguma ação`)
            
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;

        case 2:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break

        case 3:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break

        case 4:
            const clienteCPF = entrada.receberTexto('Digite o CPF do cliente para adicionar um pet: ');
            const clienteManager = new ClienteUnico(empresa.getClientes);
            const clienteSelecionado = clienteManager.selecionar(clienteCPF);
            console.log(`Cliente selecionado: ${clienteSelecionado.nome}`);
            CadastrarPet(clienteSelecionado);
            console.log(`\nPet adicionado com sucesso ao cliente: ${clienteSelecionado.nome}`);
            console.log(clienteSelecionado.getPets);
            break

        case 5:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break

        case 7:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break

        case 8:
            const nomeDoProduto = entrada.receberTexto('Digite o nome do produto para editar: ');
            const produtoManager = new ProdutoUnico(empresa.getProdutos);
            const produtoParaEditar = produtoManager.selecionar(nomeDoProduto);

            const editorProduto = new AtualizarProduto();
            editorProduto.editar(produtoParaEditar);

            console.log('\nProduto atualizado com sucesso!');
            break


        case 9:
            let nomeServico = entrada.receberTexto('Digite o nome do serviço que deseja editar: ')
            let servicoManager = new ServicoUnico(empresa.getServicos)
            let servicoParaEditar = servicoManager.selecionar(nomeServico)

            let editarServico = new AtualizarServico()
            editarServico.editar(servicoParaEditar)
            console.log('\nServiço editado com sucesso :)')
            break

        case 10:
            const cpfClienteEditarPet = entrada.receberTexto('Digite o CPF do cliente que deseja editar um Pet: ');
            const clienteManagerPet = new ClienteUnico(empresa.getClientes);
            const clienteSelecionadoPet = clienteManagerPet.selecionar(cpfClienteEditarPet);

            console.log(`Cliente selecionado: ${clienteSelecionadoPet.nome}`);

            const nomePet = entrada.receberTexto('Digite o nome do Pet que deseja editar: ');
            const petManager = new PetUnico(clienteSelecionadoPet.getPets);
            const petSelecionado = petManager.selecionar(nomePet);

            console.log(`Pet selecionado: ${petSelecionado.getNome}`);

            const editorPet = new AtualizarPet();
            editorPet.editar(petSelecionado);
            break

        case 11:
            const cpfExclusao = entrada.receberTexto('Digite um CPF para exclusão: ');
            const clienteManagerExclusão = new ClienteUnico(empresa.getClientes);
            const clienteSelecionadoExclusão = clienteManagerExclusão.selecionar(cpfExclusao);

            console.log(`Cliente selecionado: ${clienteSelecionadoExclusão.nome}`);

            const indice = empresa.getClientes.indexOf(clienteSelecionadoExclusão);
            delete empresa.getClientes[indice];

            console.log('\nCliente excluído com sucesso. :)');
            break


        case 12:
            let nomeProduto = entrada.receberTexto('Digite o nome do produto que deseja excluir: ')
            let unicoProduto = new ProdutoUnico(empresa.getProdutos)
            let produto = unicoProduto.selecionar(nomeProduto)

            console.log(`Nome do produto selecionado: ${produto.nome}`);

            let indiceProduto = empresa.getProdutos.indexOf(produto)
            delete empresa.getProdutos[indiceProduto]

            console.log('\nProduto excluído com sucesso. :)');
            break

        case 13:
            let servicoNome = entrada.receberTexto('Digite o nome do serviço que deseja excluir: ')
            let unicoServico = new ServicoUnico(empresa.getServicos)
            let servico = unicoServico.selecionar(servicoNome)

            console.log(`Serviço selecionado: ${servico.nome}`)

            let indiceServico = empresa.getServicos.indexOf(servico)
            delete empresa.getServicos[indiceServico]
            console.log('\nServiço excluído com sucesso :)')
            break

        case 14:
            let rgCliente = entrada.receberTexto('Digite o CPF do cliente que deseja adicionar um RG: ')
            let selecionarClienteRG = new ClienteUnico(empresa.getClientes)
            let clienteSelecionadoRG = selecionarClienteRG.selecionar(rgCliente)

            console.log(`\nNome do cliente selecionado: ${clienteSelecionadoRG.nome}`);

            CadastroRG(clienteSelecionadoRG)

            console.log(`\nRG adicionado com sucesso ao cliente ${clienteSelecionadoRG.nome}.`)
            console.log(clienteSelecionadoRG.getRgs)
            break

        case 15:
            let clienteCpf = entrada.receberTexto('Digite o CPF do cliente que deseja adicionar um telefone: ')
            let selecionarClienteTelefone = new ClienteUnico(empresa.getClientes)
            let clienteSelecionadoTelefone = selecionarClienteTelefone.selecionar(clienteCpf)

            console.log(`Nome do cliente selecionado: ${clienteSelecionadoTelefone.nome}`);

            CadastroTelefone(clienteSelecionadoTelefone)

            console.log(`\nTelefone adicionado com sucesso ao cliente ${clienteSelecionadoTelefone.nome}.`)
            console.log(clienteSelecionadoTelefone.getTelefones)
            break


    }
}