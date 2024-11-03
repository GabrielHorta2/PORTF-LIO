function toggleFlip() {
    const switchCheckbox = document.getElementById("switch");
    switchCheckbox.checked = !switchCheckbox.checked;
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["Hello World", "Bem-vindo ao meu portfólio", "Desenvolvedor Full-Stack"], // Substitua pelos textos desejados
        typeSpeed: 50, // Velocidade de digitação
        backSpeed: 45, // Velocidade de apagar
        loop: true, // Repetir o efeito
        cursorChar: '•', // O caractere do cursor
        showCursor: true, // Mostrar o cursor
        autoInsertCss: true // Incluir CSS automaticamente
    };

    var typed = new Typed("#world", options);
});


document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["Acesse o Git Hub para obter o acesso ao restante:"], // Substitua pelos textos que você deseja mostrar
        typeSpeed: 43, // Velocidade de digitação
        cursorChar: '', // O caractere do cursor
        showCursor: true, // Mostrar o cursor
        autoInsertCss: true // Incluir CSS automaticamente
    };

    var typed = new Typed("#Restante", options);
}); // Chave de fechamento aqui



document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('#titulo', {  // Seletor ajustado para apenas as caixas
        delay: 350,         // Atraso antes de cada animação (ajuste conforme necessário)
        distance: '440px',   // Distância do movimento (ajuste conforme necessário)
        duration: 1000,      // Duração da animação
        origin: 'left',   // Origem da animação
        opacity: 0,         // Opacidade inicial para efeito de fade
        interval: 600,       // Intervalo entre as animações dos elementos
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('#Texto_resumo', {  // Seletor ajustado para apenas as caixas
        delay: 350,         // Atraso antes de cada animação (ajuste conforme necessário)
        distance: '420px',   // Distância do movimento (ajuste conforme necessário)
        duration: 700,      // Duração da animação
        origin: 'bottom',   // Origem da animação
        interval: 600,       // Intervalo entre as animações dos elementos
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.dev_web', {  // Seletor ajustado para apenas as caixas
        delay: 350,         // Atraso antes de cada animação (ajuste conforme necessário)
        distance: '300px',   // Distância do movimento (ajuste conforme necessário)
        duration: 700,      // Duração da animação
        origin: 'right',   // Origem da animação
        interval: 450,       // Intervalo entre as animações dos elementos
       
    });
});

