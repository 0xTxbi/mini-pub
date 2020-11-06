// Import the HTTP library
import { http } from './http';

// Import the UI module
import { ui } from './ui';

// Function to submit post
const submitPost = () => {

	const title = document.querySelector('#title').value;
	const body = document.querySelector('#body').value;

	const data = {

		title,
		body

	};

	http.post('http://localhost:3000/posts', data)
		.then(data => {

			getPosts();

			ui.displaySuccessAlert('Post has been successfully added', 'alert alert-success');
			ui.clearInputFields();

		})
		.catch(err => console.log(err));

};

// Listener event for adding posts
document.querySelector('.post-submit').addEventListener('click', submitPost);


// Function to delete post
const deletePost = (e) => {

	if (e.target.parentElement.classList.contains('delete')) {

		const id = e.target.parentElement.dataset.id;

		if (confirm('Are you sure?')) {

			http.delete(`http://localhost:3000/posts/${id}`)
				.then(data => {

					ui.displaySuccessAlert('Post has been successfully deleted', 'alert alert-warning');

					getPosts();

				})
				.catch(err => console.log(err));

		}

	}

	e.preventDefault();

};


// Listener event to delete selected post
document.querySelector('#posts').addEventListener('click', deletePost);


// Function to obtain posts
const getPosts = () => {

	http.get('http://localhost:3000/posts')
		.then(data => ui.displayPosts(data))
		.catch(err => console.log(err));

};


// Listener event to GET Posts when the DOM loads
document.addEventListener('DOMContentLoaded', getPosts);













// Display current date in the footer section

// Obtain intended display area
const currDateSel = document.querySelector('.current-date');

// Get the current year
const currDate = new Date().getFullYear();

// Display in the selcted display area
currDateSel.textContent = currDate.toString();