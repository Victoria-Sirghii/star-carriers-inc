import BusinessForwardTemplate from "../components/BusinessForwardTemplate";
import Button from "../components/Button";
import Benefits from "../components/Benefits";
import TruckImg1 from "../assets/truck-5.jpeg";
import TruckImg2 from "../assets/truck-2.jpeg";
import TruckImg3 from "../assets/truck-14.jpg";
import TruckImg4 from "../assets/truck-6.jpeg";

function About() {
  return (
    <>
      <div className=" bg-gray-50 flex flex-col items-center justify-center text-center pt-20 pb-20 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          Reliable Freight, Coast to Coast
        </h1>
        <p className="text-lg max-w-2xl">
          We drive the American economy forward by delivering all types of
          freight nationwide. For us, trucking isn’t just a job—it’s a promise
          to go above and beyond for our customers. No matter where you’re
          shipping, east or west, we ensure your freight reaches its destination
          safely and on time.
        </p>
      </div>
      <div className="shadow-lg pt-10 pb-15">
        <BusinessForwardTemplate />
      </div>
      <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-around p-10 space-y-6 md:space-y-0 md:space-x-10 pb-20 shadow-[0_-6px_10px_-2px_rgba(0,0,0,0.1),0_6px_10px_-2px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          <img
            src={TruckImg1}
            alt="Image 1"
            className="w-50 h-40 rounded-lg shadow"
          />
          <img
            src={TruckImg2}
            alt="Image 2"
            className="w-50 h-40 rounded-lg shadow"
          />
          <img
            src={TruckImg3}
            alt="Image 3"
            className="w-50 h-40 rounded-lg shadow"
          />
          <img
            src={TruckImg4}
            alt="Image 4"
            className="w-50 h-40 rounded-lg shadow"
          />
        </div>
        <div className="max-w-lg space-y-6 text-center md:text-left">
          <p className="text-lg max-w-2xl">
            At Star Carriers INC is a premier transportation and logistics
            company based in Schaumburg, IL, strategically located to serve
            businesses across the United States. Since 2012, we have provided
            reliable trucking solutions, delivering across all 48 continental
            states.
          </p>
          <p className="text-lg max-w-2xl">
            At Star Carriers INC, we don’t just move freight—we drive the
            American economy forward. Our flexible, tech-driven logistics
            solutions are designed to meet your shipping needs with efficiency
            and precision. We believe great trucking service means going the
            extra mile, ensuring your freight reaches its destination safely,
            whether east, west, or anywhere in between.
          </p>
        </div>
      </div>
      <Benefits />
      <div className="bg-blue-50 flex flex-col items-center justify-center text-center p-10 shadow-lg">
        <h1 className="text-4xl font-bold mb-5">Your Future Starts Here</h1>
        <p className="text-base sm:text-lg max-w-full sm:max-w-2xl mb-4">
          Discover exciting career opportunities with Star Carriers INC and be
          part of a team that drives success.
        </p>
        <Button>Grow with Us</Button>
      </div>
    </>
  );
}

export default About;
