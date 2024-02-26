import Header from "../Components/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer.jsx";

export default function MainLayout() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}