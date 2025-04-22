import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  return (
    <div className="bg-white p-2 px-3 d-flex justify-content-between align-items-center">
      <Link to="/" className="d-flex gap-2 align-items-center shadow">
        <img src="/radar-logo.webp" width={40} />
        <h2>Uçuş radarı</h2>
      </Link>

      <Buttons />
      <h6 className="text-black fw-bold info">
        {isLoading
          ? "Uçuşlar aranıyor..."
          : error
          ? error
          : `${flights.length} Uçuş Bulundu`}
      </h6>
    </div>
  );
};

export default Header;
