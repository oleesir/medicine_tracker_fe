import {Outlet} from "react-router-dom";
// import {NavLinks, HeaderFont, HeaderContent, NavLink, UnStyledList, NavList} from "./styles";

const Layout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Layout;
