import AboutUs from "./components/aboutus";
import Contact from "./components/contact";
import Services from "./components/services";
import Team from "./components/team";
import Work from "./components/work";

const App = () => {
  return (
    <main className="min-h-screen relative bg-gradient-to-r from-white-800 to-white-950 text-black flex flex-col">
      <section>
        <AboutUs />
      </section>
      <section>
        <Work />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
};

export default App;
