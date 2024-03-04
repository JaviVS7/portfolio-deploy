import './style.scss'
import setupTheme from './src/js/switch.js'
import hideMenu from './src/js/menu.js'
import contactFormValidation from './src/js/form.js'

document.addEventListener("DOMContentLoaded", (event)=> {
    hideMenu();
    contactFormValidation();

});
setupTheme('#switch');
