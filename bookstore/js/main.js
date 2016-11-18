
function renderBooks(books) {
	const el = document.querySelector('#book-list');
	el.innerHTML = '';
	books.forEach(addBook.bind(null, el));
}

function addBook(parent, book) {
	
	const li = document.createElement('li');
	li.innerHTML = book.title;

	if (book.marked) {
		li.classList.add('marked');
	}

	parent.appendChild(li);
}

function onSearch(e) {
	e.preventDefault();
	const searchTerm = document
						.querySelector('#search-field')
						.value;
	bookStore.markMatchedBooks(searchTerm);
	renderBooks(bookStore.data);
}

function attachSearchListener() {
	const form = document.querySelector('#search-form');
	form.addEventListener('submit', onSearch, false)
}

(function() {
	renderBooks(bookStore.data);
	attachSearchListener();	
})();