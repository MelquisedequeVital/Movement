export function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark');

    // Salva no LocalStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Atualiza a logo
    const logo = document.getElementById('logo');
    if (logo) {
        logo.src = isDarkMode ? "/assets/logo-dark.png" : "/assets/logo-light.png";
    }
}

// Aplica o tema salvo ao carregar a página
export function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);

    // Atualiza a logo ao carregar
    const logo = document.getElementById('logo');
    if (logo) {
        logo.src = savedTheme === "dark" ? "/assets/logo-dark.png" : "/assets/logo-light.png";
    }
}
