let guests = 2;

const contact = () => {

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'BOOK A TABLE';
    contactDiv.appendChild(h1);
    const h4 = document.createElement('h4');
    h4.classList.add('contact-phone');
    h4.innerHTML = '01223 404404 | hello@dumplings.com';
    contactDiv.appendChild(h4);

    const bookingsDiv = document.createElement('div');
    bookingsDiv.classList.add('bookings');
    contactDiv.appendChild(bookingsDiv);

    const guestsDiv = document.createElement('div');
    guestsDiv.classList.add('guests');
    const guestsText = document.createElement('p');
    guestsText.setAttribute('id', 'guests');
    const guestsLabel = document.createElement('label');
    guestsLabel.setAttribute('for', 'guests');
    guestsLabel.textContent = 'Guests';
    guestsText.textContent = '2 Guests';
    const plusButton = document.createElement('button');
    plusButton.classList.add('plus');
    plusButton.innerHTML = '<i class="fas fa-plus"></i>';

    plusButton.addEventListener('click', (e) => {
        if(guests < 5) {
            guests = guests + 1;
            guestsText.textContent = `${guests} Guests`;
        }
    });

    const minusButton = document.createElement('button');
    minusButton.classList.add('minus');
    minusButton.innerHTML = '<i class="fas fa-minus"></i>';

    minusButton.addEventListener('click', (e) => {
        if(guests > 1) {
            guests = guests - 1;
            guestsText.textContent = `${guests} ${guests === 1 ? 'Guest' : 'Guests'}`;
        }
    });

    guestsDiv.appendChild(guestsLabel);
    guestsDiv.appendChild(guestsText);
    guestsDiv.appendChild(plusButton);
    guestsDiv.appendChild(minusButton);
    bookingsDiv.appendChild(guestsDiv);

    const maxMonth = new Date().getMonth() + 3;
    let maxDate = new Date();
    maxDate.setMonth(maxMonth);
    maxDate = maxDate.toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];
    
    const bookTableDiv = document.createElement('div');
    bookTableDiv.innerHTML = `
        <div>
            <label for="Date">Date</label>
            <input type="date" id="date" name="date" value="${today}" min="${today}" max="${maxDate}"></input>
        </div>
        <div>
            <label for="Time">Time</label>
            <select name="time" id="time-select">
                <option value="">--Time--</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:15">12:15 PM</option>
                <option value="12:30">12:30 PM</option>
                <option value="12:45">12:45 PM</option>
                <option value="1:00">1:00 PM</option>
                <option value="1:15">1:15 PM</option>
                <option value="1:30">1:30 PM</option>
                <option value="1:45">1:45 PM</option>
                <option value="2:00">2:00 PM</option>
                <option value="2:15">2:15 PM</option>
                <option value="2:30">2:30 PM</option>
                <option value="2:45">2:45 PM</option>
            </select>
        </div>
        <div>
            <label for="Name">Name</label>
            <input type="text" id="name" name="name"></input>
        </div>
        <div>
            <label for="Email">Email</label>
            <input type="email" id="email" name="email"></input>
        <div>
            `
    bookingsDiv.appendChild(bookTableDiv);



    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.textContent = 'Reserve';
    bookingsDiv.appendChild(submit);
    contactDiv.appendChild(bookingsDiv);

    const text = document.createElement('div');
    text.classList.add('contact-details');
    text.innerHTML = `
        <h4>Open Tuesday - Sunday | 12:00pm - 3:00pm</h4>
    `
    contactDiv.appendChild(text);

    return contactDiv;
};

export default contact