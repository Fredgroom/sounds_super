import { FC } from 'react';

interface SectionContainerProps {
  children: any;
}

const SectionContainer: FC<SectionContainerProps> = ({ children }) => {
  return (
    <div
      className={`px-2.5 py-5 md:p-5 md:py-10 w-full max-w-6xl flex justify-center `}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
