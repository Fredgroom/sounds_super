import AboutUs from "./components/aboutus";
import Contact from "./components/contact";
import Services from "./components/services";
import Team from "./components/team";
import Work from "./components/work";

const App = () => {
  return (
    <main className="min-h-screen relative bg-gradient-to-r from-white-800 to-white-950 text-black flex flex-col">
      <AboutUs />
      <Work />
      <Services />
      <Team />
      <Contact />
    </main>
  );
};

export default App;
