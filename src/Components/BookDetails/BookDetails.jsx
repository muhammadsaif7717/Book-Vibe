import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const selectedBook = books.find(book => book.bookId === parseInt(bookId));

    // State for the read list
    const [readList, setReadList] = useState([]);
    // State for the wishlist
    const [wishlist, setWishlist] = useState([]);

    // Load read list and wishlist from local storage on component mount
    useEffect(() => {
        const storedReadList = JSON.parse(localStorage.getItem('readList')) || [];
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setReadList(storedReadList);
        setWishlist(storedWishlist);
    }, []);

    const handleReadButtonClick = () => {
        if (!readList.includes(selectedBook?.bookId)) {
            setReadList([...readList, selectedBook.bookId]);
            toast.success("Book added to Read list!");
            localStorage.setItem('readList', JSON.stringify([...readList, selectedBook.bookId]));

            // Store book details in local storage
            localStorage.setItem(selectedBook.bookId, JSON.stringify(selectedBook));
        } else {
            toast.warning("Book already added to Read list!");
        }
    };

    const handleWhitelistButtonClick = () => {
        if (!wishlist.includes(selectedBook?.bookId)) {
            if (readList.includes(selectedBook?.bookId)) {
                toast.error("Book already added to Read list, can't be added to Wishlist!");
            } else {
                setWishlist([...wishlist, selectedBook.bookId]);
                toast.success("Book added to Wishlist!");
                localStorage.setItem('wishlist', JSON.stringify([...wishlist, selectedBook.bookId]));

                // Save book details to local storage
                localStorage.setItem(selectedBook.bookId, JSON.stringify(selectedBook));
            }
        } else {
            toast.warning("Book already added to Wishlist!");
        }
    };

    return (
        <div className="my-10 flex flex-col md:flex-row gap-5 md:gap-10 justify-between">
            <Helmet>
                <title>Book Vibe | Book Details</title>
            </Helmet>
            <>
                <img className="w-[40%] rounded-2xl" src={selectedBook.image} alt={selectedBook.bookName} />
                <div className="flex-1 space-y-3">
                    <h1 className="font-bold text-4xl">{selectedBook.bookName}</h1>
                    <h1 className="font-bold text-gray-500">By: {selectedBook.author}</h1>
                    <hr />
                    <h1 className="font-bold text-gray-500">{selectedBook.category}</h1>
                    <hr />
                    <h1><span className="font-bold">Review:</span> {selectedBook.review}</h1>
                    <h1>
                        {selectedBook.tags.map((tag, index) => (
                            <li className="list-none inline mr-5" key={index}>{tag}</li>
                        ))}
                    </h1>
                    <hr />
                    <div>
                        <table>
                            <tr>
                                <td className="pr-7">Number of Pages:</td>
                                <td className="font-bold">{selectedBook.totalPages}</td>
                            </tr>
                            <tr>
                                <td className="pr-7">Publisher:</td>
                                <td className="font-bold">{selectedBook.publisher}</td>
                            </tr>
                            <tr>
                                <td className="pr-7">Year of Publishing:</td>
                                <td className="font-bold">{selectedBook.yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="pr-7">Rating:</td>
                                <td className="font-bold">{selectedBook.rating}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="flex gap-5">
                        <button onClick={handleReadButtonClick} className="btn btn-primary text-black border bg-transparent border-gray-400 px-6">Read</button>
                        <button onClick={handleWhitelistButtonClick} className="btn btn-primary bg-[#50B1C9] border-none text-white">Whishlist</button>
                    </div>
                </div>
            </>

            <ToastContainer />
        </div>
    );
};

export default BookDetails;
