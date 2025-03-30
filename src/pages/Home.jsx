import ImgAnimation from "../components/ImgAnimation";
import BusinessForwardTemplate from "../components/BusinessForwardTemplate";
import HomeServicesCard from "../components/HomeServicesCard";
import Benefits from "../components/Benefits";
import Button from "../components/Button";
import CareerCard from "../components/CareerCard";
import AskExpert from "../components/AskExpert";
import LinkToTop from "../components/LinkToTop";
import TruckImg1 from "../assets/truck-5.jpeg";
import TruckImg2 from "../assets/truck-13.jpg";
import TruckImg3 from "../assets/truck-8.jpg";
import TruckImg4 from "../assets/truck-9.jpg";

function Home() {
  return (
    <>
      <ImgAnimation images={[TruckImg1, TruckImg2, TruckImg3, TruckImg4]}>
        <h2 className="text-4xl md:text-5xl font-bold text-red-50 mb-4 leading-tight">
          FULL-SERVICES
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-red-50 mb-4 leading-tight">
          Transportation & Logistics
        </h2>
      </ImgAnimation>
      <BusinessForwardTemplate />
      <div className="flex flex-col items-center justify-center text-center p-10 shadow-lg pb-25">
        <h1 className="text-4xl font-bold mb-4">
          Your Schedule, Our Commitment
        </h1>
        <p className="text-lg max-w-2xl">
          We drive the backbone of American commerce, delivering all types of
          cargo coast to coast. To us, reliable trucking means exceeding
          expectations. Wherever your freight needs to go— east, west, or
          anywhere in between—we make sure it gets there securely and on time.
        </p>
      </div>
      <Benefits />
      <div className="flex items-center justify-center mt-20 bg-blue-50 w-full">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around w-full bg-blue-50 rounded-lg text-center pt-10 pb-10 px-6 sm:px-0">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 sm:mb-0">
            Creating Value in Transportation & Logistics
          </h2>
          <LinkToTop to="/services">
            <Button>Explore Our Services</Button>
          </LinkToTop>
        </div>
      </div>
      <HomeServicesCard />
      <div className="flex flex-col items-center justify-center text-center p-20">
        <h1 className="text-4xl font-bold mb-4">
          Comprehensive Transport Solutions
        </h1>
        <p className="text-lg max-w-2xl">
          Whether big or small, we ensure your cargo reaches its destination on
          time and with care. Our team of experts is dedicated to providing
          top-notch service, ensuring your goods are delivered safely.
        </p>
      </div>

      <CareerCard />
      <AskExpert />
    </>
  );
}

export default Home;
