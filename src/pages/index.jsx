import Navbar from "../components/fragments/navbar";
import HomeView from "../components/views/home";
import AboutView from "../components/views/about";
import WorkingAreaView from "../components/views/areas";
import OurProductView from "../components/views/product";
import TestimonialView from "../components/views/testimonial";
import PortfolioPage from "../components/views/portfolio";
import MapsView from "../components/views/maps";
import FooterView from "../components/views/footer";

function App() {
  return (
    <div className="relative w-[100dvw] min-h-screen">
      <Navbar />

      <>
        <HomeView />
      </>
      <>
        <AboutView />
      </>
      <>
        <WorkingAreaView />
      </>
      <>
        <OurProductView />
      </>
      <>
        <TestimonialView />
      </>
      <>
        <PortfolioPage />
      </>
      <>
        <MapsView />
      </>
      <>
        <FooterView />
      </>
    </div>
  );
}

export default App;
