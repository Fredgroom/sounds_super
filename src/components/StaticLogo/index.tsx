import { FC, useEffect, useState } from 'react';
import LogoSquare from './LogoSquare';

interface LogoProps {
  size?: number;
  noText?: boolean;
}

const StaticLogo: FC<LogoProps> = ({ size = 32 }) => {
  const [finalSize, setFinalSize] = useState(size);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const ifSmallHeight = () => {
    let potSize = windowSize.width / Math.sqrt(2.5);
    size
      ? setFinalSize(size)
      : windowSize.width <= 425
      ? setFinalSize(windowSize.width * 0.7)
      : windowSize.width <= 1152 && potSize < 400
      ? setFinalSize(windowSize.width / Math.sqrt(2.5))
      : setFinalSize(400);
  };

  useEffect(() => {
    ifSmallHeight();
  }, [windowSize]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: size / 1.75,
        height: size,
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      >
        <LogoSquare backgroundColor='#E11556' number={1} size={finalSize} />
        {/* <LogoSquare backgroundColor='#E11556' number={2} size={finalSize} /> */}
        <LogoSquare backgroundColor='#32BCE7' number={3} size={finalSize} />
        {/* <LogoSquare backgroundColor='#32BCE7' number={4} size={finalSize} /> */}
      </div>
    </div>
  );
};

export default StaticLogo;
