import { useEffect, useRef } from 'react';

const Video = () => {
  let videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className='w-full h-screen max-w-full flex flex-col items-center justify-center pt-[76px] md:pt-[96px]'>
      <video
        ref={videoRef}
        controls={false}
        autoPlay
        playsInline
        muted
        loop
        className='max-h-full'
      >
        <source src='./reel.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
