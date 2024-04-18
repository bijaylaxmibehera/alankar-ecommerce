import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { AuthProvider } from "../../context/AuthContext";

function RootLayout() {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default RootLayout;
