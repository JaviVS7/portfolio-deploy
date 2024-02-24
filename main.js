import './style.scss'
import setupTheme from './src/js/switch.js'
import toggleMenu from './src/js/menu.js'

document.addEventListener("DOMContentLoaded", (event)=> {
    toggleMenu("#burguer-btn");

});

setupTheme('#switch');
