// public/js/menu.js
export function Menu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
          // Alterna a classe 'hidden' para mostrar/esconder o menu mobile
          mobileMenu.classList.toggle('hidden');
      });
  }
}
