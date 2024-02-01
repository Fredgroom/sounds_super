import { FC, useEffect, useState } from 'react';
import Nav from '../Nav';

const MenuLine: FC = () => {
  return (
    <div
      style={{
        width: '24px',
        height: '3px',
        backgroundColor: '#E11556',
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
      className={`p-3 bg-[#fffefe] border-2 md:border-4 border-[#32BCE7] flex cursor-pointer`}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '16px',
          cursor: 'pointer',
        }}
        onClick={func}
      >
        <MenuLine />
        <MenuLine />
        <MenuLine />
      </div>
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
        position: 'relative',
        height: '24px',
        width: '24px',
        cursor: 'pointer',
      }}
      onClick={func}
    >
      <div
        style={{
          width: '24px',
          height: '3px',
          backgroundColor: '#E11556',
          position: 'absolute',
          top: '10px',
          transform: 'rotate(45deg)',
        }}
      />
      <div
        style={{
          width: '24px',
          height: '3px',
          backgroundColor: '#E11556',
          position: 'absolute',
          top: '10px',
          transform: 'rotate(-45deg)',
        }}
      />
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
    <div className='p-2 md:p-4 fixed bg-transparent flex justify-end w-full max-w-6xl z-10'>
      {!showMenu && <MenuOpen func={() => setShowMenu(true)} />}
      {!!showMenu && (
        <div
          className={`p-3 bg-[#fffefe] border-2 md:border-4 border-[#32BCE7] flex`}
        >
          <div
            className={`${
              windowSize.width <= 425 && 'w-full'
            }  flex justify-between`}
          >
            <Nav />
            {/* {windowSize.width <= 425 && (
              <MenuClose func={() => setShowMenu(false)} />
            )} */}
            <MenuClose func={() => setShowMenu(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
