import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" shadow-lg col-span-1 w-28 ">
      <ul className="p-2 ">
        <li className="m-1">
          <Link to="/">Home</Link>
        </li>
        <li className="m-1">Shorts</li>
        <li className="m-1">Videos</li>
        <li className="m-1">Live</li>
        <li className="m-1">
          <Link to="/demo">Demo</Link>
        </li>
      </ul>
      <h1 className="font-bold ">Subscriptions</h1>
      <ul className="p-2 ">
        <li className="m-1">Music</li>
        <li className="m-1">Sports</li>
        <li className="m-1">Gaming</li>
        <li className="m-1">Movies</li>
      </ul>
      <h1 className="font-bold ">Watch Later</h1>
      <ul className="p-2 ">
        <li className="m-1">Music</li>
        <li className="m-1">Sports</li>
        <li className="m-1">Gaming</li>
        <li className="m-1">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
