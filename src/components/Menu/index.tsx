import { FC, useEffect, useState } from 'react';
import Nav from '../Nav';

interface MenuLineProps {
  rotate?: string;
}
const MenuLine: FC<MenuLineProps> = ({ rotate }) => {
  return (
    <div
      style={{
        width: '24px',
        height: '2px',
        backgroundColor: '#E11556',
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
};

interface MenuOpenProps {
  func: any;
}
const MenuOpen: FC<MenuOpenProps> = ({ func }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '16px',
      }}
      onClick={func}
    >
      <MenuLine />
      <MenuLine />
      <MenuLine />
    </div>
  );
};
interface MenuCloseProps {
  func: any;
}
const MenuClose: FC<MenuCloseProps> = ({ func }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '16px',
      }}
      onClick={func}
    >
      <MenuLine rotate='45' />
      <MenuLine rotate='-45' />
    </div>
  );
};

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
      windowSize.width >= 425 && setShowMenu(true);
    };
  }, []);

  return (
    <div className='p-2 md:p-4 fixed bg-transparent flex justify-end w-full max-w-6xl'>
      <div
        className={`p-3 bg-[#fffefe] border-2 md:border-4 border-[#32BCE7] flex `}
      >
        {!showMenu && (
          // <p
          //   className='cursor-pointer text-[#E11556]'
          //   onClick={() => setShowMenu(true)}
          // >
          //   open
          // </p>
          <MenuOpen func={() => setShowMenu(true)} />
        )}
        {!!showMenu && (
          <div
            className={`${
              windowSize.width <= 425 && 'w-full'
            }  flex justify-between`}
          >
            <Nav />
            {windowSize.width <= 425 && (
              // <p
              //   className='px-1 text-[#E11556] cursor-pointer'
              //   onClick={() => setShowMenu(false)}
              // >
              //   close
              // </p>
              <MenuClose func={() => setShowMenu(false)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
