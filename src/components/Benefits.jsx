import {
  FaTruck,
  FaShieldAlt,
  FaUsers,
  FaMapMarkedAlt,
  FaGlobe,
  FaSearch,
} from "react-icons/fa";
import { useLocation } from "react-router";

import Button from "./Button";
import TruckImg1 from "../assets/truck-3.jpeg";
import LinkToTop from "./LinkToTop";

export default function Benefits() {
  const location = useLocation();
  return (
    <div className="shadow-lg flex flex-col md:flex-row items-center justify-around p-10 space-y-6 md:space-y-0 md:space-x-10 mt-10 pb-20">
      <div className="max-w-lg space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900">
          Experts in Logistics Since 2012
        </h2>
        <p className="text-gray-700">
          With years of experience, cutting-edge technology, and a dedicated
          team, we ensure your freight moves seamlessly across the nation.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900">Our Benefits</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center justify-center md:justify-start">
            <FaGlobe className="mr-3 text-gray-900" /> Nationwide Coverage
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <FaShieldAlt className="mr-3 text-gray-900" /> $1M Liability
            Insurance
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <FaTruck className="mr-3 text-gray-900" /> $250K Cargo Insurance
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <FaUsers className="mr-3 text-gray-900" /> Solo & Team Drivers
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <FaMapMarkedAlt className="mr-3 text-gray-900" /> TWIC Certified
            Drivers
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <FaSearch className="mr-3 text-gray-900" /> Real-Time GPS Tracking
          </li>
        </ul>

        <div className="flex md:flex-row items-center justify-center md:justify-start space-x-4">
          {location.pathname !== "/about" && (
            <LinkToTop to={"/about"}>
              <Button>About Us</Button>
            </LinkToTop>
          )}
          <LinkToTop to={"/services"}>
            <Button type="secondary">Explore Services</Button>
          </LinkToTop>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img
          src={TruckImg1}
          alt="Truck on the road"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
