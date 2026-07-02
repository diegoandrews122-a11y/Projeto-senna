let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvar(){
localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarCarrinho(nome, preco){

carrinho.push({nome, preco});

salvar();

alert(nome + " adicionado ao carrinho!");

}

function carregarCarrinho(){

let div = document.getElementById("listaCarrinho");

if(!div) return;

div.innerHTML = "";

let total = 0;

carrinho.forEach(function(item, i){

let box = document.createElement("div");

box.innerHTML = `
<h3>${item.nome}</h3>
<p>R$ ${item.preco}</p>
<button onclick="remover(${i})">Remover</button>
`;

div.appendChild(box);

total += item.preco;

});

let t = document.getElementById("total");

if(t) t.innerHTML = total;

}

function remover(i){

carrinho.splice(i,1);

salvar();

carregarCarrinho();

}

function limparCarrinho(){

carrinho = [];

salvar();

carregarCarrinho();

alert("Carrinho limpo!");

}

function finalizarCompra(){

if(carrinho.length == 0){
alert("Carrinho vazio!");
return;
}

alert("Compra finalizada com sucesso!");

carrinho = [];

salvar();

carregarCarrinho();

}

function avaliar(){

let nome = document.getElementById("nome").value;
let nota = document.getElementById("nota").value;

if(nome == ""){
alert("Digite seu nome!");
return;
}

let lista = document.getElementById("listaAvaliacoes");

let li = document.createElement("li");

li.innerHTML = nome + " - " + nota;

lista.appendChild(li);

document.getElementById("nome").value = "";

}

function comentar(){

let nome = document.getElementById("nomeComentario").value;
let texto = document.getElementById("comentario").value;

if(nome == "" || texto == ""){
alert("Preencha tudo!");
return;
}

let lista = document.getElementById("listaComentarios");

let li = document.createElement("li");

li.innerHTML = "<strong>" + nome + "</strong><br>" + texto;

lista.appendChild(li);

document.getElementById("nomeComentario").value = "";
document.getElementById("comentario").value = "";

}

carregarCarrinho();
