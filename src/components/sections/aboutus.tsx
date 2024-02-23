import Section from '../Section';
import SectionContainer from '../SectionContainer';

const AboutUs = () => {
  return (
    <Section id='about-us' secondaryColor>
      <SectionContainer>
        <div>
          <h1 className='text-red text-4xl font-extrabold mb-3 underline decoration-[#32BCE7] decoration-500 decoration-4'>
            About Us
          </h1>
          <img />
          {/* <p >
          <strong>Sounds Super</strong> specialise in producing entertainment
          podcasts and vertical video to support and amplify.
          </p>
          <p >
          We believe that emotion is the most powerful way to connect with
          people. That's why <strong>we always start with a feeling</strong>{' '}
          when we create our content. We want our listeners to feel something
          when they listen to our work - whether it's laughter, sadness,
          excitement, or anything in between.
          </p>
          <p >
          We believe that both podcast audio and social video are powerful and
          personal mediums that speak directly to people. And they work
          phenomenally well together - like salt on popcorn or Ant & Dec.
          </p>
          <p className='m-0'>
          So, whether someone’s listening to the latest episode of ‘What the
          Fork?’ with Tom Kerridge and Chris Stark while walking their dog, or
          taking a backstage tour of Strictly with Joe Sugg on Tik-Tok before
          bed…
          <strong>our audience is always part of the story.</strong>
        </p> */}
          <p>
            Sounds Super specialise in producing entertainment podcasts and
            vertical video to support and amplify.
          </p>
          <p>
            We believe that emotion is the most powerful way to connect with
            people. That's why we always start with a feeling when we create our
            content. We want our listeners to feel something when they listen to
            our work - whether it's laughter, sadness, excitement, or anything
            in between.
          </p>
          <p>
            We believe that both podcast audio and social video are powerful and
            personal mediums that speak directly to people. And they work
            phenomenally well together - like salt on popcorn or Ant & Dec.
          </p>
          <p>
            So, whether someone’s just discovering ‘The Pirate Ship Podcast with
            Tom Kerridge and Chris Stark’ during their walk to work, or taking a
            backstage tour of Strictly with Joe Sugg on Tik-Tok before bed…our
            audience is always part of the story.
          </p>
        </div>
      </SectionContainer>
    </Section>
  );
};

export default AboutUs;
