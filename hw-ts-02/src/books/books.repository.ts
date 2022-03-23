import { IBooksRepository } from './books.repository.interface';
import { IBook } from './book.interface';

const db: Array<IBook> = [];

export class BooksRepository implements IBooksRepository {
	static async createBook(book: IBook): Promise<IBook> {
		try {
			db.push(book);
		} catch (e) {
			console.log(e);
		}
		return book;
	}
	static async getBook(id: number): Promise<IBook | null> {
		try {
			const idx: number = db.findIndex((book) => book.id === id);
			const book = await db[idx];
			return book;
		} catch (e) {
			console.log(e);
		}
	}

	static async getBooks() {
		try {
			return await [...db];
		} catch (e) {
			console.log(e);
		}
	}

	async updateBook(id: number) {
		const fakeReqData = { title: 'test' };
		try {
			const idx: number = db.findIndex((book) => book.id === id);
			if (idx !== -1) {
				db[idx] = { ...db[idx], ...fakeReqData };
				return db[idx];
			}
		} catch (e) {
			console.error(e);
			return `Ошибка обновления книги`;
		}
	}

	async deleteBook(id: number) {
		try {
			const idx: number = db.findIndex((book) => book.id === id);
			if (idx !== -1) {
				db.splice(idx, 1);
				return `Книга удалена`;
			}
		} catch (e) {
			console.error(e);
			return `Ошибка удаления книги`;
		}
	}
}
