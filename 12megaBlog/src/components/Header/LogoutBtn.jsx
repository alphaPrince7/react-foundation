import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // 🟢 ADDED: For navigation tracking
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 🟢 ADDED: Hook initialization

  // Inside src/components/Header/LogoutBtn.jsx:
  const logoutHandler = () => {
    // 🟢 Change .logout() to .deleteSession() if that is what you named it
    authService.deleteSession().then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
