import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout  from "./layouts/MainLayout";
import LandingPage   from "./pages/LandingPage";
import LoginPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignUpPage />}/>

    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
