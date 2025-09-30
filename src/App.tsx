import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import styles from "./App.module.css";
import LandingPage from "./routes/LandingPage";
import NavBar from "./components/NavBar";
import Blog from "./routes/Blog";
//add translations
const Root = () => {
  return (
    <div className={styles.container}>
      <NavBar/>
      <div>
        <Outlet />
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};

const About = () => {
  return <div>About</div>;
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
          path: "blog",
          element: <Blog />,
        },
        {
          path: "about",
          element: <About />,
        },
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
