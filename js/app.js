
// ALERTS AND NOTIFICATIONS

// Clearing alerts
const alertBanner = document.getElementById('alert-banner'); // retrieve banner
const alertClearButton = document.getElementById('alert-clear-button'); // retrieve clear button

alertClearButton.addEventListener('click', () => { // listen for clicks of clear button
    alertBanner.style.display = 'none'; // hide alert banner
})

// Notifications
const bell = document.getElementById('bell');
const bellCircle = document.getElementById('bell-circle');
const notifsBox = document.getElementById('notifs-box');
const notifsBoxArray = Array.from(notifsBox.childNodes);
const notifs = Array.from(document.getElementsByClassName('notif'))

bell.addEventListener('click', () => {
    bellCircle.style.display = 'none';
    notifsBox.style.display = 'grid';
})

notifsBox.addEventListener('click', (e) => {
    if (e.target.className === 'notif-clear-all fas fa-times') {
        notifsBox.style.display = 'none';
    }
    if (e.target.className === 'notif-clear fas fa-times') {
        const notif = e.target.parentNode.parentNode;
        notif.style.display = 'none';
    }
})

// SIDEBAR
const nav = document.getElementById('navigation'); // retrieve navigation
let navLinks = nav.getElementsByClassName('nav-link'); // retrieve navigation links

nav.addEventListener('click', (e) => { // listen for clicks in navigation bar
    for (i = 0; i < navLinks.length; i += 1) { // go through navLinks,
        navLinks[i].classList.remove('active'); // and remove all .active classes
    }
    if (e.target.className !== 'active') { // if link does not already have .active,
        e.target.classList.add('active'); // add .active
    }
})


// USER MESSAGES

// alerts
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

// searching for user - autocomplete
const users = ['Andy','Bill','Carrie','Dale','Dawn','Dan','Earnest','Fred','Gregory','Holly','Inigo','Jenny','Kenny','Libby','Mindy','Nikki','Onobe','Penny','Quinn','Randall','Sandy','Tom','Umbrasil','Victoria','Wendy','Xavier','Yvette','Zander'];
const input = document.getElementById('message-user');
let inputVal = '';

function autocomplete(val) {
    let usersReturn = [];
    for (i = 0; i < users.length; i += 1) {
        if (val.toLowerCase() === users[i].toLowerCase().slice(0, val.length)) {
            usersReturn.push(users[i]);
        }
    }
    return usersReturn;
}

input.addEventListener('keyup', (e) => {
    const key = e.key.toString();
    const autocompleteResults = document.getElementById('autocomplete-results');
    let usersToShow = [];
    if (key !== 'Backspace') {
        inputVal += key;
    } else if (key === 'Backspace') {
        inputVal = inputVal.slice(0, -1);
    }
    if (inputVal.length > 0) {
        autocompleteResults.innerHTML = '';
        usersToShow = autocomplete(inputVal);
        for (i = 0; i < usersToShow.length; i++) {
            autocompleteResults.innerHTML += '<li>' + usersToShow[i] + '</li>';
        }
        autocompleteResults.style.position = 'absolute';
        autocompleteResults.style.display = 'block';
    } else {
        usersToShow = [];
        autocompleteResults.innerHTML = '';
    }
})


// LOCAL STORAGE
const emailSwitch = document.getElementById("switch-1");
const publicSwitch = document.getElementById("switch-2");
const timezone = document.getElementById("timezone");
const submit = document.getElementById("settings-submit");
const reset = document.getElementById("settings-cancel");

function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }
}

function saveSettings() {
    localStorage.setItem('emailSwitch', emailSwitch.checked);
    localStorage.setItem('publicSwitch', publicSwitch.checked);
    localStorage.setItem('timezone', timezone[timezone.selectedIndex].value);
  }
  
  function loadSettings() {
    let email = JSON.parse(localStorage.getItem('emailSwitch'));
    emailSwitch.checked = email;
    let public = JSON.parse(localStorage.getItem('publicSwitch'));
    publicSwitch.checked = public;
    let selectedTimezone = localStorage.getItem('timezone');
    timezone.value = selectedTimezone;
  }
  
  function resetSettings() {
    // location.reload();
    localStorage.clear();
    localStorage.setItem('timezone', timezone.value = "Your timezone");
  }
  
  submit.addEventListener('click', (e) => {
    if(e.target.type === "submit") {
        saveSettings();
        e.preventDefault();
    }
  });
  
  reset.addEventListener('click', (e) => {
    if(e.target.type === "reset") {
        resetSettings();
    }
  });
  
  
  window.onload = function() {
      if (supportsLocalStorage) {
        loadSettings();
      }
  };