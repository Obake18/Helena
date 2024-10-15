// Array de dados com as imagens e textos personalizados para o aniversário
const data = [
    { 
        text: "A melhor forma de começar é com uma imagem coquette!", 
        details: "Todos os itens da sua wishlist irão se realizar! tenha fé!\nLembre-se de que cada desejo torna-se verdade, e que eu vou estar contigo quando isso acontecer.", 
        imgSrc: "./imagens/foto1.jpeg" 
    },
    { 
        text: "Para a minha Princesa dos Mares. ", 
        details: "Você é tão linda quanto a Mamare. E quem disser o contrário, que tome no centro do olho do c*", 
        imgSrc: "./imagens/foto2.jpeg" 
    },
    { 
        text: "Um dos seus jogos favoritos, com a personagem que é a sua cara. ", 
        details: "Por boas razões, ela me lembra você.", 
        imgSrc: "./imagens/foto3.jpeg" 
    },
    { 
        text: "O seu primeiro anime shoujo!", 
        details: "Quase coloquei Sailor Moon aqui, mas realmente, é um anime muito rosa e fofo, combina contigo.", 
        imgSrc: "./imagens/foto4.jpeg" 
    },
    { 
        text: "Gatitos (Não poderia faltar né)", 
        details: "Nada é mais fofo do que gatitos! E pra mim, você é uma gatita.", 
        imgSrc: "./imagens/foto5.jpeg" 
    },
    { 
        text: "Um dos filmes que você mais gostou!", 
        details: "Porque o Mundo fica lindo de rosa.", 
        imgSrc: "./imagens/foto6.jpeg" 
    },
    { 
        text: "A sua subcultura!", 
        details: "Celebre quem você é e a comunidade que você ama. Vamos desfilar em SP, Gothcore e Coquettecore.", 
        imgSrc: "./imagens/foto7.jpeg" 
    },
    { 
        text: "U.U", 
        details: "Coloquei pra você se lembrar de que vamos dar muitos rolês pelo Mundo ainda.", 
        imgSrc: "./imagens/foto8.jpeg" 
    },
    { 
        text: "Seu marido!", 
        details: "Você ainda vai achar o seu Honrado!", 
        imgSrc: "./imagens/foto9.jpeg" 
    },
    { 
        text: "💌", 
        details: "Um pequeno textinho para ti. 💌 \n Querida Leninha, minha irmãzinha, \nEu te amo muito, e este é o meu primeiro presente de aniversário para você. Por isso, achei interessante escrever um pequeno texto para você aqui neste site, que ficará online para sempre, assim como o meu amor por você. 💌\nEstamos longe um do outro, um mora na casa do chapéu, o outro na casa do caixa-prego, mas temos um bagulho astral que nos une e nos mantém em sinergia constante. Quero dedicar este texto a você, que é incrível simplesmente por ser quem você é. Você é única, especial e incomparável. E para qualquer um que diga o contrário: que vá tomar no olho do c*!", 
        imgSrc: "./imagens/foto10.jpeg" 
    },
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
    contentDiv.setAttribute('data-details', item.details); // Adiciona os detalhes
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
    const details = card.getAttribute('data-details'); // novo campo

    // Redireciona para detalhes.html com os parâmetros
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);
    const encodedImage = encodeURIComponent(imageSrc);
    const encodedDetails = encodeURIComponent(details); // novo campo

    // Redireciona para a página detalhes.html
    window.location.href = `detalhes.html?title=${encodedTitle}&description=${encodedDescription}&image=${encodedImage}&details=${encodedDetails}`;
}

function goBack() {
    window.history.back(); // Volta para a página anterior
}
