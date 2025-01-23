let nomeAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo(){
    let campoDoNome = nomeAmigo.value.trim(); // trim () = remove espaços em branco

    if(campoDoNome === ""){ 
        resultado.textContent = "Insira um nome!"; 
        nomeAmigo.focus(); 
        return;
    }

    criarListaDeAmigos(campoDoNome);
    nomeAmigo.value = ""; 
    nomeAmigo.focus(); 
};

function criarListaDeAmigos(nome){
    let criarLista = document.createElement('li');
    criarLista.textContent = nome;
    listaAmigos.appendChild(criarLista); 
};

function sortearAmigo() {

    if (listaAmigos.children.length < 2) { 
        if(listaAmigos.children.length === 0){
            resultado.textContent = "Adicione pelo menos dois amigos para sortear.";
        }else{
            resultado.textContent = "Adicione mais um amigo para sortear.";
        }
        return;
    }

    let nomes = [];
    for (let i = 0; i < listaAmigos.children.length; i++) {
        nomes.push(listaAmigos.children[i].textContent);
    }

    let sorteado = Math.floor(Math.random() * nomes.length);
    let amigoSorteado = nomes[sorteado];

    resultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
};