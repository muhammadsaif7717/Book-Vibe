import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";

const Book = ({ book }) => {
    const { bookId, bookName, category,tags, author, rating, image } = book;



    return (
        <div className='w-full p-5 border rounded-2xl'>
            <Link to={`/details/${bookId}`}>
                {image && <img src={image} className="rounded-2xl" alt={bookName} />}
                <div className='space-y-2'>
                    <div className='mt-2'>
                        {
                            tags.map((tag,index)=>
                            <button key={index} className='bg-[#F4FCF3] text-[#57CD45] px-3 py-1 rounded-full mr-2'>{tag}</button>
                            )
                        }
                     
                    </div>
                    <h1 className='text-xl font-bold'>{bookName}</h1>
                    <h1 className='text-lg'>By: {author}</h1>
                    <hr className='border-dashed border-gray-300' />
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-lg'>{category}</h1>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-lg mr-2'>{rating}</h1>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        bookName: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        bookId: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default Book;
