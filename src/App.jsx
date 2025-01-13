import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import GoogleSignUp from "./pages/GoogleSignUp";
import HomePage from "./pages/HomePage";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import PasswordSet from "./pages/PasswordSet";
import ReadersDashboard from "./pages/ReadersDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/googlesignup" element={<GoogleSignUp />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/readersdashboard" element={<ReadersDashboard />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="passwordset" element={<PasswordSet />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
