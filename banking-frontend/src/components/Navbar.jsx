import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/token";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="navbar">

      <h3>AI Ticket System</h3>

      <button onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default Navbar;