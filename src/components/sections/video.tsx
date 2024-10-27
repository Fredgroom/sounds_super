import { useEffect, useRef } from 'react';
// import Logo from '../Logo';

const Video = () => {
  let videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <>
      {/* {!videoRef.current && <Logo />} */}
      <div className='w-full h-screen max-w-[900px] flex flex-col items-center justify-center md:pt-[96px]'>
        <video
          ref={videoRef}
          controls={false}
          autoPlay
          playsInline
          muted
          loop
          className='max-h-full'
          poster='sounds_super.jpg'
        >
          <source src='./reel.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Video;
