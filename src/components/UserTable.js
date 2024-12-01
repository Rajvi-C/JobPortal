import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import "../styles/userTable.css"; // Import the external CSS file

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the users when the component is mounted
    axios
      .get("http://localhost:5000/user/getAll")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users:", error);
      });
  }, []);

  return (
    <div>
      {/* Heading */}
      <Typography className="heading">Users List</Typography>

      {/* Table */}
      <TableContainer component={Paper} className="table-container">
        <Table className="table">
          <TableHead>
            <TableRow className="table-header">
              <TableCell className="table-cell">Email</TableCell>
              <TableCell className="table-cell">Name</TableCell>
              <TableCell className="table-cell">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id} className="table-row">
                <TableCell className="table-cell">{user.email}</TableCell>
                <TableCell className="table-cell">{user.fullName}</TableCell>
                <TableCell className="table-cell">{user.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
