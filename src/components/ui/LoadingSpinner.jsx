import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => (
  <div className="py-64 flex justify-center items-center">
    <FaSpinner className="animate-spin text-dark-green w-7 h-7" />
  </div>
);

export default LoadingSpinner;
