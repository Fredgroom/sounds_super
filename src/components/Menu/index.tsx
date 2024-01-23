const Menu = () => {
  return (
    <nav className=' flex flex-col items-end md:flex-row'>
      <a
        className='p-1 text-[#E11556] font-extrabold cursor-pointer w-24 '
        href='#video'
      >
        home
      </a>
      <a
        className='p-1 text-[#E11556] font-extrabold cursor-pointer w-24'
        href='#about-us'
      >
        about us
      </a>
      <a
        className='p-1 text-[#E11556] font-extrabold cursor-pointer w-24'
        href='#work'
      >
        work
      </a>
      <a
        className='p-1 text-[#E11556] font-extrabold cursor-pointer w-24'
        href='#services'
      >
        services
      </a>
      <a
        className='p-1 text-[#E11556] font-extrabold cursor-pointer w-24'
        href='#team'
      >
        team
      </a>
      <a
        className='p-1 text-[#E11556] font-extrabold cursor-pointer w-24'
        href='#contact'
      >
        contact us
      </a>
    </nav>
  );
};
export default Menu;
