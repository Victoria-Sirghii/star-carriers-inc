import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import LinkToTop from "./LinkToTop";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-blue-50 py-10 mt-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between md:items-start mx-auto px-6 gap-10">
        <div className="w-1/1 lg:w-1/3">
          <LinkToTop to={"/"}>LOGO</LinkToTop>
          <p className="mt-2  text-blue-50">
            At Star Carriers INC, we drive the American economy forward by
            delivering freight across the nation. Our commitment to safety,
            reliability, and efficiency ensures your cargo reaches its
            destination without compromise. We go the extra mile—because that’s
            what trucking should be.
          </p>
          <p className="text-blue-50 text-sm mt-4">
            Copyright © {currentYear} Star Carriers INC INC. All Rights
            Reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 lg:gap-10 w-full lg:w-auto md:justify-around xs:justify-start lg:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <p className="mt-4 text-blue-50">
              Monday – Friday: <br /> 07:00am – 05:00pm
            </p>
            <p className="mt-4 text-blue-50">
              Saturday: <br /> 08:00am – 02:00pm
            </p>
            <p className="mt-4 text-blue-50">
              Sunday: <br /> Closed
            </p>
          </div>

          <div className="ml-10 mr-10 max-sm:ml-0 max-sm:mr-0">
            <h3 className="text-lg font-semibold">Contact Details</h3>
            <p className="mt-4 flex items-center  text-blue-50">
              <FaPhone className="mr-2" /> 7378817827
            </p>
            <p className="mt-4 flex items-center  text-blue-50">
              <FaEnvelope className="mr-2" /> radu@gmail.com
            </p>
            <p className="mt-4 flex items-center  text-blue-50">
              <FaMapMarkerAlt className="mr-2" />
              1251 N Plum Grove Rd <br />
              Unit 130-N <br />
              Schaumburg, IL 60173
            </p>

            <h3 className="mt-4 text-lg font-semibold flex items-center gap-2">
              We on social:{" "}
              <a
                href="https://www.facebook.com/starcarriers"
                className=" text-blue-50 hover:text-blue-50"
              >
                <FaFacebook size={20} />
              </a>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
