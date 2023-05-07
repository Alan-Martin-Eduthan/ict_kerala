import {
    ListItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
  export const Viewdata = () => {
    var [users, setData] = useState([]);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setData(response.data);
          console.log(response);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div style={{ padding: "100px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>location</TableCell>
                <TableCell>Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.address.street}</TableCell>
                  <TableCell>{item.address.geo.lat}</TableCell>
                  <TableCell>{item.address.suite}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  