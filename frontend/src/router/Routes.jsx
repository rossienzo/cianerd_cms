import { createBrowserRouter} from "react-router-dom";
import Index from "../views/index";
import ErrorPage from "../views/ErrorPage";
import Contact from "../views/contact";

const titleName = (text) => (
  document.title = `Cia Nerd | ${text}`
);

const Routes = createBrowserRouter([
  {
    path:"/",
    element: <Index />,
    loader: async () => {
      return titleName("Home")
    }
  },
  {
    path: "/contact",
    element: <Contact />,
    loader: async () => {
      return titleName("Contato")
    }
  },
  {
    path:"*",
    element: <ErrorPage />
  }
]);

export default Routes;