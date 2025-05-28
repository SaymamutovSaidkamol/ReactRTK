import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto py-5 text-2xl">
      <div className="flex justify-between items-center">
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div className="flex gap-20">
          <Link to={"/comment"}>Create Card</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
