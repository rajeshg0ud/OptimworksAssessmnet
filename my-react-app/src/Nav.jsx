import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const userInfoString = localStorage.getItem("userInfo");
  const userLoggedIn = userInfoString ? JSON.parse(userInfoString) : null;
  console.log("userLoggedIn", userLoggedIn);
  return (
    <div className="Navigation-Bar">
      {userLoggedIn.role == "admin" && (
        <div>
          <Link to="/Admin">Admin</Link>
        </div>
      )}
      {userLoggedIn.role == "doctor" && (
        <div>
          <Link to="/Doctor">Doctor</Link>
        </div>
      )}
      {userLoggedIn.role == "patient" && (
        <div>
          <Link to="/Patient">Patient</Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
