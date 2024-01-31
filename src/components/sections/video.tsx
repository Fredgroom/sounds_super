// import video from "../assets/sounds_super.mp4";
// import gif from '../../assets/sounds_super.gif';
import Logo from '../Logo';
import Section from '../Section';
import SectionContainer from '../SectionContainer';

const Video = () => {
  return (
    <Section
      id='video'
      // className='min-h-screen flex flex-col justify-center items-center w-full'
    >
      <SectionContainer
        center
        // className='w-full max-w-6xl flex justify-center'
      >
        {/* <video
        muted
        preload="auto"
        autoPlay
        loop
        className="w-full aspect-video "
        >
        <source
        src="https://lh3.googleusercontent.com/86KYU3DAPqrlj7weZ8PdUEKpXwZQb7aptCuYAF6G1Sk6aQeRt1SyZ_ttsnjMNKYMFcsBi1Mh9C9a3awlencEorybw_K0yzIpadGa34rnRHGh1fUvAXqL-mk19nZWVl5t3A=w1280"
        type="video/mp4"
        />
      </video> */}
        {/* <img src={gif} className='min-w-[500px]' /> */}
        <Logo size={600} />
      </SectionContainer>
    </Section>
  );
};

export default Video;
