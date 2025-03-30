import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col mt-10 mb-10 mr-4 ml-4">
      <ContactUsForm />
      <div className="flex flex-col gap-5 md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 text-blue-50 p-8">
        {/* Office Address */}
        <div className="flex flex-col items-center text-gray-900 bg-blue-50 rounded-full p-8 w-64 h-64 justify-center">
          <FaMapMarkerAlt size={40} />
          <h3 className="mt-2 text-xl font-semibold">Visit our Office</h3>
          <p className="text-center mt-1">
            1251 n plum grove rd Unit 130-n Schaumburg il 60173
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-gray-900 bg-blue-50 rounded-full p-8 w-64 h-64 justify-center">
          <FaPhoneAlt size={40} />
          <h3 className="mt-2 text-xl font-semibold">Call Us</h3>
          <p className="text-center mt-1">Phone: 7378817827</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-gray-900 bg-blue-50 rounded-full p-8 w-64 h-64 justify-center">
          <FaEnvelope size={40} />
          <h3 className="mt-2 text-xl font-semibold">E-Mail Us</h3>
          <p className="text-center mt-1">starcarriers48@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
