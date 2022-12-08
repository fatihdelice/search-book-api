import React from 'react'
import { useSelector } from "react-redux";

export default function Main() {
    const openInNewTab = (url) => {
        // 👇️ setting target to _blank with window.open
        window.open(url, "_blank", "noopener,noreferrer");
    };
    const booksArr = useSelector((state) => state.BooksReducer.books);
    return (
        <section className="min-h-screen grid grid-cols-3 gap-5 mt-12 items-start">
            {booksArr && booksArr.length > 0 ? (
                booksArr.map((book) => {
                    return (
                        book.volumeInfo.imageLinks &&
                        book.volumeInfo.authors && (
                            <div
                                className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-4 pt-4 pb-6 text-center"
                                key={book.id}
                            >
                                <img
                                    className="mb-3 w-32 h-48 shadow-lg mx-auto"
                                    alt="ımagesLive"
                                    src={book.volumeInfo.imageLinks.smallThumbnail}
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{book.volumeInfo.title}</h5>
                                <h6 className="text-sm text-gray-500 dark:text-gray-400">
                                    {book.volumeInfo.authors[0]}
                                </h6>
                                <br />
                                <button
                                    onClick={() => openInNewTab(book.volumeInfo.previewLink)}
                                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 cursor-pointer"
                                >
                                    Preview
                                </button>
                            </div>
                        )
                    );
                })
            ) : (
                <div className="w-full text-center">
                    <div>Search for a book</div>
                </div>
            )}
        </section>
    )
}
