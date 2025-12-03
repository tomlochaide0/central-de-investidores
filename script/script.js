// ===========================================================
// BITGRID JS — Menu Mobile / Hamburger
// ===========================================================

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  console.log("Cental De Investidores Bitgrid- Desevolvido Por https://github.com/tomlochaide0");

  // Função para abrir/fechar o menu mobile
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");        // mostra/esconde menu
    hamburger.classList.toggle("active");     // anima hamburger
  });

  // Fechar menu ao clicar em um link (mobile)
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
        hamburger.classList.remove("active");
      }
    });
  });
});
