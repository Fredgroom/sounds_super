import { FC } from 'react';

interface NavLinkProps {
  href: string;
  children: string;
}
const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      className='px-2 text-red font-extrabold cursor-pointer hover:bg-red hover:text-white h-[26px]'
      href={`${href}`}
    >
      {children.toUpperCase()}
    </a>
  );
};

const Nav = () => {
  return (
    <nav className='flex flex-col md:flex-row '>
      <NavLink href='#video'>home</NavLink>
      <NavLink href='#about-us'>about us</NavLink>
      <NavLink href='#work'>work</NavLink>
      <NavLink href='#services'>services</NavLink>
      <NavLink href='#team'>team</NavLink>
      <NavLink href='#contact'>Contact</NavLink>
    </nav>
  );
};
export default Nav;
