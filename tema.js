
// Função para salvar o tema no localStorage
const saveThemePreference = (theme) => {
    localStorage.setItem('theme', theme);
};

// Função para carregar o tema salvo
const loadThemePreference = () => {
    return localStorage.getItem('theme') || 'light'; // Tema padrão é 'light'
};

// Função para aplicar o tema
const applyTheme = (theme) => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);

    // Atualizar a logo
    const logo = document.getElementById('logo');
    if (logo) {
        logo.src = theme === 'dark' ? '/assets/logo-dark.png' : '/assets/logo-light.png';
    }

    // Atualizar o menu
    const menu = document.getElementById('menu');
    if (menu) {
        if (theme === 'dark') {
            menu.classList.remove('bg-gray-100', 'text-black');
            menu.classList.add('bg-gray-800', 'text-white');
        } else {
            menu.classList.remove('bg-gray-800', 'text-white');
            menu.classList.add('bg-gray-100', 'text-black');
        }
    }
};

// Função para inicializar o tema ao carregar a página
const initializeTheme = () => {
    const currentTheme = loadThemePreference();
    applyTheme(currentTheme);

    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
            applyTheme(newTheme);
            saveThemePreference(newTheme);
        });
    }
};

// Inicializa o tema assim que o arquivo é carregado
initializeTheme();
