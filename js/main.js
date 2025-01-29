import { toggleTheme, applySavedTheme } from './tema.js';

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();

    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});
