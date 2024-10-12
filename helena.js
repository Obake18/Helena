// Array de dados com as imagens e textos personalizados para o aniversário
const data = [
    { text: "Feliz aniversário, minha irmã querida!", imgSrc: "./imagens/foto1.jpeg" },
    { text: "Lembre-se de todos os momentos incríveis que já vivemos!", imgSrc: "./imagens/foto2.jpeg" },
    { text: "Que seu dia seja repleto de alegria e amor!", imgSrc: "./imagens/foto3.jpeg" },
    { text: "Você é a melhor irmã do mundo, te amo!", imgSrc: "./imagens/foto4.jpeg" },
    { text: "Espero que seu novo ano seja cheio de conquistas!", imgSrc: "./imagens/foto5.jpeg" }
];

// Seleciona o contêiner onde o conteúdo será adicionado
const container = document.getElementById('content-container');

// Itera sobre o array de dados e cria elementos dinamicamente
data.forEach(item => {
    // Cria um div para cada conjunto de imagem + texto
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-item'); // Adiciona uma classe para estilização futura

    // Cria um elemento de texto (parágrafo)
    const textElement = document.createElement('p');
    textElement.textContent = item.text; // Define o texto a partir dos dados

    // Cria um elemento de imagem
    const imgElement = document.createElement('img');
    imgElement.src = item.imgSrc; // Define a URL da imagem local


    // Adiciona o texto e a imagem dentro do div criado
    contentDiv.appendChild(textElement);
    contentDiv.appendChild(imgElement);

    // Adiciona o div dentro do contêiner principal
    container.appendChild(contentDiv);
});
