import { FC, useEffect, useState } from 'react';
import LogoSquare from './LogoSquare';

interface LogoProps {
  size?: number;
}

const Logo: FC<LogoProps> = ({ size = 300 }) => {
  const [finalSize, setFinalSize] = useState(size);

  useEffect(() => {
    window.innerWidth <= 425
      ? setFinalSize(window.innerWidth * 0.7)
      : window.innerWidth <= 1152
      ? setFinalSize(window.innerWidth * 0.7)
      : setFinalSize(600);
  }, [window.innerWidth]);

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
              zIndex: 99999,
              fontSize: `${finalSize / 6}px`,
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
