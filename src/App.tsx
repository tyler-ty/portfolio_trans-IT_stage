import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import About from "./components/About";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail";
import { BlogProvider } from "./components/BlogContext/BlogContext";
import { useLayoutEffect } from "react";
//add translations

const Wrapper = ({ children }:any) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};
const Root = () => {
  return (
    <Wrapper>
      <div className="bg-background flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
};
import { useRouteError, Link } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <>
    <NavBar/>
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-xl mb-4">
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>

      <Link
        to="/"
        className="bg-link text-background px-6 py-2.5 rounded-2xl shadow font-medium hover:bg-link-hover transition"
      >
        Go back home
      </Link>
    </div>
    <Footer/>
    </>
  );
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />, 
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
          path: "blog/:id",
          element: <BlogDetail />,
        },
      ],
    },
  ]);

  return (
    <div>
      <BlogProvider>
        <RouterProvider router={router} />
      </BlogProvider>
    </div>
  );
};

export default App;
