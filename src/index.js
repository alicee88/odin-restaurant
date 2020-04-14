import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', toggleActive));

const content = document.getElementById('content');

function toggleActive(e) {
    tabs.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');

    if(this.classList.contains('home')) {
        // content.innerHTML = '';
        home();
    }
    if(this.classList.contains('menu')) {
        menu();
    }
    if(this.classList.contains('contact')) {
        contact();
    }

}
home();
//menu();
//contact();
