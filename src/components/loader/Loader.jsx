import { RingLoader } from "react-spinners";
// npm i react-spinners --save go to official website to check out more loading shapes
import './loader.css'
const Loader = () => {
  return (
    <div className="loader">
      <RingLoader
        color="rgba(0, 210, 123, 0.7)"
        loading
        size={60}
        speedMultiplier={1}
        aria-label="Loading Spinner"
            data-testid="loader"
      />
    </div>
  );
};

export default Loader;

