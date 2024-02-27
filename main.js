import './style.scss'
import setupTheme from './src/js/switch.js'
import hideMenu from './src/js/menu.js'

document.addEventListener("DOMContentLoaded", (event)=> {
    hideMenu();

});
setupTheme('#switch');
