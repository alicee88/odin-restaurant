import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', toggleActive));

const content = document.getElementById('content');
content.appendChild(home());

function toggleActive(e) {
    tabs.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');

    content.innerHTML = '';
    if(this.classList.contains('tab-home')) {
        content.appendChild(home());
    }
    if(this.classList.contains('tab-menu')) {
        content.appendChild(menu());
    }
    if(this.classList.contains('tab-contact')) {
        content.appendChild(contact());
    }

}
