
const bookStore = {
	data: [
		{
			title: 'The Time Machine',
			author: 'Herbert Wells'
		},
		{
			title: 'Hamlet',
			author: 'William Shakesper'
		}
	],

	markMatchedBooks: function(term) {
		this.data.forEach((book) => {
			if (term.length === 0) {
				book.marked = false;
				return;
			}

			if (book.title.indexOf(term) > -1) {
				book.marked = true;
			} else {
				book.marked = false;
			}
		});
	}
}