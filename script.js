// script.js

// Particle effect for the header button (example)
const button = document.querySelector('.holographic-button');

if (button) {
  button.addEventListener('mouseover', () => {
    // Create a particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    button.appendChild(particleContainer);

    // Create particles
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.transform = `scale(${Math.random()})`;
      particle.style.animationDelay = `${Math.random()}s`;
      particleContainer.appendChild(particle);
    }

    // Clean up particles after animation
    setTimeout(() => {
      button.removeChild(particleContainer);
    }, 1000);
  });
}

// Code example highlighting
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("translate-dropdown");

  dropdown.addEventListener("change", function () {
    const selectedLang = dropdown.value;
    translatePage(selectedLang);
  });

  function translatePage(lang) {
    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateInit`;
    document.body.appendChild(googleTranslateScript);

    window.googleTranslateInit = function () {
      new google.translate.TranslateElement({ pageLanguage: "es", includedLanguages: lang }, "language-selector");
    };
  }
});
