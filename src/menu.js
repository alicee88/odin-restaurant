const menu = () => {
    const contentDiv = document.getElementById('content');

    const h1 = document.createElement('div');
    h1.innerHTML = 'MENU';
    contentDiv.appendChild(h1);

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    let menuItems = [];
    menuItems[0] = createMenuItem('Siu Mai', 'siumai.png', 'Pork and prawn steamed dumplings', '2.50');
    menuItems[1] = createMenuItem('Har Gow', 'hargow.jpg', 'Prawn steamed dumplings', '2.50');
    menuItems[2] = createMenuItem('Cheung Fun', 'cheungfun.jpg', 'Rice noodles stuffed with either char siu or prawns', '3.00');
    menuItems[3] = createMenuItem('Char Siu Bao', 'bao.jpg', 'Buns stuffed with char siu', '3.50');
    menuItems[4] = createMenuItem('Lo Bak Go', 'lobakgo.jpg', 'Fried turnip paste cakes', '3.00');
    menuItems[5] = createMenuItem('Oolong Tea', 'tea.jpg', 'Pot of hot oolong tea', '1.50');

    menuItems.forEach(item => menuDiv.appendChild(item));

    contentDiv.appendChild(menuDiv);
};

function createMenuItem(name, image, description, price) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card">
            <header>
                <h4>${name}</h4>
            </header>    
            <img src="../${image}">
            <div class="content">
                <p>${description}</p>
            </div>
            <footer>£${price}</footer>
        </div>
    `;
    return card;
}

export default menu