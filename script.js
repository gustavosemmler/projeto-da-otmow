// Captura os elementos do header e dos botões de idioma
const header = document.querySelector('header');
const languageButtons = document.getElementById('language-buttons');
const englishButton = document.getElementById('english-button');
const portugueseButton = document.getElementById('portuguese-button');
const applyButton = document.getElementById('apply-button');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Função para mostrar o botão "Aplicar Agora" e esconder os botões de idioma
function showApplyButton() {
    languageButtons.style.display = 'none';
    applyButton.style.display = 'flex';
}


menuToggle.addEventListener('click', () => {
    // Alterna a classe 'hidden' para mostrar ou ocultar o menu mobile
    mobileMenu.classList.toggle('hidden');
});

// Verifica o scroll da página
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Ajuste a altura da rolagem para fixar o cabeçalho mais rapidamente
    const scrollThreshold = 0; // Valor em pixels, ajuste conforme necessário

    // Seleciona o botão azul
    const blueButton = document.querySelector('.blue-button');

    // Verifica se o scroll ultrapassou a altura da rolagem
    if (scrollY > scrollThreshold) {
        header.classList.add('fixed');
        showApplyButton();
        // Adiciona a classe .blue-button para exibir suavemente o botão azul
     
    } else {
        header.classList.remove('fixed');
        languageButtons.style.display = 'flex';
        applyButton.style.display = 'none';
        // Remove a classe .blue-button para ocultar suavemente o botão azul
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('init-hidden-off');
        }
    });
}, {
    threshold: [0, .3, 1]
});

document.querySelectorAll('.init-hidden').forEach(element => {
    observer.observe(element);
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(() => {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

