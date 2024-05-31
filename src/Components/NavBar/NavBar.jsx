import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {


    return (
        <>
            <div className="navbar bg-base-100 flex flex-col md:flex-row">
                <div className="navbar-start flex justify-between md:justify-start 32 w-full md:w-2/3 lg:w-[24%]">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        <nav tabIndex={0} className="flex gap-5 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className='p-1' to='/'>Home</NavLink>
                            <NavLink className='p-1' to='/listed'>Listed Books</NavLink>
                            <NavLink className='p-1' to='/to-read'>Pages to Read</NavLink>
                            <NavLink className='p-1' to='/contact'>Contact</NavLink>
                            <NavLink className='p-1' to='/about-us'>About Us</NavLink>
                        </nav>

                    </div>
                    <a className="font-bold text-2xl md:text-3xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex justify-center lg:w-[61%]  ">
                    <nav className="flex gap-5">
                        <NavLink className='p-1' to='/'>Home</NavLink>
                        <NavLink className='p-1' to='/listed'>Listed Books</NavLink>
                        <NavLink className='p-1' to='/to-read'>Pages to Read</NavLink>
                        <NavLink className='p-1' to='/contact'>Contact</NavLink>
                        <NavLink className='p-1' to='/about-us'>About Us</NavLink>
                    </nav>
                </div>
                <div className="navbar-end md:flex gap-3 justify-center md:justify-end  lg:w-[25%] hidden">
                    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>



        </>
    );
};

export default NavBar;