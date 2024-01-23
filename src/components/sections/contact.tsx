import Section from '../Section';
import SectionContainer from '../SectionContainer';

const Contact = () => {
  return (
    <Section
      id='contact'
      secondaryColor
      // className='px-10 min-h-screen flex flex-col justify-center items-center w-full'
    >
      <SectionContainer>
        <h1 className='text-4xl text-[#E11556] font-extrabold py-5 pt-0 w-full'>
          Contact Us
        </h1>
        <h1 className='text-4xl break-words w-full'>
          Got an exciting project in mind? We're all ears:{' '}
          <span className='text-[#E11556] font-extrabold break-words'>
            hello@soundssuper.co
          </span>
        </h1>
      </SectionContainer>
    </Section>
  );
};

export default Contact;
