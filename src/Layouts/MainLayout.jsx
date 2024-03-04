import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "80vh",
          backgroundColor: "#f0fcfc",
          paddingBottom: "20px",
          
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
