import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box>
        <AppBar style={{ backgroundColor: "red" }}>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} align="left">
              app
            </Typography>
            <Button color="inherit">
              <Link
                to={"/Viewdata"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to={"/Employee"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Employee
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
