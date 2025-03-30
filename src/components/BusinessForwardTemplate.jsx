import { FaTruck, FaHeadset, FaHandshake } from "react-icons/fa";

const BusinessForwardTemplate = () => {
  return (
    <div className="flex flex-col justify-center items-center py-15 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Driving Your Business to New Heights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-blue-50 flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md">
          <FaTruck className="text-4xl text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Safety</h2>
          <p className="text-gray-600">
            Our top priority is ensuring safety and reliability in every aspect
            of our trucking services.
          </p>
        </div>
        <div className="bg-blue-50 flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md">
          <FaHeadset className="text-4xl text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Customer Care</h2>
          <p className="text-gray-600">
            We collaborate closely with our clients to ensure their shipments
            arrive safely and on time.
          </p>
        </div>

        <div className="bg-blue-50 flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md">
          <FaHandshake className="text-4xl text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Trust</h2>
          <p className="text-gray-600">
            Our commitment to quality, punctuality, and innovation is how we
            build lasting trust with our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessForwardTemplate;
