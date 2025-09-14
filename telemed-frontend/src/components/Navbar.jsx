import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      padding: "10px 20px",
      backgroundColor: "#4B6CB7",
      color: "white",
      display: "flex",
      gap: "20px",
      alignItems: "center"
    }}>
      <h2 style={{ margin: 0 }}>Telemed</h2>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/login" style={{ color: "white", marginLeft: "15px", textDecoration: "none" }}>Login</Link>
        <Link to="/dashboard" style={{ color: "white", marginLeft: "15px", textDecoration: "none" }}>Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;

