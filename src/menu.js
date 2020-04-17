const menu = () => {

    
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const h1 = document.createElement('h1');
    h1.innerHTML = '<h1>MENU</h1>';
    menuDiv.appendChild(h1);


    let menuItems = [];
    menuItems[0] = createMenuItem('Siu Mai', 'siumai2.png', 'Pork and prawn steamed dumplings', '2.50');
    menuItems[1] = createMenuItem('Har Gao', 'hargow2.png', 'Prawn steamed dumplings in delicate rice wrapper', '2.50');
    menuItems[2] = createMenuItem('Cheung Fun', 'cheungfun2.png', 'Rice noodles stuffed with either char siu or prawns', '3.00');
    menuItems[3] = createMenuItem('Char Siu Bao', 'bao.png', 'Buns stuffed with char siu', '3.50');
    menuItems[4] = createMenuItem('Egg Custard Tart', 'eggtart.png', 'Sweet egg custard tart', '2.50');
    menuItems[5] = createMenuItem('Tea', 'tea3.jpeg', 'Jasmine, Oolong, Green, or Puerh', '1.50');

    menuItems.forEach(item => menuDiv.appendChild(item));

    return menuDiv;
};

function createMenuItem(name, image, description, price) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `    
        <header><h4>${name}</h4></header>    
        <img class="${name}" src="../${image}">
        <div class="content">
            <p>${description}</p>
        </div>
        <footer>£${price}</footer>
    `;
    return card;
}

export default menu