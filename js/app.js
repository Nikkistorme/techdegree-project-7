
// ALERTS AND NOTIFICATIONS

// Clearing alerts
const alertBanner = document.getElementById('alert-banner'); // retrieve banner
const alertClearButton = document.getElementById('alert-clear-button'); // retrieve clear button

alertClearButton.addEventListener('click', (e) => { // listen for clicks of clear button
    alertBanner.style.display = 'none'; // hide alert banner
})

// SIDEBAR
const nav = document.getElementById('navigation'); // retrieve navigation
const navLinks = nav.getElementsByClassName('nav-link'); // retrieve navigation links

nav.addEventListener('click', (e) => { // listen for clicks in navigation bar
    for (i = 0; i < navLinks.length; i += 1) { // go through navLinks,
        navLinks[i].classList.remove('active'); // and remove all .active classes
    }
    if (e.target.className !== 'active') { // if link does not already have .active,
        e.target.className = 'active';
    }
})


// USER MESSAGES

const messageUser = document.getElementById('message-user'); // retrieve user search box
const messageContent = document.getElementById('message-content'); // retrieve message box
const messageSubmit = document.getElementById('message-submit'); // retreive message submit button

messageSubmit.addEventListener('click', (e) => { // listen for when the form is submitted
    if (messageUser.value === '') {
        e.preventDefault();
        alert('You must designate a User!');
    } else if (messageContent.value === '') {
        e.preventDefault();
        alert('You must designate a message!');
    } else {
        alert('Your message to ' + messageUser.value + ' was sent!');
    }
})