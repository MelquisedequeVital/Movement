import { toggleTheme, applySavedTheme } from './tema.js';
import {Menu} from "./menu.js"

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();

    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});

Menu()

