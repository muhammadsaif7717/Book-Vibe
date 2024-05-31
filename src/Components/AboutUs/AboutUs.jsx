import { Helmet } from "react-helmet-async";
import { SiWebflow } from "react-icons/si";
import { NavLink } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import { googleAPIKey } from "../../googleAPIKey";
import { FaLocationDot } from "react-icons/fa6";




const AnyReactComponent = ({ text }) => <div className="text-2xl text-red-600"><FaLocationDot /></div>;

const AboutUs = () => {
  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152
    },
    zoom: 14
  };

  return (
    <div>
      <Helmet>
        <title>Book Vibe | About Us</title>
      </Helmet>
      <div className="hero bg-gray-100 mt-12 md:p-2 my-14">
        <div className="hero-content text-center mt-12 mb-12">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold">Hello People!</h1>
            <p className="py-6 w-full">
              Welcome to Book Vibe! Our mission is to ignite a passion for
              reading by offering a carefully curated selection of books for all
              ages and interests. With a commitment to personalized service and
              community engagement, we strive to create a welcoming environment
              where every reader feels at home. Discover the joy of storytelling
              with us.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <b>Located at:</b>  Gulshan, Dhaka <br />
            </p>
            <p className="flex gap-1 items-center justify-center mx-auto mb-6">
              <NavLink to='/'>
                <button className="btn btn-ghost hover:bg-green-600 hover:text-white">
                  <SiWebflow /> www.bookvibe.com
                </button>
              </NavLink>
            </p>
            <NavLink to='/'>
              <button className="btn bg-green-400 hover:bg-green-600 text-white border-none">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* map */}
      <div style={{ height: '100vh', width: '100%' }} className="mb-14">
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.lat}
            lng={defaultProps.lng}
            text="Book Vibe"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default AboutUs;
