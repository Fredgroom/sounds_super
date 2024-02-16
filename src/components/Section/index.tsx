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
      className={`${
        fullHeight && `h-screen `
      }flex flex-col justify-center items-center w-full px-2.5 py-32 md:px-5 ${
        secondaryColor && `bg-[#32BCE7]`
      }`}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      {children}
    </div>
  );
};
export default Section;
