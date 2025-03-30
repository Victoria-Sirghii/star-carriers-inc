import { FaTruck, FaRoute, FaTools, FaCheckCircle } from "react-icons/fa";
import Button from "../components/Button";
import ImgAnimation from "../components/ImgAnimation";
import AskExpert from "../components/AskExpert";
import LinkToTop from "../components/LinkToTop";

import TruckImg1 from "../assets/truck-1.jpeg";
import TruckImg2 from "../assets/truck-14.jpg";
import TruckImg3 from "../assets/truck-4.jpg";
import TruckImg4 from "../assets/truck-3.jpeg";
import TruckImg5 from "../assets/truck-6.jpeg";
import TruckImg6 from "../assets/truck-7.jpg";

function OurServices() {
  return (
    <>
      <div className="flex items-center justify-center mb-8 bg-blue-50  w-full shadow-lg">
        <div className="bg-blue-50 rounded-lg text-center pt-10 pb-10 w-3xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5">
            We Prioritize Your Cargo
          </h2>
          <p className="text-lg text-gray-600">
            We take cargo safety seriously by equipping our team with
            top-of-the-line trucks, trailers, safety chains, tarps, and personal
            protective equipment (PPE). Additionally, all our vehicles are
            continuously monitored through GPS tracking and are fully equipped
            with Electronic Logging Devices (ELD) to ensure smooth operations
            around the clock.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-6 md:p-10 mt-8 mb-8">
        <div className="flex gap-7 flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 text-gray-800 space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Logistics Made Simple
            </h1>
            <p className="text-lg text-gray-700">
              At Star Carriers INC, we take care of all the logistics, ensuring
              the safe storage, handling, and transportation of your goods.
              Whether large or small, we tailor our services to meet your unique
              needs, covering sourcing, warehousing, value-added services,
              distribution, and more.
            </p>
            <p className="text-lg text-gray-700">
              Our goal is to manage and optimize every step of the supply chain,
              from picking up to delivering goods, streamlining the entire
              process.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Key Logistics Services:
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaTruck className="text-3xl text-gray-900" />
                <p className="text-lg">
                  Efficient planning, implementing, and controlling of goods
                  flow and storage
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaRoute className="text-3xl text-gray-900" />
                <p className="text-lg">
                  Optimizing delivery routes and obtaining the necessary travel
                  permits
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaTools className="text-3xl text-gray-900" />
                <p className="text-lg">
                  Selecting the right equipment for freight transport through
                  our network carriers
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-3xl text-gray-900" />
                <p className="text-lg">
                  Coordinating support services for transporting over-height and
                  oversize freight
                </p>
              </div>
            </div>
            <LinkToTop to="/contact">
              <Button>Request a Quote</Button>
            </LinkToTop>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={TruckImg1}
              alt="Logistics"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-7">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={TruckImg2}
                alt="Tracking Image"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Shipment Tracking
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our tracking system streamlines logistics, boosting efficiency
                and providing full visibility to ensure timely delivery of your
                goods. Real-time updates keep you informed about your shipment’s
                progress, enhancing the flow of your freight. This approach
                allows us to build a highly efficient transportation network
                across the U.S. while seamlessly integrating your entire supply
                chain.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We are dedicated to monitoring your shipments every step of the
                way, ensuring your cargo reaches its destination exactly when
                it&apos;s needed.
              </p>
              <LinkToTop to="/contact">
                <Button>Request a Quote</Button>
              </LinkToTop>
            </div>
          </div>
        </div>
      </section>
      <ImgAnimation images={[TruckImg4, TruckImg5, TruckImg6]}>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-50 mb-4 leading-tight">
          Shaping the Future of Logistics
        </h2>
        <p className="text-lg md:text-xl text-blue-50 mb-8">
          Revolutionize your logistics and reduce overhead with our efficient,
          budget-friendly solutions designed for all your transportation needs.
          Let us streamline your shipping processes with our trusted trucking
          services!
        </p>
      </ImgAnimation>
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-7">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                TL and LTL Freight Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Whether you need Truckload (TL) or Less-than-Truckload (LTL)
                freight services, we offer efficient solutions to ship goods
                across the U.S. If your priority is timely delivery or cost
                savings, Star Carriers INC will provide the best option. Just
                tell us the type of load and your destination, and we’ll manage
                the rest.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our Truckload (TL) services are ideal for long-distance freight
                transportation, moving all goods to a single destination. With
                TL, your shipment goes directly from point A to point B without
                the need for any intermediate stops or reloading.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                For smaller shipments, our Less-than-Truckload (LTL) service
                provides the most cost-effective solution. We combine goods from
                multiple shippers into one shipment, with goods picked up and
                redistributed at regional terminals until they reach their final
                destination.
              </p>
              <LinkToTop to="/contact">
                <Button>Request a Quote</Button>
              </LinkToTop>
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={TruckImg3}
                alt="Truckload and LTL Image"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <AskExpert />
    </>
  );
}

export default OurServices;
