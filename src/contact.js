const contact = () => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const h1 = document.createElement('div');
    h1.innerHTML = '<h1>CONTACT US</h1>';
    contentDiv.appendChild(h1);

    const img = document.createElement('div');
    img.classList.add('contact');
    img.innerHTML = `<img src="../contact.jpg">`;
    contentDiv.appendChild(img);

    const text = document.createElement('div');
    text.innerHTML = `
        <h2>We love talking about dim sum!</h2>
        <p>Call us to book a table or give us any feedback. We'd also love to hear from you if you're a tasty dim sum supplier.
            We're always looking for people to join our team and help us feed people through the medium of dim sum.
        </p>
        <h4><a href="">hello[at]onceuponadumpling[dot]com</a></h4>
    `
    contentDiv.appendChild(text);
};

export default contact