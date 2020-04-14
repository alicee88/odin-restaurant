const home = () => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const img = document.createElement('div');
    img.innerHTML = '<img src="../dimsum.jpg" width="556" height="367">';
    contentDiv.appendChild(img);

    const h1 = document.createElement('div');
    h1.innerHTML = '<h1>ONCE UPON A DUMPLING</h1>';
    contentDiv.appendChild(h1);

    const p = document.createElement('div');
    p.innerHTML = `
                <h2>Our Story</h2>
                <p>Wooden steamer baskets of siu mai and har gow, perfectly sloppy cheung fun, pillowy soft char siu bao, and crisp fried lo bak go.
                Food to share with those you love with a pot of hot oolong tea. 
                We use the traditional trolley service for that authentic Hong Kong experience.</p>
                `;
    contentDiv.appendChild(p);
};

export default home