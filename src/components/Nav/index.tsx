import { useRef, useState } from 'react';
import Menu from '../Menu';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(true);
  const windowWidth = useRef();
  return (
    <div
      ref={windowWidth}
      className=' p-2 md:p-4 fixed bg-transparent flex w-full justify-end'
    >
      <div className='p-3 bg-[#fffefe] border-2 md:border-4 border-[#32BCE7] w-full flex justify-end'>
        {!showMenu && <p onClick={() => setShowMenu(true)}>X</p>}
        {!!showMenu && (
          <div className='w-full'>
            <Menu />
            <p onClick={() => setShowMenu(false)}>close</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
