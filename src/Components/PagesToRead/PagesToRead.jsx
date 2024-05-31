import { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';


// Define the custom shape component
const CustomShape = (props) => {
    const { fill, x, y, width, height } = props;

    // Define the custom shape path
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };

    // Render the custom shape
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    // State to store the list of books from the readList in local storage
    const [bookList, setBookList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    // Load book list from the readList in local storage on component mount
    useEffect(() => {
        // Retrieve stored book list from the readList in local storage
        const storedReadList = JSON.parse(localStorage.getItem('readList')) || [];
        const storedBookList = storedReadList.map(bookId => JSON.parse(localStorage.getItem(bookId)));

        // Set the book list state with the retrieved data
        setBookList(storedBookList);

        // Calculate total pages to read
        const total = storedBookList.reduce((acc, book) => acc + book.totalPages, 0);
        setTotalPages(total);
    }, []);
    const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return (

        <div className='w-[100%] h-[400px] md:h-[500px] lg:h-[600px] flex flex-col items-center my-10 bg-[#F8F8F8] rounded-2xl'>
            <Helmet>
                <title>Book Vibe | Pages to resd</title>
            </Helmet>

            <p className='text-2xl font-bold text-center my-5'>Total Pages to Read: {totalPages}</p>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={bookList}
                    margin={{ top: 20, right: 30, left: 20, bottom: 50 }} // Increase bottom margin for XAxis labels
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" angle={-45} textAnchor="end" interval={0} height={70} /> {/* Rotate and position XAxis labels */}
                    <YAxis />
                    <Bar dataKey="totalPages" fill={getRandomColor()} shape={<CustomShape />} label={{ position: 'top' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


CustomShape.propTypes = {
    fill: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired, // Add width validation
    height: PropTypes.number.isRequired,
};
export default PagesToRead;
