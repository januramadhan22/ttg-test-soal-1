import Navbar from "../components/fragments/navbar";
import HomeView from "../components/views/home";
import AboutView from "../components/views/about";

function App() {
  return (
    <div className="relative w-[100dvw] min-h-[100dvh]">
      <Navbar />

      <>
        <HomeView />
      </>
      <>
        <AboutView />
      </>
    </div>
  );
}

export default App;
