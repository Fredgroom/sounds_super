import { FC } from 'react';

interface NavLinkProps {
  href: string;
  children: string;
  onClick?: () => void;
}
const NavLink: FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      className='px-2 py-2 text-red font-extrabold cursor-pointer hover:bg-red hover:text-white w-full'
      onClick={onClick}
      href={`${href}`}
    >
      {children.toUpperCase()}
    </a>
  );
};

interface NavProps {
  onClick?: () => void;
}

const Nav = ({ onClick }: NavProps) => {
  return (
    <nav className='flex flex-col md:flex-row '>
      <NavLink onClick={onClick} href='#video'>
        home
      </NavLink>
      <NavLink onClick={onClick} href='#about-us'>
        about us
      </NavLink>
      <NavLink onClick={onClick} href='#work'>
        work
      </NavLink>
      <NavLink onClick={onClick} href='#services'>
        services
      </NavLink>
      <NavLink onClick={onClick} href='#team'>
        team
      </NavLink>
      <NavLink onClick={onClick} href='#contact'>
        Contact
      </NavLink>
    </nav>
  );
};
export default Nav;
