import { BooksRepository } from './books/books.repository';

[1, 2, 3, 4, 5].map((id) =>
	BooksRepository.createBook({
		id,
		title: `title ${id}`,
		description: `description ${id}`,
	}),
);

BooksRepository.getBook(2).then((result) => {
	console.log(result);
});

BooksRepository.getBooks().then((result) => {
	console.log(result);
});
