// import { Button, TextField, Typography } from "@mui/material";
import "./App.css";
import { red } from "@mui/material/colors";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";
// import { Table } from "@mui/material";
import { Viewdata } from "./components/Viewdata";
// import Statebasics from "./components/Statebasics";
// import Array from "./components/Array";
// import { Route, Routes } from "react-router-dom";
// import { Forms } from "./components/Forms";
// import { Viewdata } from "./components/Viewdata";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Viewdata" element={<Viewdata />} />
        <Route path="/employee" element={<Employee />}></Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Statebasics />}></Route>
        <Route path="/table" element={<Array />} />
        <Route path="/forms" element={<Forms />}></Route>
        <Route path="/Viewdata" element={<Viewdata />}></Route>
      </Routes> */}
      {/* <Forms/> */}
      {/* <Statebasics></Statebasics> */}
      {/* <Array></Array> */}
      {/* <h1>alan</h1> */}
      {/* <input type="text" placeholder="Username"></input> */}
      {/* <input type="Password" placeholder="Password"></input> */}
      {/* <button>login</button> */}
      {/* <Typography variant='h1' color={'red'} fontSize={'10rem'}>Alan</Typography>
    <TextField variant='standard' label="username" />
    <Button variant='outlined' color="success">login</Button> */}
    </div>
  );
}

export default App;
