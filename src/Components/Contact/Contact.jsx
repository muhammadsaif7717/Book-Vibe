import { Helmet } from "react-helmet-async";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className="bg-gray-100 my-10 p-1 md:p-14 h-auto lg:min-h-screen flex flex-col justify-center items-center">
            <Helmet>
                <title>Book Vibe | Contact</title>
            </Helmet>
            <div className="max-w-md  w-full bg-white shadow-xl rounded-lg p-8 hover:scale-105">
                <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
                <form className="space-y-4 ">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-bold">Your Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 outline-none border-gray-300 shadow-sm  bg-[#B5C0D0] p-4 placeholder:text-white" placeholder="Alex Smith"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-bold">Email Address</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 outline-none p-4 bg-blue-200 placeholder:text-gray-500" placeholder="user@abc.xyz"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
                        <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 border-2 outline-none p-4" placeholder="Your message here....."></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-[#5E63B6] text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300">Send Message</button>
                    </div>
                </form>
                <div className="flex gap-3 justify-center mt-5">
                <FaFacebook className="text-3xl text-[#0866FF]"/>
                <FaInstagramSquare className="text-3xl text-[#B24689]"/>
                <FaSquareTwitter className="text-3xl text-[#24A3F1]"/>
                <FaLinkedin className="text-3xl text-[#126BC4]"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
