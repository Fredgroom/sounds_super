import { FC } from 'react';

interface SectionProps {
  children: any;
  id: string;
  secondaryColor?: boolean;
}

const Section: FC<SectionProps> = ({ children, id, secondaryColor }) => {
  return (
    <div
      id={id}
      className={`min-h-screen flex flex-col justify-center items-center w-full px-2.5 py-10 md:px-5 ${
        secondaryColor && `bg-[#32BCE7]`
      }`}
    >
      {children}
    </div>
  );
};
export default Section;
