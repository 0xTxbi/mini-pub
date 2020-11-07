// Import the HTTP library
import { http } from './http';

// Import the UI module
import { ui } from './ui';

// Function to submit post
const submitPost = () => {

	const title = document.querySelector('#title').value;
	const body = document.querySelector('#body').value;
	const id = document.querySelector('#id').value;

	const data = {

		title,
		body

	};

	// Validate form input
	if (title === '' || body === '') {

		ui.displayAlert('Please fill in all input fields', 'alert alert-danger');

	} else {

		// Check for available ID
		if (id === '') {

			// Create Post
			http.post('http://localhost:3000/posts', data)
				.then(data => {

					getPosts();

					ui.displayAlert('Post has been successfully added', 'alert alert-success');
					ui.clearInputFields();

				})
				.catch(err => console.log(err));

		} else {

			// Update the post
			http.put(`http://localhost:3000/posts/${id}`, data)
				.then(data => {

					ui.displayAlert('Post has been successfully updated', 'alert alert-success');

					ui.alterFormState('add');

					getPosts();

				})
				.catch(err => console.log(err));

		}


	}

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


// Function to change UI when updating a post item
const editState = (e) => {

	if (e.target.parentElement.classList.contains('edit')) {

		const id = e.target.parentElement.dataset.id;

		// Post title text
		const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

		// Post content text
		const body = e.target.parentElement.previousElementSibling.textContent;

		const data = {

			id,
			title,
			body

		};

		// Populate form input values with selected post
		ui.fillForm(data);


	}

	e.preventDefault();

};


// Listener event to edit the UI's state
document.querySelector('#posts').addEventListener('click', editState);


// Function to cancel the post edit state
const cancelEditState = (e) => {

	if (e.target.classList.contains('cancel-edit')) {

		ui.alterFormState('add');

		e.preventDefault();

	}

};

// Listener event for cancel edit state button
document.querySelector('.card-form').addEventListener('click', cancelEditState);

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