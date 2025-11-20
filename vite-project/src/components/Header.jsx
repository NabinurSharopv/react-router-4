import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="flex items-center gap-5 p-7 bg-gray-300 justify-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/info">Info</Link>
      </ul>
    </div>
  );
};

export default Header;
