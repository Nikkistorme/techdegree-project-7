
// ALERTS AND NOTIFICATIONS

// Clearing alerts
const alertBanner = document.getElementById('alert-banner'); // retrieve banner
const alertClearButton = document.getElementById('alert-clear-button'); // retrieve clear button

alertClearButton.addEventListener('click', () => { // listen for clicks of clear button
    alertBanner.style.display = 'none'; // hide alert banner
})

// Notifications
const bell = document.getElementById('bell'); // retrieve bell icon
const bellCircle = document.getElementById('bell-circle'); // retrieve notification dot
const notifsBox = document.getElementById('notifs-box'); // retrieve box of notifications

bell.addEventListener('click', () => { // listen for clicks of bell icon
    bellCircle.style.display = 'none'; // hide notification dot
    notifsBox.style.display = 'grid'; // show notification box
})

notifsBox.addEventListener('click', (e) => { // listen for clicks of notification box
    if (e.target.className === 'notif-clear-all fas fa-times') { // if final 'x' button is clicked,
        notifsBox.style.display = 'none'; // hide notification box
    }
    if (e.target.className === 'notif-clear fas fa-times') { // if other 'x' buttons are clicked,
        const notif = e.target.parentNode.parentNode; // retrieve box of notifications
        notif.style.display = 'none'; // hide it
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
    if (messageUser.value === '') { // if user search box is empty,
        e.preventDefault(); // do not submit form
        alert('You must designate a User!'); // alert user they must designate a recipient
    } else if (messageContent.value === '') { // if message box is empty,
        e.preventDefault(); // do not submit form
        alert('You must designate a message!'); // alert user they must write a message
    } else { // if both boxes are filled,
        alert('Your message to ' + messageUser.value + ' was sent!'); // submit form and tell the user it is done!
    }
})

// searching for user - autocomplete
const users = ['Andy','Bill','Carrie','Dale','Dawn','Dan','Earnest','Fred','Gregory','Holly','Inigo','Jenny','Kenny','Libby','Mindy','Nikki','Onobe','Penny','Quinn','Randall','Sandy','Tom','Umbrasil','Victoria','Wendy','Xavier','Yvette','Zander']; // array of users
const input = document.getElementById('message-user'); // retrieve user search box
let inputVal = ''; // variable to hold what is typed in user search box

function autocomplete(val) { // function to return what users to display
    let usersReturn = []; // array of users to display
    for (i = 0; i < users.length; i += 1) { // iterate through array of users
        if (val.toLowerCase() === users[i].toLowerCase().slice(0, val.length)) { // if val is at the beginning of the name,
            usersReturn.push(users[i]); // add the name to usersReturn
        }
    }
    return usersReturn; // return list of names to display
}

input.addEventListener('keyup', (e) => { // listen for keyups in user search box
    const key = e.key.toString(); // string of key that is pressed
    const autocompleteResults = document.getElementById('autocomplete-results'); // retrieve ul of autocomplete results
    let usersToShow = []; // array of users to display
    if (key !== 'Backspace') { // if the pressed key is NOT a backspace,
        inputVal += key; // add the key to the variable holding what is typed in the user box
    } else if (key === 'Backspace') { // if the pressed key IS a backspace,
        inputVal = inputVal.slice(0, -1); // remove the last item from the string of what is typed in the user box
    }
    if (inputVal.length > 0) { // if the length of the string of what is in the input box is greater than 0,
        autocompleteResults.innerHTML = ''; // clear autocompleteResults ul
        usersToShow = autocomplete(inputVal); // display names that match letters in input box
        for (i = 0; i < usersToShow.length; i++) { // iterate through array of users to show
            autocompleteResults.innerHTML += '<li>' + usersToShow[i] + '</li>'; // add each user as li element in autocompleteResults ul
        }
        autocompleteResults.style.position = 'absolute'; // give autocompleteResults ul absolute position
        autocompleteResults.style.display = 'block'; // give autocompleteResults ul block display to unhide it
    } else {
        usersToShow = []; // if the length of the string of what is in the input box is 0,
        autocompleteResults.innerHTML = ''; // clear autocompleteResults ul so nothing is displayed
    }
})


// LOCAL STORAGE
const emailSwitch = document.getElementById("switch-1"); // retrieve email switch
const publicSwitch = document.getElementById("switch-2"); // retrieve public switch
const timezone = document.getElementById("timezone"); // retrieve timezone select element
const submit = document.getElementById("settings-submit"); // retrieve settings submit button
const reset = document.getElementById("settings-cancel"); // retrieve settings cancel button

function supportsLocalStorage() { // create function to check if local storage is supported
    try { // try if local storage is supported
        return 'localStorage' in window && window['localStorage'] !== null; // true if local storage is supported
    } catch(e) { // if not,
        return false; // return false
    }
}

function saveSettings() { // function to save settings to local storage
    localStorage.setItem('emailSwitch', emailSwitch.checked); // save state of email switch to local storage
    localStorage.setItem('publicSwitch', publicSwitch.checked); // same with public switch
    localStorage.setItem('timezone', timezone.selectedIndex); // same with timezone select
    location.reload(); // reload page
  }
  
  function resetSettings() { // function to reset settings to default
    localStorage.clear(); // clear local storage
    localStorage.setItem('timezone', timezone.selectedIndex = "Your timezone"); // set timezone to default setting
    location.reload(); // reload page
  }

  function loadSettings() { // function to load previously set settings
    let emailSave = JSON.parse(localStorage.getItem('emailSwitch')); // set var to hold the local storage area for email switch
    emailSwitch.checked = emailSave; // state of email switch is retrieved from local storage
    let publicSave = JSON.parse(localStorage.getItem('publicSwitch')); // set var to hold local storage area for public switch
    publicSwitch.checked = publicSave; // state of public switch is retrieved from local storage
    let selectedTimezone = localStorage.getItem('timezone'); // set var to hold local storage area for timezone selected
    timezone.selectedIndex = selectedTimezone; // selected timezone is retrieved from local storage
  }
  
  submit.addEventListener('click', (e) => { // listen for clicks on submit button
    if(e.target.type === "submit") { // if the target is the submit button,
        saveSettings(); // save settings to local storage
        e.preventDefault(); // prevent submission of form (because it is fake)
    }
  });
  
  reset.addEventListener('click', (e) => { // listen for clicks on reset button
    if(e.target.type === "reset") { // if target is reset button,
        resetSettings(); // reset settings to defaults
    }
  });
  
  
  window.onload = function() { // when the page is loaded,
      if (supportsLocalStorage) { // if local storage is supported,
        loadSettings(); // load previously saved settings
      }
  };