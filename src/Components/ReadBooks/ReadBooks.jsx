import PropTypes from 'prop-types';

const ReadBooks = ({ bookData }) => {
    const { bookName } = bookData;
    return (
        <div>
            <h1>{bookName}</h1>
        </div>
    );
};

ReadBooks.propTypes = {
    bookData: PropTypes.shape({
        bookName: PropTypes.string.isRequired,
    }).isRequired,
};

export default ReadBooks;
