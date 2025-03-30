import { NavLink } from "react-router";
import { useNavigateToTop } from "../hooks/useNavigationTop";
import PropTypes from "prop-types";

LinkToTop.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default function LinkToTop(props) {
  const navigateToTop = useNavigateToTop();

  const navigateAndReset = (event) => {
    event.preventDefault();
    navigateToTop(props.to || "/");
  };

  return (
    <NavLink
      className={props.className}
      onClick={navigateAndReset}
      to={props.to || "/"}
    >
      {props.children}
    </NavLink>
  );
}
