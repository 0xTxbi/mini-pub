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

	displaySuccessAlert(msg, clsName) {

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

		}, 10500);


	}

	clearSuccessAlert() {

		const currentAlert = document.querySelector('.alert');

		// Check if an alert is currently displaying
		if (currentAlert) {
			
			currentAlert.remove();

		}

	}

	clearInputFields() {

		this.titleInput.value = '';
		this.bodyInput.value = '';

	}

}

export const ui = new UI();