import { FC, useEffect, useState } from 'react';
import LogoSquare from './LogoSquare';

interface LogoProps {
  size?: number;
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
    if (windowSize.height < windowSize.width) {
      windowSize.height < size / Math.sqrt(2) &&
        setFinalSize(windowSize.height / Math.sqrt(2));
    } else {
      windowSize.width <= 425
        ? setFinalSize(windowSize.width * 0.75)
        : windowSize.width <= 1152
        ? setFinalSize(windowSize.width / Math.sqrt(2))
        : setFinalSize(600);
    }
  };

  useEffect(() => {
    ifSmallHeight();
  }, [windowSize]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <LogoSquare backgroundColor='#E11556' number={1} size={finalSize} />
          <LogoSquare backgroundColor='#E11556' number={2} size={finalSize} />
          <LogoSquare backgroundColor='#32BCE7' number={3} size={finalSize} />
          <LogoSquare backgroundColor='#32BCE7' number={4} size={finalSize} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
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
