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
        <h1 className='text-red text-4xl font-extrabold underline decoration-[#32BCE7] decoration-500 decoration-4'>
          Services
        </h1>
        <p className='mb-3'>
          We offer a wide range of services to help you create engaging and
          entertaining audio content.
        </p>
        <ul>
          <li className='mb-3'>
            <strong>Podcast production:</strong> We can help you create,
            produce, and launch your podcast. We'll work with you to develop
            your concept, find guests, record and edit your episodes, and
            promote your podcast.
          </li>
          <li className='mb-3'>
            <strong>Vertical video production:</strong> We can help you create
            high-quality vertical videos that are perfect for social media
            platforms like Instagram, Facebook, and TikTok. We'll work with you
            to develop your concept, shoot your video, and edit it to
            perfection.
          </li>
          <li className='mb-3'>
            <strong>Sound design:</strong> We can help you create soundscapes
            and sound effects for your audio content. We'll work with you to
            create the perfect atmosphere for your story or project.
          </li>
          <li className='mb-3'>
            <strong>Audio editing:</strong> We can edit your audio content to
            perfection. We'll remove unwanted noise, improve the sound quality,
            and make sure your episodes are the best they can be.
          </li>
          <li className='mb-3'>
            <strong>Social media strategy:</strong> We can help you develop a
            social media strategy that will help you reach your target audience
            with your vertical videos. We'll work with you to identify your
            target audience, create engaging content, and measure your results.{' '}
          </li>
          <li className='mb-3'>
            <strong>Social media management:</strong> We can manage your social
            media accounts for you, so you can focus on other aspects of your
            business. We'll post your vertical videos, interact with your
            followers, and track your results.
          </li>
        </ul>
        <p>
          We're passionate about creating content that entertains, informs, and
          inspires. We'll work with you to bring your vision to life and{' '}
          <strong>create something worth sharing</strong>.
        </p>
      </SectionContainer>
    </Section>
  );
};

export default Services;
