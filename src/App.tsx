import Nav from './components/Nav';
import AboutUs from './components/sections/aboutus';
import Contact from './components/sections/contact';
import Services from './components/sections/services';
import Team from './components/sections/team';
import Video from './components/sections/video';
import Work from './components/sections/work';

const App = () => {
  return (
    <main className='min-h-screen  bg-gradient-to-r text-black flex flex-col items-center overflow-hidden'>
      {/* <div className='max-w-6xl'> */}
      <Nav />
      <Video />
      <AboutUs />
      <Work />
      <Services />
      <Team />
      <Contact />
      {/* </div> */}
    </main>
  );
};

export default App;
