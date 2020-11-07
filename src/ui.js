class UI {

	constructor() {

		this.post = document.querySelector('#posts');
		this.titleInput = document.querySelector('#title');
		this.bodyInput = document.querySelector('#body');
		this.idInput = document.querySelector('#id');
		this.submitPost = document.querySelector('.post-submit');
		this.formState = 'add';

	}

	// Display posts
	displayPosts(posts) {

		let output = '';

		posts.forEach(post => {

			output += `
			
			<div class="card mb-3">
			
			<div class="card-body">
			
			<h4 class="card-title">${post.title}</h4>

			<p class="card-text">${post.body}</p>

			<a href="#" class="edit card-link" data-id="${post.id}">
			<i class="fa fa-pencil"></i>
			</a>

			<a href="#" class="delete card-link" data-id="${post.id}">
			<i class="fa fa-remove"></i>
			</a>

			</div>

			</div>

			`;

		});

		this.post.innerHTML = output;

	}

	// Display success alert on post addition or deletion
	displayAlert(msg, clsName) {

		this.clearSuccessAlert();

		// Create a div
		const div = document.createElement('div');
		// Add class
		div.className = clsName;
		// Add text
		div.appendChild(document.createTextNode(msg));

		// Insert into the DOM
		// Get parent
		const container = document.querySelector('.post-container');
		// Get posts
		const posts = document.querySelector('#posts');

		// Insert the div
		container.insertBefore(div, posts);

		// Timeout
		setTimeout(() => {

			this.clearSuccessAlert();

		}, 2500);


	}

	// Clear success alert if a new one is to appear
	clearSuccessAlert() {

		const currentAlert = document.querySelector('.alert');

		// Check if an alert is currently displaying
		if (currentAlert) {

			currentAlert.remove();

		}

	}

	// Clear form input fields
	clearInputFields() {

		this.titleInput.value = '';
		this.bodyInput.value = '';

	}

	// Populate form to edit
	fillForm(data) {

		this.titleInput.value = data.title;
		this.bodyInput.value = data.body;
		this.idInput.value = data.id;

		this.alterFormState('edit');

	}

	// Clear ID input
	clearIdInput() {

		this.idInput.value = '';

	}

	// Alter form state
	alterFormState(type) {

		if (type === 'edit') {

			this.submitPost.textContent = 'Update post';
			this.submitPost.className = 'post-submit btn btn-warning btn-block';

			// Create cancel button
			const button = document.createElement('button');
			button.className = 'cancel-edit btn btn-light btn-block';
			button.appendChild(document.createTextNode('Cancel'));


			// Insert into DOM
			// Obtain parent
			const cardForm = document.querySelector('.card-form');
			// Select element to insert before
			const formEnd = document.querySelector('.form-end');
			// Insert cancel button
			cardForm.insertBefore(button, formEnd);

		} else {

			this.submitPost.textContent = 'Publish';
			this.submitPost.className = 'post-submit btn btn-primary btn-block';

			// Remove cancel button if present
			if (document.querySelector('.cancel-edit')) {

				document.querySelector('.cancel-edit').remove();

			}

			// Clear ID from input field
			this.clearIdInput();

			// Clear input fields
			this.clearInputFields();

		}

	}

}

export const ui = new UI();