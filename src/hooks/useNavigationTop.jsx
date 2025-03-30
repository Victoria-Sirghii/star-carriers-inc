import { useNavigate } from "react-router";

export const useNavigateToTop = () => {
  const navigate = useNavigate();

  const navigateAndReset = (to) => {
    navigate(to, { replace: true });
    window.scrollTo(0, 0);
  };

  return navigateAndReset;
};
