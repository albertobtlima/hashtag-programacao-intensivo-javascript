const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

const verdeCipreste = {nome: "Verde-cipreste",pasta: "imagens-verde-cipreste"};
const azulInverno = {nome: "Azul-inverno", pasta: "imagens-azul-inverno"};
const meiaNoite = {nome: "Meia-noite", pasta: "imagens-meia-noite"};
const estelar = {nome: "Estela", pasta: "imagens-estelar"};
const rosaClaro = {nome: "Rosa-clar", pasta: "imagens-rosa-claro"};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]; 
const opcoesTamanho = ["41 mm", "45 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    // Atualizar variável de controle
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    // Trocar imagem de visualização
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
}

function trocarTamanho() {
    // Atualizar variável de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    // Mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // Mudar o tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
        imagemVisualizacao.classList.add("caixa-pequena");
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}   

function trocarCor() {
    // Atualizar variável de controle da cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    // Trocar título da página
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // Trocar nome da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;
    // Trocar imagens das miniaturas exibidas
    miniaturaImagem0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-0.jpeg";
    miniaturaImagem1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-1.jpeg";
    miniaturaImagem2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-2.jpeg";
    // Trocar imagem de visualização
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
}
