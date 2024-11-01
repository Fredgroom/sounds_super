import { FC, useEffect, useState } from 'react';
import LogoSquare from './LogoSquare';

interface LogoProps {
  size?: number;
  noText?: boolean;
}

const Logo: FC<LogoProps> = ({ size = 300 }) => {
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
    <div>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center relative'>
          <LogoSquare backgroundColor='#E11556' number={1} size={finalSize} />
          <LogoSquare backgroundColor='#E11556' number={2} size={finalSize} />
          <LogoSquare backgroundColor='#32BCE7' number={3} size={finalSize} />
          <LogoSquare backgroundColor='#32BCE7' number={4} size={finalSize} />
        </div>
        <div className='flex justify-center items-center'>
          <h1
            style={{
              width: finalSize / 1.8,
              color: 'white',
              textAlign: 'center',
              backgroundColor: 'transparent',
              zIndex: 1,
              fontSize: `${finalSize / 6}px`,
              lineHeight: `${(finalSize / 6) * 0.9}px`,
              wordBreak: 'break-word',
            }}
          >
            Sounds Super
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;
