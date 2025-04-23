// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";
import { People } from "./pages/People";
import { Vehicles } from "./pages/Vehicles";
import { Planets } from "./pages/Planets";
import { Person } from "./pages/Person";
import { Planet } from "./pages/Planet";
import { Vehicle } from "./pages/Vehicle";

export const router = createBrowserRouter(
  createRoutesFromElements(
  // CreateRoutesFromElements function allows you to build route elements declaratively.
  // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
  // Root, on the contrary, create a sister Route, if you have doubts, try it!
  // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
  // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path= "/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/people" element={<People />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/person/:id" element={<Person />} /> {/* Dynamic route for people details */}
      <Route path="/vehicle/:id" element={<Vehicle />} /> {/* Dynamic route for vehicle details */}
      <Route path="/planet/:id" element={<Planet />} /> {/* Dynamic route for planet details */}
      
      {/* Default Route: Redirects to the home page if no other routes match. */}


    </Route>
  )
);