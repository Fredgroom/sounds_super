// import video from "../assets/sounds_super.mp4";
// import gif from '../../assets/sounds_super.gif';
// import Logo from '../Logo';gst
import Section from '../Section';
import SectionContainer from '../SectionContainer';

const Video = () => {
  return (
    <Section
      id='video'
      fullHeight
      // className='min-h-screen flex flex-col justify-center items-center w-full'
    >
      <SectionContainer
        center
        // className='w-full max-w-6xl flex justify-center'
      >
        <video
          muted
          preload='auto'
          autoPlay
          loop
          className='w-full aspect-video pt-[94px]'
        >
          <source src='/reel.mp4' type='video/mp4' />
        </video>
        {/* <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video> */}
        {/* <img src={gif} className='min-w-[500px]' /> */}
        {/* <Logo size={600} /> */}
      </SectionContainer>
    </Section>
  );
};

export default Video;
