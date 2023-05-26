import React from "react";
import { useSelector } from "react-redux";
import "./HomePage.css";

export default function HomePage() {
  const userData = useSelector((state) => state.user.userData);

  // console.log(userData);
  return (
    <div className="home">
      {userData ? (
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.email}</td>
              <td>{userData.userName}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h2>
          You are not a registered user, please register and login first !!{" "}
        </h2>
      )}
    </div>
  );
}
