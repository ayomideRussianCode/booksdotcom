import {
  createBrowserRouter as createBrowserRouter7,
  createRoutesFromElements as createRoutesFromElements7,
  RouterProvider as RouterProvider7,
  Route as Route7,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import GoogleSignUp from "./pages/GoogleSignUp";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import PasswordSet from "./pages/PasswordSet";
import ReadersDashboard from "./pages/ReadersDashboard";
import Info1 from "./pages/Info1";
import Info2 from "./pages/Info2";
import PaymentDashboard from "./pages/PaymentDashboard";
import SignUpVerification from "./pages/SignUpVerification";
import Verified from "./pages/Verified";
import ResendVerification from "./pages/ResendVerification";
import RoleSelector from "./pages/RoleSelector";
import CategorySelector from "./pages/CategorySelector";
import CreatorsProfile from "./pages/CreatorsProfile";

const router = createBrowserRouter7(
  createRoutesFromElements7(
    <Route7 path="/" element={<MainLayout />}>
      <Route7 index element={<LandingPage />} />
      <Route7 path="/login" element={<LoginPage />} />
      <Route7 path="/signup" element={<SignUpPage />} />
      <Route7 path="/googlesignup" element={<GoogleSignUp />} />
      <Route7 path="/home" element={<HomePage />} />
      <Route7 path="/about" element={<AboutUs />} />
      <Route7 path="/contact" element={<ContactUs />} />
      <Route7 path="/readersdashboard" element={<ReadersDashboard />} />
      <Route7 path="/info1" element={<Info1 />} />
      <Route7 path="/info2" element={<Info2 />} />
      <Route7 path="/forgotpassword" element={<ForgotPassword />} />
      <Route7 path="/newpassword" element={<NewPassword />} />
      <Route7 path="passwordset" element={<PasswordSet />} />
      <Route7 path="/paymentpage" element={<PaymentDashboard />} />
      <Route7 path="/verify" element={<SignUpVerification />} />
      <Route7 path="/verified" element={<Verified />} />
      <Route7 path="/resendverification" element={<ResendVerification />} />
      <Route7 path="/roleselection" element={<RoleSelector />} />
      <Route7 path="/categories" element={<CategorySelector />} />
      <Route7 path="/creator" element={<CreatorsProfile />} />
    </Route7>
  )
);

const App = () => {
  return <RouterProvider7 router={router} />;
};
export default App;
