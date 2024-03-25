// import video from "../assets/sounds_super.mp4";
// import gif from '../../assets/sounds_super.gif';
// import Logo from '../Logo';gst
// import Section from '../Section';
// import SectionContainer from '../SectionContainer';

const Video = () => {
  return (
    <div id='video' className='w-full flex flex-col items-center '>
      <div className='w-full h-[76px] md:h-[96px]'></div>
      {/* <Section
       id='video'
       fullHeight
        className='min-h-screen flex flex-col justify-center items-center w-full'
     > */}
      {/* <video
    muted
    preload='auto'
    autoPlay
    loop
    playsInline
    className='aspect-square w-[100vw] md:pt-[94px] lg:max-w-[60vw]  max-h-[85vw]'
    >
    <source src='/reel.mp4' type='video/mp4' />
  </video> */}

      <iframe
        // src='https://player.vimeo.com/video/926228437?h=4e68b524b0&autoplay=1&loop=1&title=0&byline=0&portrait=0'
        src='https://player.vimeo.com/video/926228437?background=1'
        className='aspect-square w-full max-h-[976px] my-10'
        allow='autoplay; background'
      ></iframe>
      {/* <video
          className='rellax'
          id='hero-video'
          autoplay=''
          loop={true}
          muted={true}
          preload='auto'
          playsinline=''
          data-desktop-src='https://player.vimeo.com/progressive_redirect/playback/812363685/rendition/1080p/file.mp4?loc=external&amp;oauth2_token_id=1616966395&amp;signature=9efae13b23656b04017f2c55160905a96ebd25ea64252569c10aad9d27e1985d'
          data-mobile-src='https://player.vimeo.com/progressive_redirect/playback/812364317/rendition/720p/file.mp4?loc=external&amp;oauth2_token_id=1616966395&amp;signature=3c6536926eb64d041adf405a28ec15b388bbcfd98c8f24d911056dde8b84623a'
          style={{ transform: 'translate3d(0px, 0px, 0px)' }}
          >
          <source
          src='https://player.vimeo.com/progressive_redirect/playback/812363685/rendition/1080p/file.mp4?loc=external&amp;oauth2_token_id=1616966395&amp;signature=9efae13b23656b04017f2c55160905a96ebd25ea64252569c10aad9d27e1985d'
          type='video/mp4'
          />
        </video> */}
      {/* <script src='https://player.vimeo.com/api/player.js'></script> */}
      {/* <script src='https://player.vimeo.com/api/player.js'></script> */}
      {/* <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video> */}
      {/* <img src={gif} className='min-w-[500px]' /> */}
      {/* <Logo size={600} /> */}
      {/* </Section> */}
    </div>
  );
};

export default Video;
