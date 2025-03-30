import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";
import Button from "../components/Button";
import Notification from "../components/Notification";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value && errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};
    let valid = true;

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        formErrors[key] = "This field is required";
        valid = false;
      }
    });

    if (!valid) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_ls5r50y",
        "template_6fzqdw2",
        formData,
        "5fa2s7MQcQRq8TDju"
      )
      .then(() => {
        setNotification({
          message: "Email sent successfully!",
          type: "success",
        });
        setFormData({ name: "", phone: "", email: "", projectDescription: "" });
      })
      .catch(() => {
        setNotification({ message: "Failed to send email.", type: "error" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="relative flex justify-center items-center mb-10 mt-10">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <div className="w-full mx-auto bg-white shadow-md border-1 rounded-lg flex flex-col md:flex-row md:w-2/3 lg:w-2/3 xl:w-2/3">
        <div className="w-full md:w-1/2 bg-gray-900 text-blue-50 p-6 rounded-t-lg md:rounded-lg md:rounded-r-none flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">
            Please contact us for quotes, questions, and partnerships.
          </p>
          <p className="mb-6">
            Fill out this form, and our team expert will call you back shortly.
          </p>
          <p className="mb-4">We look forward to hearing from you!</p>
        </div>
        <div className="w-full md:w-1/2 p-6 flex justify-center">
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
            {Object.keys(formData).map((key) => (
              <div key={key} className="mb-4">
                <label
                  htmlFor={key}
                  className="block text-gray-900 mb-2 capitalize"
                >
                  {key === "projectDescription"
                    ? "Describe Your Project"
                    : key.replace(/([A-Z])/g, " $1")}
                </label>

                {key === "projectDescription" ? (
                  <textarea
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder="Enter a brief description of your project"
                    rows="4"
                    className="w-full px-4 py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  ></textarea>
                ) : (
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={`Enter your ${key}`}
                    className="w-full px-4 py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                )}

                {errors[key] && (
                  <p className="text-red-500 text-sm">{errors[key]}</p>
                )}
              </div>
            ))}

            <div className="mb-4 text-center">
              <Button type="primary" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <FaSpinner className="animate-spin mx-auto" size={20} />
                ) : (
                  "Request a Quote"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
