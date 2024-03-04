import Section from '../Section';
import SectionContainer from '../SectionContainer';

const Contact = () => {
  return (
    <Section id='contact' secondaryColor>
      <SectionContainer>
        <div className='max-w-full'>
          <h1 className='text-red text-4xl font-extrabold mb-3 underline decoration-[#32BCE7] decoration-500 decoration-4  w-full max-w-full'>
            Contact Us
          </h1>
          <h1 className='text-4xl break-words w-full max-w-full'>
            Got an exciting project in mind? We're all ears
          </h1>
          <h1 className='text-red font-extrabold text-4xl break-words w-full max-w-full'>
            hello@soundssuper.co
          </h1>
        </div>
      </SectionContainer>
    </Section>
  );
};

export default Contact;
