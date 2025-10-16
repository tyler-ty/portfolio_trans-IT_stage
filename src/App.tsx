import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import styles from "./App.module.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import About from "./components/About";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail";
//add translations
const Root = () => {
  return (
    <div className={styles.container}>
      <NavBar/>
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "blogs",
          element: <Blog />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path:"blog/:id",
          element: <BlogDetail/>
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
