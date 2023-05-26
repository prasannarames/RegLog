import "./styles.css";
import Register from "./components/Register/Register";
import HomePage from "./components/HomePage/HompePage";
import Login from "./components/Login/Login";
import { Route, Routes, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "./features/reducers/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/register");
    alert("succesfully Logged out");
  };
  return (
    <div className="App">
      <div>
        <nav className="navbar">
          <ul className="nav-items">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
