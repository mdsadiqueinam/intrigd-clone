import Header from "components/Header";
import HeroSlider from "components/HeroSlider";
import About from "components/About";
import Feature from "components/Feature";
import Screenshot from "components/Screenshot";
import Testimonial from "components/Testimonial";
import Download from "components/Download";
import Contact from "components/Contact";
import Footer from "components/Footer";
import ScrollToTopButton from "components/ScrollToTopButton";

import "styles/bootstrap.min.css";
import "styles/style.css";
import "styles/icons/plugins.css";

import { BreakpointProvider } from "context/breakPoint";

const queries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 750px)",
  md: "(max-width: 990px)",
};

function App() {
  return (
    <BreakpointProvider queries={queries}>
      <div className="main-wrapper" id="mainWrapper">
        <Header />
        <HeroSlider />
        <About />
        <Feature />
        <Screenshot />
        <Testimonial />
        <Download />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </BreakpointProvider>
  );
}

export default App;
