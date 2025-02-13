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
import Info1 from "./pages/Info1";
import Info2 from "./pages/Info2";
import ReadersDashboard from "./pages/ReadersDashboard";
import SignUpVerification from "./pages/SignUpVerification";
import ResendVerification from "./pages/ResendVerification";
import RoleSelector from "./pages/RoleSelector";
import CategorySelector from "./pages/CategorySelector";
import AuthorDashboard from "./pages/AuthorDashboard";
import ResetPassword from "./pages/ResetPassword";
import SearchResultsPage from "./pages/SearchResultsPage";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import AuthorProfile from "./pages/AuthorProfile"
import CartSummary from "./pages/CartSummary";

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
      <Route7 path="/info1" element={<Info1 />} />
      <Route7 path="/info2" element={<Info2 />} />
      <Route7 path="/forgotpassword" element={<ForgotPassword />} />
      <Route7 path="/readersdashboard" element={<ReadersDashboard />} />
      <Route7 path="/verify" element={<SignUpVerification />} />
      <Route7 path="/resendverification" element={<ResendVerification />} />
      <Route7 path="/roleselection" element={<RoleSelector />} />
      <Route7 path="/categoriesselector" element={<CategorySelector />} />
      <Route7 path="/authordashboard" element={<AuthorDashboard />} />
      <Route7 path="/resetpassword" element={<ResetPassword />} />
      <Route7 path="/searchresultspage" element={<SearchResultsPage />} />
      <Route7 path="/checkout" element={<Checkout/>}/>
      <Route7 path="/author'sprofile" element={<AuthorProfile/>}/>
      <Route7 path="/cartsummary" element={<CartSummary/>}/>

    </Route7>
  )
);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider7 router={router} />;
    </CartProvider>
  )
};
export default App;
