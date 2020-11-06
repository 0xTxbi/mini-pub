// Import the HTTP library
import { http } from './http';


// Define function to obtain posts
const getPosts = () => {

	http.get('http://localhost:3000/posts')
	.then(data => console.log(data))
	.catch(err => console.log(err));

};


// GET Posts when DOM loads
document.addEventListener('DOMContentLoaded', getPosts);













// Display current date in the footer section

// Obtain intended display area
const currDateSel = document.querySelector('.current-date');

// Get the current year
const currDate = new Date().getFullYear();

// Display in the selcted display area
currDateSel.textContent = currDate.toString();