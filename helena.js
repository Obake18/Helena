// Array de dados com as imagens e textos personalizados para o aniversário
const data = [
    { text: "A melhor forma de começar é com uma imagem coquette! :D \n Todos os itens da sua wishlist irão se realizar! tenha fé!", imgSrc: "./imagens/foto1.jpeg" },
    { text: "Para a minha Princesa dos Mares. <3", imgSrc: "./imagens/foto2.jpeg" },
    { text: "Um dos seus jogos favoritos, com a personagem que é a sua cara. <3", imgSrc: "./imagens/foto3.jpeg" },
    { text: "O seu primeiro anime shoujo!", imgSrc: "./imagens/foto4.jpeg" },
    { text: "Gatitos(Não poderia faltar né)", imgSrc: "./imagens/foto5.jpeg" },
    { text: "Um dos filmes que você mais gostou!", imgSrc: "./imagens/foto6.jpeg" },
    { text: "A sua subcultura!", imgSrc: "./imagens/foto7.jpeg" },
    { text: "U.U", imgSrc: "./imagens/foto8.jpeg" },
    { text: "Seu marido!", imgSrc: "./imagens/foto9.jpeg},"},
];

// Seleciona o contêiner onde o conteúdo será adicionado
const container = document.getElementById('content-container');

// Itera sobre o array de dados e cria elementos dinamicamente
data.forEach((item, index) => {
    // Cria um div para cada conjunto de imagem + texto
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('card'); // Adiciona a classe 'card' ao div

    // Adiciona atributos de dados para passar informações ao clicar
    contentDiv.setAttribute('data-title', `Feliz Aniversário!`);
    contentDiv.setAttribute('data-description', item.text);
    contentDiv.onclick = () => showDetails(contentDiv); // Chama a função showDetails ao clicar

    // Cria um elemento de texto (parágrafo)
    const textElement = document.createElement('p');
    textElement.textContent = item.text; // Define o texto a partir dos dados

    // Cria um elemento de imagem
    const imgElement = document.createElement('img');
    imgElement.src = item.imgSrc; // Define a URL da imagem local
    imgElement.alt = item.text;   // Adiciona um texto alternativo para acessibilidade

    // Adiciona o texto e a imagem dentro do div criado
    contentDiv.appendChild(textElement);
    contentDiv.appendChild(imgElement);

    // Adiciona o div dentro do contêiner principal
    container.appendChild(contentDiv);
});

function showDetails(card) {
    const title = card.getAttribute('data-title');
    const description = card.getAttribute('data-description');
    const imageSrc = card.querySelector('img').src;

    // Redireciona para detalhes.html com os parâmetros
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);
    const encodedImage = encodeURIComponent(imageSrc);

    // Redireciona para a página detalhes.html
    window.location.href = `detalhes.html?title=${encodedTitle}&description=${encodedDescription}&image=${encodedImage}`;
}

function goBack() {
    window.history.back(); // Volta para a página anterior
}
