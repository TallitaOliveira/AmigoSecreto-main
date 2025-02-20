let amigos = [];
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    inputAmigo.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizá-la

    amigos.forEach((amigo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remover";
        removeButton.className = "button-remove";
        removeButton.setAttribute('data-index', index); 

        removeButton.addEventListener('click', function () {
            const idx = parseInt(removeButton.getAttribute('data-index')); 
            removerAmigo(idx);
        });

        listItem.appendChild(removeButton);
        listaAmigos.appendChild(listItem);
    });
}

    
        function removerAmigo(index) {
            amigos.splice(index, 1); 
            atualizarListaAmigos();
        }


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}
function novoJogo() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    }   