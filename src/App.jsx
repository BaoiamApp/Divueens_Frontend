import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import Auth from "./components/Auth/Auth";
import BlogHome from "./pages/Blog";
import ReturnPolicy from "./pages/cancellation";
import DivCoins from "./pages/DivCoins";
import DivueensCSR from "./pages/DivueensCSR";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import TeamSection from "./pages/TeamSection";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/Privacy";
import HelpCenter from "./pages/HelpCenter";
import FaqsPage from "./pages/FAQ";
import SpecialOffer from "./pages/SpecialOffer";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />     {/* Landing page */}
        <Route path="/products" element={<ProductList />} /> {/* Product list page */}

        {/* Profile page */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-description" element={<ProductDetails />} />

        {/* Login page */}
        <Route path="/login" element={<Auth />} />

        {/* Other Pages */}
        <Route path="/special-offers" element={<SpecialOffer />} />
        <Route path="/our-team" element={<TeamSection />} />
        <Route path="/CSR" element={<DivueensCSR />} />
        <Route path="/CSR" element={<DivueensCSR />} />
        <Route path="/coins" element={<DivCoins />} />
        <Route path="/blogs" element={<BlogHome />} />
        <Route path="/frequently-asked-questions" element={<FaqsPage />} />
        <Route path="/contact-us" element={<></>} />
        <Route path="/help-center" element={<HelpCenter/>} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-delivery" element={<></>} />
        <Route path="/sell-on-divueens" element={<></>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blogs" element={<BlogHome/>} />
        <Route path="/about-us" element={<></>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
