import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
};

export default function Button({
  children,
  type = "primary",
  className = "",
  ...props
}) {
  const baseStyles = "px-4 py-2 rounded-lg transition duration-300";
  const styles = {
    primary:
      "font-lato bg-red-900 text-red-50 hover:bg-red-50 hover:text-red-900 border border-red-900",
    secondary:
      "font-lato bg-red-50 text-red-900 hover:bg-red-900 hover:text-red-50 border border-red-900",
  };
  return (
    <button className={`${baseStyles} ${styles[type]} ${className}`} {...props}>
      {children}
    </button>
  );
}
