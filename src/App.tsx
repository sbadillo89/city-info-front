import { CityInformation } from "../src/pages/city-information";
import Navbar from "./components/navbar/index";
import { NoMatch } from "./components/no-match";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { History } from "./pages/history/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CityInformation />,
    },
    {
      path: "/information",
      element: <CityInformation />,
    },
    {
      path: "/history",
      element: <History />,
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ]);

  return (
    <>
      <div className="app">
        <Navbar />
        <RouterProvider router={router} />
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Sergio Badillo Bustillo</p>
        </footer>
      </div>
    </>
  );
}
export default App;
