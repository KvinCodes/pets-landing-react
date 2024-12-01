import { Routes, Route } from "react-router-dom";
import Navbar from "./views/Nabvar";
import Home from "./views/Home";
import AdoptNow from "./views/AdoptNow";
import OurServices from "./views/OurServices";
import Reviews from "./views/Reviews";
import Footer from "./views/Footer";
import Counter from "./views/Counter";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                <Navbar />
                <Home />
                <AdoptNow />
                <OurServices />
                <Reviews />
                <Footer />
                </>
            } />

            <Route path="/Counter" element={<Counter />} />
        </Routes>
    );
};

export default Router;