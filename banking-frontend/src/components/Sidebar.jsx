import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">Bank AI</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/create-ticket">Create Ticket</Link>
      <Link to="/tickets">View Tickets</Link>
      <Link to="/profile">Profile</Link>

    </div>
  );
}

export default Sidebar;