import Section from '../Section';
import SectionContainer from '../SectionContainer';

const Services = () => {
  return (
    <Section id='services' secondaryColor>
      <SectionContainer>
        <div>
          <h1 className='text-red text-4xl font-extrabold underline decoration-[#32BCE7] decoration-500 decoration-4'>
            Services
          </h1>
          <p>
            We offer a wide range of services to help you create engaging and
            entertaining content.
          </p>
          <p>
            <span className='font-semibold'>Podcast production:</span> Devising,
            producing, and launching your podcast. We'll work with you to
            develop your concept, find the right talent, record and edit your
            episodes, and promote your podcast.
          </p>
          <p>
            <span className='font-semibold'>Vertical video production:</span>{' '}
            Creating high-quality vertical videos that are perfect for social
            media platforms like TikTok, Snapchat, Instagram Stories/Reels and
            YouTube Shorts. We'll work with you to develop your concept, shoot
            your video and edit it to perfection.
          </p>
          <p>
            <span className='font-semibold'>Sound design:</span> Producing an
            immersive listening experience and the perfect atmosphere for your
            story or project.
          </p>
          <p>
            <span className='font-semibold'>Audio editing:</span> Getting to the
            heart of the story and using the latest technology to ensure it
            sounds super every time.
          </p>
          <p>
            <span className='font-semibold'>Social media strategy:</span>{' '}
            Working with you to bring your vision to life and create something
            worth sharing. We'll work with you to identify your target audience,
            create engaging content, and measure your results.
          </p>
        </div>
      </SectionContainer>
    </Section>
  );
};

export default Services;
