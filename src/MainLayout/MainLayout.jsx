import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins py-3">
      <Toaster></Toaster>
      <section>
        <Navbar></Navbar>
      </section>
      <div className="min-h-[calc(100vh-232px)]">
        <Outlet></Outlet>
      </div>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
