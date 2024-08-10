import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Admin,
  Dashboard,
  Driver,
  History,
  Layout,
  Location,
  Products,
  Schedule,
  Settings,
  Support,
  UserManagment,
} from "./pages";
import { Provider } from "react-redux";
import { store } from "./features/store";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "dashboard", // "dashboard" nisbiy yo'l
          element: <Admin />,
          children:[{
            path:"admin",
            element:<Dashboard/>
          }]
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
        {
          path:"/admin",
          element: <Admin/>
        }
      ],
    },
  ]);
  
  return (
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  );
}
