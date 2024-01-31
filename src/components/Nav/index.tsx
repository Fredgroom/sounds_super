const Nav = () => {
  return (
    <nav className='flex flex-col md:flex-row '>
      <a
        className='px-2 text-[#E11556] font-extrabold cursor-pointer'
        href='#video'
      >
        home
      </a>
      <a
        className='px-2 text-[#E11556] font-extrabold cursor-pointer'
        href='#about-us'
      >
        about us
      </a>
      <a
        className='px-2 text-[#E11556] font-extrabold cursor-pointer'
        href='#work'
      >
        work
      </a>
      <a
        className='px-2 text-[#E11556] font-extrabold cursor-pointer'
        href='#services'
      >
        services
      </a>
      <a
        className='px-2 text-[#E11556] font-extrabold cursor-pointer'
        href='#team'
      >
        team
      </a>
      <a
        className='px-2 text-[#E11556] font-extrabold cursor-pointer'
        href='#contact'
      >
        contact us
      </a>
    </nav>
  );
};
export default Nav;
