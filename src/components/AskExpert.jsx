import Button from "../components/Button";
import LinkToTop from "../components/LinkToTop";

function AskExpert() {
  return (
    <div className="flex items-center justify-center mt-8 bg-blue-50  w-full">
      <div className="bg-blue-50 rounded-lg text-center pt-10 pb-10 w-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-5">
          Our specialists are here to assist you in finding the perfect
          solutions for all your transportation needs.
        </h2>
        <LinkToTop to="/contact">
          <Button>Request a Quote</Button>
        </LinkToTop>
      </div>
    </div>
  );
}

export default AskExpert;
