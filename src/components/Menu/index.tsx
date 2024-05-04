import { FC, useEffect, useRef, useState } from 'react';
import Nav from '../Nav';

const MenuLine: FC = () => {
  return (
    <div
      style={{
        width: '24px',
        height: '3px',
      }}
      className='bg-red w-24 h-3'
    />
  );
};

interface MenuOpenProps {
  func: any;
}
const MenuOpen: FC<MenuOpenProps> = ({ func }) => {
  return (
    <div
      className={`p-3 bg-white border-4 border-blue flex cursor-pointer md:hidden`}
      onClick={func}
    >
      <div className={`flex flex-col align-center  h-[24px]`}>
        <div className='flex flex-col items-between justify-between h-full'>
          <MenuLine />
          <MenuLine />
          <MenuLine />
        </div>
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
      className='flex items-center justify-center border-4 border-blue w-[56px] cursor-pointer'
      onClick={func}
    >
      <div
        className={`flex justify-center items-center relative  h-[26px] w-[24px] p-3 `}
        // className={`flex justify-center self-end align-center relative cursor-pointer h-[26px] w-[24px]`}
      >
        <div
          className={`absolute top-[12px] w-[24px] h-[3px] bg-red rotate-[45deg]`}
        />
        <div
          className={`absolute top-[12px] w-[24px] h-[3px] bg-red rotate-[-45deg]`}
        />
      </div>
    </div>
  );
};

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleLinkToggle = () => {
    setShowMenu(false);
  };
  return (
    <div className='fixed w-full'>
      <div className=' bg-blue w-full h-[76px] p-2 md:p-4 flex justify-center z-10 border-solid border-b-4 border-red'>
        <div className='w-full bg-transparent max-w-[1000px] flex justify-between align-center'>
          <div className='bg-blue flex items-center '>
            <h3 className='bg-blue text-white font-bold text-nowrap m-0 text-2xl '>
              Sounds Super
            </h3>
          </div>
          <div className='flex w-full md:w-auto justify-end bg-transparent'>
            {!showMenu && <MenuOpen func={() => setShowMenu(true)} />}
            {!!showMenu && <MenuClose func={() => setShowMenu(false)} />}

            <div
              className={`hidden  bg-white w-full  md:w-auto  md:flex justify-between h-auto items-center `}
            >
              <Nav />
            </div>
          </div>
        </div>
      </div>
      {!!showMenu && (
        <div
          className={` bg-white border-b-4  w-full md:hidden md:w-auto border-red flex justify-between items-start max-w-xl`}
          ref={divRef}
        >
          <div className='w-full flex justify-center '>
            <Nav onClick={() => handleLinkToggle()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
