import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center gap-5 p-5 md:justify-around items-center bg-[#F3F3F3] md:h-[400px] rounded-xl my-5'>
            <div className="space-y-5 text-center md:text-left">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <div className="mt-5">
                    <Link to='/listed'> 
                    <button className="bg-[#23BE0A] border-none text-white btn btn-primary">View The List</button>
                    </Link>
                    </div>
            </div>
            <div>
                <img src='https://i.postimg.cc/rFSKP7kd/pngegg.png'
                 alt="Cover Book" className="w-48 md:w-56"/>
            </div>
        </div>
    );
};

export default Banner;