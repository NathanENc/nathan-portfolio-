//Nav
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav ul");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Cierra el menú cuando se haga clic en un enlace
    document.querySelectorAll(".nav ul li a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});

//detectar idioma
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typing-text");
    const language = document.documentElement.lang; // Detecta el idioma de la página

    const texts = {
        "es": ["Desarrollador Web", "Analista de Datos", "Diseñador UI/UX"],
        "en": ["Web Developer", "Data Analyst", "UI/UX Designer"]
    };

    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseBetweenWords = 2000;
    
    function typeEffect() {
        const currentText = texts[language][index];
        
        if (charIndex < currentText.length) {
            textElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(eraseEffect, pauseBetweenWords);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            charIndex--;
            setTimeout(eraseEffect, eraseSpeed);
        } else {
            index = (index + 1) % texts[language].length;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect();
});

