const store = [
	{
		title: 'The Time Machine',
		author: 'Herbert Wells'
	},
	{
		title: 'Hamlet',
		author: 'William Shakesper'
	}
];

function addBook(book) {
	const el = document.querySelector('#book-list');
	const li = document.createElement('li');
	li.innerHTML = book.title;
	el.appendChild(li);
}

function attachSearchListener() {
	const form = document.querySelector('#search-form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const searchTerm = document
					.querySelector('#search-field')
					.value;

		console.log('Searching for ', searchTerm);
	}, false)
}

(function() {
	store.forEach(addBook);
	attachSearchListener();	
})();
