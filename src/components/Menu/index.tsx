import { FC, useState } from 'react';
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
    >
      <div
        className={`flex flex-col align-center cursor-pointer h-[24px]`}
        onClick={func}
      >
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
    <div className='flex'>
      <div
        className={`flex justify-center self-end align-center relative cursor-pointer h-[26px] w-[24px]`}
        onClick={func}
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

  return (
    <div className='fixed bg-blue w-full p-2 md:p-4 flex justify-center z-10 border-solid border-b-4 border-red'>
      <div className='w-full bg-transparent max-w-[1000px]'>
        <div className='flex w-full md:w-auto justify-end bg-transparent'>
          {!showMenu && <MenuOpen func={() => setShowMenu(true)} />}
          {!!showMenu && (
            <div
              className={`p-3 bg-white border-4 w-full md:hidden md:w-auto border-blue flex justify-between items-start max-w-xl`}
            >
              <div className='w-full flex justify-center'>
                <Nav />
              </div>
              <MenuClose func={() => setShowMenu(false)} />
            </div>
          )}
          <div
            className={`hidden p-3 bg-white border-4 w-full md:border-4 md:w-auto border-blue md:flex justify-between items-start`}
          >
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
