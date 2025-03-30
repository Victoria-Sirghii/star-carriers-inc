import {
  FaDollarSign,
  FaCheckCircle,
  FaTruck,
  FaCalendarCheck,
  FaRegHandshake,
  FaShieldAlt,
  FaClipboardList,
} from "react-icons/fa";
import Button from "../components/Button";
import LinkToTop from "../components/LinkToTop";
import Career1 from "../assets/career-2.jpg";

function Careers() {
  return (
    <>
      <div className="bg-blue-50 flex flex-col items-center justify-center text-center p-20 shadow-lg">
        <h1 className="text-4xl font-bold">
          Take the Next Step in Your Career
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-6 sm:p-10 shadow-lg w-full mt-10 mb-10 ">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Attention Drivers and Owner Operators: Join Our Team!
        </h1>
        <p className="text-base sm:text-lg max-w-full sm:max-w-2xl mb-4">
          Take the wheel of your future with Star Carriers INC and join our
          fast-growing team of transportation professionals. We have a variety
          of open positions and are always seeking top-tier talent.
        </p>
        <p className="text-base sm:text-lg max-w-full sm:max-w-2xl mb-4">
          At Star Carriers INC, you’ll get the miles you want, with freight
          moving around the clock, 365 days a year, to and from any location
          across the 48 contiguous states.
        </p>
        <p className="text-base sm:text-lg max-w-full sm:max-w-2xl">
          We pride ourselves on building the most qualified teams for every
          transportation service. With a fleet of nearly 10, Star Carriers INC
          is committed to helping you achieve success on your own terms.
        </p>
      </div>
      <div className="shadow-lg flex flex-col md:flex-row items-center justify-around p-10 space-y-6 md:space-y-0 md:space-x-10 mt-10 pb-20">
        <div className="max-w-lg space-y-6 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose Star Carriers INC?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaDollarSign className="text-gray-900" />
              <span className="text-lg">Competitive Pay Rates</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="text-gray-900" />
              <span className="text-lg">
                Weekly Pay & Performance Bonuses for Top Drivers
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaRegHandshake className="text-gray-900" />
              <span className="text-lg">Driver Onboarding and Support</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCalendarCheck className="text-gray-900" />
              <span className="text-lg">
                Flexible Scheduling with Reliable Equipment
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaShieldAlt className="text-gray-900" />
              <span className="text-lg">
                Comprehensive Health & Safety Policies
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaTruck className="text-gray-900" />
              <span className="text-lg">Option to Take the Truck Home</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaTruck className="text-gray-900" />
              <span className="text-lg">Brand New Trucks</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCalendarCheck className="text-gray-900" />
              <span className="text-lg">
                1 Week Break After 3 Weeks on the Road
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaClipboardList className="text-gray-900" />
              <span className="text-lg">
                $100 for Clean Roadside Inspections
              </span>
            </li>
          </ul>

          <div className="flex md:flex-row items-center justify-center md:justify-start space-x-4">
            <LinkToTop to={"/contact"}>
              <Button>Apply now</Button>
            </LinkToTop>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={Career1}
            alt="Truck on the road"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-15">
        <h1 className="text-4xl font-semibold text-center mb-6">
          Driver Qualifications
        </h1>
        <ul className="list-disc space-y-4 pl-0 flex flex-col items-center justify-center">
          <li className="text-lg">You must be at least 23 years old</li>
          <li className="text-lg">A valid Class A CDL is required</li>
          <li className="text-lg">Minimum of one year of driving experience</li>
          <li className="text-lg">
            No more than three moving violations in the last 3 years
          </li>
          <li className="text-lg">
            No speeding tickets within the past 3 years
          </li>
          <li className="text-lg">
            No DUI, reckless driving, or unsafe driving offenses
          </li>
          <li className="text-lg">
            Ability to pass a road test, drug test, and DOT physical is required
          </li>
          <li className="text-lg">
            All applicants must consent to a background check
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center mt-8 bg-blue-50 w-full">
        <div className="flex flex-col items-center justify-around w-full bg-blue-50 rounded-lg text-center pt-10 pb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Got more questions?
          </h2>
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            We’re here and excited to assist you!
          </h2>
          <LinkToTop to="/contact">
            <Button>Contact Us</Button>
          </LinkToTop>
        </div>
      </div>
    </>
  );
}

export default Careers;
