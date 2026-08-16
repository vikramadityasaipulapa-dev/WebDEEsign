import Hero from "./components/Hero";
import ViewerSelector from "./components/ViewerSelector";
import ApologyDashboard from "./components/ApologyDashboard";
import Mistakes from "./components/Mistakes";
import MemoryGallery from "./components/MemoryGallery";
import SeriousMoment from "./components/SeriousMoment";
import FinalQuestion from "./components/FinalQuestion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <div className="grain" aria-hidden="true" />
      <Hero />
      <ViewerSelector />
      <ApologyDashboard />
      <Mistakes />
      <MemoryGallery />
      <SeriousMoment />
      <FinalQuestion />
      <Footer />
    </div>
  );
}

export default App;
