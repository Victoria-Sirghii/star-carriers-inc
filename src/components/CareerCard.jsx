import Button from "./Button";
import LinkToTop from "./LinkToTop";
import CarrerImg from "../assets/career.jpg";

const CareerCard = () => {
  return (
    <div className="max-w-5xl mx-auto my-12 bg-gray-800 p-8 rounded-lg shadow-lg flex gap-10 flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0">
      <div className="md:w-1/2 mb-8 md:mb-0 self-center">
        <img
          src={CarrerImg}
          alt="Career"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 text-blue-50">
        <h2 className="text-3xl font-semibold mb-4">Join Our Team</h2>
        <p className="text-lg mb-4">
          Take your career to new heights by becoming part of our passionate and
          rapidly expanding team of transportation professionals. We have a
          range of available roles and are constantly seeking exceptional talent
          to join us.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Attractive salary packages & performance incentives</li>
          <li>Paid on a weekly basis</li>
          <li>Comprehensive onboarding program for drivers</li>
        </ul>
        <LinkToTop to="/careers">
          <Button type="secondary">Explore Opportunities</Button>
        </LinkToTop>
      </div>
    </div>
  );
};

export default CareerCard;
