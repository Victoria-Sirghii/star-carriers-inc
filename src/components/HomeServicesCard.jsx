import { FaTruck, FaMapMarkedAlt, FaShippingFast } from "react-icons/fa";
import TruckImg1 from "../assets/truck-12.jpg";
import TruckImg2 from "../assets/truck-11.jpg";
import TruckImg3 from "../assets/logistic-8.jpg";
import LinkToTop from "./LinkToTop";

const services = [
  {
    title: "Freight Management",
    description:
      "We take care of the logistics, ensuring seamless storage, handling, and transportation of your goods.",
    link: "/services",
    icon: <FaTruck className="text-blue-50 text-4xl" />,
    image: TruckImg1,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Stay updated with our vehicle tracking system, ensuring timely delivery and full shipment visibility.",
    link: "/services",
    icon: <FaMapMarkedAlt className="text-blue-50 text-4xl" />,
    image: TruckImg3,
  },
  {
    title: "Full & Partial Loads",
    description:
      "From full truckloads to smaller shipments, we move your freight efficiently across the country.",
    link: "/services",
    icon: <FaShippingFast className="text-blue-50 text-4xl" />,
    image: TruckImg2,
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <LinkToTop
          to={service.link}
          key={index}
          className="block bg-gray-900 text-blue-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-gray-800"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-4 text-center">
            <h3 className="text-xl font-semibold">{service.title} </h3>
            <p className="text-gray-300">{service.description}</p>
            <span className="flex justify-center gap-3 items-center text-blue-50 font-semibold">
              {service.icon} Read more →
            </span>
          </div>
        </LinkToTop>
      ))}
    </div>
  );
}
