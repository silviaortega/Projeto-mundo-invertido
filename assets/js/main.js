
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
});

function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

/***   adicionei uma animação de rotação   ***/
    const button = document.getElementById('switch-theme-button');
    button.classList.add('rotate');
    setTimeout(() => button.classList.remove('rotate'), 500);
}

/****  adicionei uma função para adicionar animação de fade-in  ****/
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

/***   adicionei uma animação de rolagem   ***/
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

/***  apliquei uma validação de formulário  ***/
document.getElementById('btnSubscribe').addEventListener('click', function() {
    const name = document.getElementById('txtName').value;
    const email = document.getElementById('txtEmail').value;
    const level = document.getElementById('txtLevel').value;

    if (!name || !email || !level) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    alert("Inscrição realizada com sucesso!");
});

const galleryItems = document.querySelectorAll('.gallery-image');

galleryItems.forEach(item => {
    const image = item.querySelector('img');
    const overlay = item.querySelector('.image-overlay');

/***  adicionei o evento de mouseover para aplicar o zoom e mostrar o overlay  ***/ 
    item.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';  
        overlay.style.opacity = '1';          
    });

/***  adicionei um evento de mouseout para remover o zoom e esconder o overlay  ****/ 
    item.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';   
        overlay.style.opacity = '0';          
    });
});

