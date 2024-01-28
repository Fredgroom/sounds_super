import { FC } from 'react';
import LogoSquare from './LogoSquare';

interface LogoProps {
  size?: number;
}

const Logo: FC<LogoProps> = ({ size = 400 }) => {
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
          <LogoSquare backgroundColor='#E11556' number={1} size={size} />
          <LogoSquare backgroundColor='#E11556' number={2} size={size} />
          <LogoSquare backgroundColor='#32BCE7' number={3} size={size} />
          <LogoSquare backgroundColor='#32BCE7' number={4} size={size} />
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
              width: size / 1.8,
              color: 'white',

              textAlign: 'center',
              backgroundColor: 'transparent',
              zIndex: 99999,
              fontSize: `${size / 6}px`,
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
