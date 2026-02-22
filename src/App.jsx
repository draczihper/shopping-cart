import { Link, Outlet } from "react-router";
import "./App.css";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Link to='/Navbar'><Navbar /></Link>
      <h1>This is a home page</h1>
    </>
  );
};

export default App;
