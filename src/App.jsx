import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout  from "./layouts/MainLayout";
import LandingPage   from "./pages/LandingPage";
import ShopCollectionsPage from "./pages/ShopCollectionsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/" element={<ShopCollectionsPage/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
