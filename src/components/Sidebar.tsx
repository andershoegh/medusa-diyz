import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="mx-20 text-gray-700 gap-4 text-sm flex flex-col">
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Sidebar;
