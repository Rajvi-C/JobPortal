import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import UserTable from "../components/UserTable";
import { useSelector } from "react-redux";
import "../styles/adminPage.css";

const AdminPage = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="page-container">
      <AdminNavbar />
      <h1 className="page-heading">Welcome {user ? user.userName : "Admin"}</h1>
      <p className="page-description">
        You can manage the users as well as the job posts.
      </p>
      <div className="table-container">
        <UserTable />
      </div>
    </div>
  );
};

export default AdminPage;
