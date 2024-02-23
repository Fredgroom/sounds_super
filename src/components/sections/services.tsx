import Section from '../Section';
import SectionContainer from '../SectionContainer';

const Services = () => {
  return (
    <Section
      id='services'
      secondaryColor
      // className='px-10 min-h-screen flex flex-col justify-center items-center mb-24 w-full'
    >
      <SectionContainer
      // className='mb-3 w-full max-w-6xl'
      >
        <div>
          <h1 className='text-red text-4xl font-extrabold underline decoration-[#32BCE7] decoration-500 decoration-4'>
            Services
          </h1>
          <p>
            We offer a wide range of services to help you create engaging and
            entertaining content.
          </p>
          <p>
            Podcast production: Creating, producing, and launching your podcast.
            We'll work with you to develop your concept, find the right talent,
            record and edit your episodes, and promote your podcast.
          </p>
          <p>
            Vertical video production: Creating high-quality vertical videos
            that are perfect for social media platforms like TikTok, Instagram
            Stories and YouTube Shorts. We'll work with you to develop your
            concept, shoot your video, and edit it to perfection.
          </p>
          <p>
            Sound design: Creating an immersive listening experience and the
            perfect atmosphere for your story or project.
          </p>
          <p>
            Audio editing: Getting to the heart of the story and using the
            latest technology to ensure it sounds super every time.
          </p>
          <p>
            Social media strategy: Working with you to bring your vision to life
            and create something worth sharing. We'll work with you to identify
            your target audience, create engaging content, and measure your
            results.
          </p>
        </div>

        {/* <p >
          We offer a wide range of services to help you create engaging and
          entertaining audio content.
          </p>
        <ul>
          <li >
            <strong>Podcast production:</strong> We can help you create,
            produce, and launch your podcast. We'll work with you to develop
            your concept, find guests, record and edit your episodes, and
            promote your podcast.
          </li>
          <li >
            <strong>Vertical video production:</strong> We can help you create
            high-quality vertical videos that are perfect for social media
            platforms like Instagram, Facebook, and TikTok. We'll work with you
            to develop your concept, shoot your video, and edit it to
            perfection.
          </li>
          <li >
            <strong>Sound design:</strong> We can help you create soundscapes
            and sound effects for your audio content. We'll work with you to
            create the perfect atmosphere for your story or project.
          </li>
          <li >
            <strong>Audio editing:</strong> We can edit your audio content to
            perfection. We'll remove unwanted noise, improve the sound quality,
            and make sure your episodes are the best they can be.
          </li>
          <li >
            <strong>Social media strategy:</strong> We can help you develop a
            social media strategy that will help you reach your target audience
            with your vertical videos. We'll work with you to identify your
            target audience, create engaging content, and measure your results.{' '}
          </li>
          <li >
            <strong>Social media management:</strong> We can manage your social
            media accounts for you, so you can focus on other aspects of your
            business. We'll post your vertical videos, interact with your
            followers, and track your results.
          </li>
        </ul>
        <p>
          We're passionate about creating content that entertains, informs, and
          inspires. We'll work with you to bring your vision to life and{' '}
          <strong>create something worth sharing</strong>. */}
        {/* </p> */}
      </SectionContainer>
    </Section>
  );
};

export default Services;
