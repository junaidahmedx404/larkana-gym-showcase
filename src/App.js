import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Programs from "./pages/Programs";
import Schedule from "./pages/Schedule";
import SocialProof from "./pages/SocialProof";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SocialProof />
      <Programs />
      <Schedule />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
