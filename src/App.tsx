import AboutUs from "./components/aboutus";
import Contact from "./components/contact";
import Services from "./components/services";
import Team from "./components/team";
import Video from "./components/video";
import Work from "./components/work";

const App = () => {
  return (
    <main className="min-h-screen  bg-gradient-to-r bg-[#F5F4F4] text-black flex flex-col">
      <Video />
      <AboutUs />
      <Work />
      <Services />
      <Team />
      <Contact />
    </main>
  );
};

export default App;
