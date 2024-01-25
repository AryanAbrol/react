import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/Createpost.jsx";
import Postlist  from "./components/Postlist.jsx";

const router = createBrowserRouter([
  { path:"/", element: <App /> , children: [
    { path: "/", element: <Postlist /> },
    { path: "/create-post", element: <CreatePost /> },
  ]},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
