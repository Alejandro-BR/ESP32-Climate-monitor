import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home";
import Error from "./pages/Error";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const routeDefinition = createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<Error />}>
    <Route index element={<Home />} />
  </Route>
);

const router = createBrowserRouter(routeDefinition);

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
