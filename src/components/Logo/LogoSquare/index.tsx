import { FC } from 'react';
import './styles.css';

interface LogoSquareProps {
  backgroundColor?: string;
  number: number;
  size: number;
}

const LogoSquare: FC<LogoSquareProps> = ({
  backgroundColor = '#E11556',
  number,
  size = 200,
}) => {
  return (
    <div
      className={`
      ${
        number == 1
          ? 'rotatingDiv1'
          : number == 2
          ? 'rotatingDiv2'
          : number == 3
          ? 'rotatingDiv3'
          : number == 4
          ? 'rotatingDiv4'
          : ''
      } rotatingDiv
      `}
      style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        left: -(size / 4),
        backgroundColor: backgroundColor,
        opacity: '.95',
        rotate: '45deg',
        mixBlendMode: 'multiply',
      }}
    />
  );
};

export default LogoSquare;
