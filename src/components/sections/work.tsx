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
    <Section id='work'>
      <SectionContainer>
        <div className='max-w-[770px]'>
          <h1 className='text-red text-4xl font-extrabold underline decoration-[#32BCE7] decoration-500 decoration-4'>
            Work
          </h1>
          <p>
            We focus on creating content that is engaging and entertaining. We
            want listeners to be hooked from the start and to keep listening
            until the end.
          </p>
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
