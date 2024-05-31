import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import ReadList from "../ReadList/ReadList";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [sortBy, setSortBy] = useState(null); // State to track the selected sorting option

    const switchTabs = (index) => {
        setCurrentTab(index);
    };

    // Function to handle sorting based on the selected option
    const handleSortBy = (option) => {
        setSortBy(option);
    };

    return (
        <div className=" my-5 mb-10">
            <Helmet>
                <title>Book Vibe | Listed Books</title>
            </Helmet>
            <h1 className="text-xl md:text-3xl font-bold mb-4 bg-[#F3F3F3] rounded-xl p-1 md:p-6 text-center">Books</h1>

            {/* Dropdown */}
            <div className="flex justify-center my-7">
                <details className="dropdown">
                    <summary className="hover:bg-[#23BE0A] border-none outline-none m-1 btn bg-[#23BE0A] text-white w-full mx-10">Sort by <FaAngleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#F3F3F3] rounded-box -right-10 w-full">
                        <li><button onClick={() => handleSortBy('rating')}>Rating</button></li>
                        <li><button onClick={() => handleSortBy('pages')}>Number of pages</button></li>
                        <li><button onClick={() => handleSortBy('year')}>Published year</button></li>
                    </ul>
                </details>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <Link
                    to="/listed"
                    role="tab"
                    className={`tab ${currentTab === 0 ? 'tab-active' : ''}`}
                    onClick={() => switchTabs(0)}
                >
                    <h1 className="text-[15px] md:text-2xl ">Read Books</h1>
                </Link>
                <Link
                    to={`whitelist-books`}
                    role="tab"
                    className={`tab ${currentTab === 1 ? 'tab-active' : ''}`}
                    onClick={() => switchTabs(1)}
                >
                    <h1 className="text-[15px] md:text-2xl">Wishlist Books</h1>
                </Link>
                <a role="tab" className="tab"></a>
            </div>

            <div className="tab-content">
                {currentTab === 0 && (
                    <ReadList sortBy={sortBy} />
                )}
                {currentTab === 1 && (
                    <div>
                        Content for Whitelist Books
                    </div>
                )}
            </div>
            <Outlet />
        </div>
    );
};

export default ListedBooks;
