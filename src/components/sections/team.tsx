import founderImage from '../../assets/founder.jpg';
import Section from '../Section';
import SectionContainer from '../SectionContainer';
import StaticLogo from '../StaticLogo';

const Bullet = () => {
  return (
    <div
      className='bg-white flex w-[32px] px-[4px] py-[20px] h-full'
      style={
        {
          // backgroundColor: 'white',
          // display: 'flex',
          // width: '32px',
          // padding: '20px 4px',
          // height: '100%',
        }
      }
    >
      <StaticLogo size={20} />
    </div>
  );
};

const Team = () => {
  return (
    <Section id='team'>
      <SectionContainer>
        <div>
          <h1 className='text-red text-4xl font-extrabold underline decoration-[#32BCE7] decoration-500 decoration-4'>
            Team
          </h1>
          <p>
            We work with a network of talented freelance writers, presenters and
            producers across the UK. We’re committed to creating the best
            possible product, and we work with the best people in the business
            to make that happen.
          </p>
          <div>
            <div className='flex justify-center md:block'>
              <div className='md:float-left p-5 pr-10 max-w-sm md:max-w-xs '>
                <img
                  className='w-full rounded-full ring-8 ring-[#32BCE7] ring-offset-8 mb-5 self-center'
                  src={founderImage}
                  alt='Man smilingly warmly, wearing a navy shirt, looking into camera'
                ></img>
              </div>
            </div>
            <div>
              <p>
                <span className=''>Jonathan O'Sullivan</span> is the founder and
                director of Sounds Super. He is a podcast producer with over a
                decade of experience in the audio industry.
              </p>
              <p>
                Jonathan is creative and passionate with a deep understanding of
                the medium. He is always looking for new ways to tell stories
                and to engage audiences.
              </p>
              <p>
                Jonathan has worked on a wide range of projects, including The
                Strictly Come Dancing Podcast for BBC Studios, The Pirate Ship
                Podcast with Tom Kerridge and Chris Stark and multiple
                documentaries for BBC Radio. In addition to his work in
                podcasting, Jonathan was also a commissioning producer for BBC
                Sounds, working with other production companies to deliver music
                podcasts to millions.
              </p>
              <p>Achievements include:</p>
              <div
                style={{
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateColumns: 'auto 1fr',
                  margin: '16px 0',
                }}
              >
                <Bullet />
                <p>
                  Winner of New York Radio Festivals Grand Award and Gold Award
                  2018
                </p>
              </div>
              <div
                style={{
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateColumns: 'auto 1fr',
                }}
              >
                <Bullet />
                <p>Winner of 6 New York Radio Festivals Awards - 2016</p>
              </div>
              <div
                style={{
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateColumns: 'auto 1fr',
                }}
              >
                <Bullet />
                <p>Winner of Aria Radio Moment of the year</p>
              </div>
              <div
                style={{
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateColumns: 'auto 1fr',
                }}
              >
                <Bullet />
                <p>
                  Shortlisted for BBC Radio and Music ‘Moment of the Year’ Award
                </p>
              </div>
              <div
                style={{
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateColumns: 'auto 1fr',
                }}
              >
                <Bullet />
                <p>
                  Productions featured in The New York Times, The Sunday Times,
                  The Guardian, DJ Magazine and Wired
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};

export default Team;
