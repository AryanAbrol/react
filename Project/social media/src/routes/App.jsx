import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import PostlistProvider from "../store/posts-list-store";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");

  return (
    <PostlistProvider>
      <div className="app-container">
        <Sidebar
          selectedtab={selectedtab}
          setselectedtab={setselectedtab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
