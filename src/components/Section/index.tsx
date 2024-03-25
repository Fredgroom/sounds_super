import { FC } from 'react';

interface SectionProps {
  children: any;
  id: string;
  secondaryColor?: boolean;
  fullHeight?: boolean;
}

const Section: FC<SectionProps> = ({
  children,
  id,
  secondaryColor,
  fullHeight,
}) => {
  return (
    <div
      id={id}
      className={`
      flex flex-col justify-center items-center w-full px-2.5 py-32 md:px-5 
      
      ${fullHeight && `h-screen `} 
      ${secondaryColor && `bg-[#32BCE7]`}`}
    >
      {children}
    </div>
  );
};
export default Section;
