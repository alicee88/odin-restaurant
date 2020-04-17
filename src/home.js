const home = () => {

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const h1 = document.createElement('div');
    h1.innerHTML = '<h1>ONCE UPON A DUMPLING</h1>';
    homeDiv.appendChild(h1);

    const p = document.createElement('div');
    p.innerHTML = `
                <hr>
                <p>Experience Chinese brunch - food to share with those you love.</p>           
                <p>Wooden steamer baskets of dumplings, perfectly sloppy cheung fun, pillowy soft char siu bao, sweet custard tarts,
                and hot oolong tea.</p>
                <p>We use the traditional trolley service for that authentic Hong Kong experience.</p>
                `;
    homeDiv.appendChild(p);
    return homeDiv;
};

export default home