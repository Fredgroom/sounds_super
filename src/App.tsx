import Menu from './components/Menu';
import AboutUs from './components/sections/aboutus';
import Contact from './components/sections/contact';
import Services from './components/sections/services';
import Team from './components/sections/team';
import Video from './components/sections/video';
import Work from './components/sections/work';

const App = () => {
  return (
    <main className='min-h-screen  bg-gradient-to-r text-black flex flex-col items-center overflow-hidden'>
      <Menu />
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
