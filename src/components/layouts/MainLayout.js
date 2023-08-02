import React from "react";
import Menu from "../UI/Menu";
import Footer from "../UI/Footer";

function MainLayout({ children }) {
  return (
    <div>
      <Menu />
      <main className="my-20 mx-2 md:mx-12 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
