import { useEffect } from "react";
import PropTypes from "prop-types";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Auto-hide after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-blue-500";
  const Icon = type === "success" ? FaCheckCircle : FaTimesCircle;

  return (
    <div
      className={`fixed top-35 left-1/2 transform -translate-x-1/2 ${bgColor} text-blue-50 px-6 py-3 rounded-lg shadow-md flex items-center gap-2`}
    >
      <Icon size={20} />
      <span>{message}</span>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired, // Accepts "success" or "error"
  onClose: PropTypes.func.isRequired,
};

export default Notification;
