import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoPeopleOutline } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { Link } from 'react-router-dom';

const WhiteList = () => {
    // State to store the list of books from the wishlist in local storage
    const [bookList, setBookList] = useState([]);

    // Load book list from the wishlist in local storage on component mount
    useEffect(() => {
        // Retrieve stored book list from the wishlist in local storage
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const storedBookList = storedWishlist.map(bookId => JSON.parse(localStorage.getItem(bookId)));

        // Set the book list state with the retrieved data
        setBookList(storedBookList);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Book Vibe | Wishlist</title>
            </Helmet>
            {/* Display the list of books */}
            <div className="listed-books">
                {bookList.length > 0 ? (
                    bookList.map(book => (
                        <div key={book.bookId} className='border flex flex-col lg:flex-row my-10 gap-5 p-10 rounded-xl items-center'>
                            <img src={book.image} className='w-[50%] md:w-[30%] lg:md:w-[26%] rounded-xl mx-auto lg:mx-0' />
                            <div className='space-y-2'>
                                <h1 className='text-xl md:text-3xl font-bold'>{book.bookName}</h1>
                                <h1 className='text-lg'>By: {book.author}</h1>
                                <div className='mt-2 flex flex-col md:flex-row md:items-center'>
                                    <div className='flex items-center'>
                                        <h1 className='font-bold'>Tags:</h1>
                                        {
                                            book.tags.map((tag, index) =>
                                                <button key={index} className='bg-[#F4FCF3] text-[#57CD45] px-3 py-1 rounded-full mr-2'>{tag}</button>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <h1>Year of Publishing: {book.yearOfPublishing}</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row justify-between'>
                                    <div className='flex items-center'>
                                        <IoPeopleOutline />
                                        <h1 className='ml-2 text-lg'>Publisher: {book.publisher}</h1>
                                    </div>
                                    <div className='flex items-center'>
                                        <LuFiles />
                                        <h1 className='ml-2 text-lg mr-2'>Page: {book.totalPages}</h1>
                                    </div>
                                </div>
                                <hr className='border-dashed border-gray-300' />
                                <div className='flex flex-col md:flex-row gap-5'>
                                    <button className="btn border-none rounded-full text-[#328EFF] bg-[#E0EEFF] btn-primary">Category: {book.category}</button>
                                    <button className="btn border-none rounded-full text-[#FFAC33] bg-[#FFF3E0]  btn-primary">Rating: {book.rating}</button>
                                    <button className="btn border-none rounded-full text-white bg-[#23BE0A]  btn-primary">
                                        <Link to={`/details/${book.bookId}`}>View Details</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='mt-5 p-5 text-xl text-red-500 font-bold'>No book is selected in the read list.</p>
                )}
            </div>
        </div>
    );
};

export default WhiteList;
