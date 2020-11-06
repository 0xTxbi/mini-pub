// Display current date in the footer section

// Obtain intended display area
const currDateSel = document.querySelector('.current-date');

// Get the current year
const currDate = new Date().getFullYear();

// Display in the selcted display area
currDateSel.innerHTML = currDate.toString();