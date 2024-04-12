import Section from '../Section';
import SectionContainer from '../SectionContainer';
import logo_1 from '../../assets/01_bbc_studios.png';
import logo_2 from '../../assets/02_bbc_sounds.png';
import logo_3 from '../../assets/03_bbc_radio_1.png';
import logo_4 from '../../assets/04_bbc_radio_2.png';
import logo_5 from '../../assets/05_bbc_radio_6_music.png';
import logo_6 from '../../assets/06_nokia.png';
import logo_7 from '../../assets/07_prx.png';
import logo_8 from '../../assets/08_tom_sturridge.png';
import logo_9 from '../../assets/09_slate.png';

const Work = () => {
  return (
    <Section
      id='work'
      // className='px-10 min-h-screen flex flex-col justify-center items-center w-full'
    >
      <SectionContainer
      // className='w-full max-w-6xl'
      >
        <div className='max-w-[770px]'>
          <h1 className='text-red text-4xl font-extrabold underline decoration-[#32BCE7] decoration-500 decoration-4'>
            Work
          </h1>
          <p>
            We focus on creating content that is engaging and entertaining. We
            want our listeners to be hooked from the start and to keep listening
            until the end.
          </p>
          {/* <h2 className='mb-3 '>Currently on rotation….</h2>
        <iframe
        style={{ borderRadius: '12px' }}
        src='https://open.spotify.com/embed/episode/1IquyyXG3QjqNiAF399zeQ?utm_source=generator&theme=0'
        width='100%'
        height='152'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
        ></iframe>
        <br />
        <iframe
        style={{ borderRadius: '12px' }}
        src='https://open.spotify.com/embed/episode/6NPDc7MyO1aT1o3uqWZ8gB?utm_source=generator&theme=0'
        width='100%'
        height='152'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe> */}
          {/* <br /> */}
          {/* <p >Ibiza cover</p> */}
          {/* <br /> */}
          {/* <iframe
          allow='autoplay *; encrypted-media *; fullscreen *; clipboard-write'
          height='175'
          width='100%'
          style={{
            width: '100%',
            maxWidth: '660px',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
          sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation'
          src='https://embed.podcasts.apple.com/us/podcast/the-britpop-show-collaborations/id1547070771?i=1000643480931'
        ></iframe> */}
          {/* <p >
          Strictly Podcast Cover / Pirate Ship Podcast Cover / Ibiza cover /
          britpop cover
        </p> */}
          <p className='mt-3'>Some of our happy customers…</p>

          <div className='flex justify-center'>
            <div className='flex flex-wrap justify-center w-full '>
              <img
                src={logo_1}
                className='w-[90px] md:w-[175px] lg:w-[200px]'
              />
              <img
                src={logo_2}
                className='w-[90px] md:w-[175px] lg:w-[200px]'
              />
              <img
                src={logo_3}
                className='w-[90px] md:w-[175px] lg:w-[200px]'
              />
              <img
                src={logo_4}
                className='w-[90px] md:w-[175px] lg:w-[200px]'
              />
              <img
                src={logo_5}
                className='w-[90px] md:w-[175px] lg:w-[200px]'
              />
              <img
                src={logo_6}
                className='w-[90px] md:w-[175px] lg:w-[200px]'
              />
              <img
                src={logo_7}
                className='w-[90px] md:w-[175px] lg:w-[200px]'
              />
              <img
                src={logo_8}
                className='w-[90px] md:w-[175px] lg:w-[200px]'
              />
              <img
                src={logo_9}
                className='w-[90px] md:w-[175px] lg:w-[200px]'
              />
            </div>
          </div>
          {/* <p >
          BBC Studios / Tom Kerridge / Nokia / Brand pilot / SBAI / BBC Sounds /
          Radio 1 / Radio 2 / 6 Music / american ones tbc
        </p> */}
        </div>
      </SectionContainer>
    </Section>
  );
};

export default Work;
