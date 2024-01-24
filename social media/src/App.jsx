import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/Createpost";
import Postlist from "./components/Postlist";
import { useState } from "react";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar selectedtab={selectedtab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedtab === "Home" ? (
          <Postlist></Postlist>
        ) : (
          <CreatePost></CreatePost>
        )}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
