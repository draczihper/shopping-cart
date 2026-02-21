import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Layout = () => {
    <>
    <NavBar />
    <Outlet />
    </>
}

export default Layout;