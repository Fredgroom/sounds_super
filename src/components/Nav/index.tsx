import { FC } from 'react';

interface NavLinkProps {
  href: string;
  children: string;
  onClick?: () => void;
}
const NavLink: FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      className='px-2 py-2 text-red font-extrabold cursor-pointer hover:bg-red hover:text-white w-full text-nowrap'
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
      <NavLink onClick={onClick} href='#video' aria-label='go to home'>
        home
      </NavLink>
      <NavLink onClick={onClick} href='#about-us' aria-label='go to about us'>
        about us
      </NavLink>
      <NavLink onClick={onClick} href='#work' aria-label='go to work'>
        work
      </NavLink>
      <NavLink onClick={onClick} href='#services' aria-label='go to services'>
        services
      </NavLink>
      <NavLink onClick={onClick} href='#team' aria-label='go to team'>
        team
      </NavLink>
      <NavLink onClick={onClick} href='#contact' aria-label='go to contact'>
        Contact
      </NavLink>
    </nav>
  );
};
export default Nav;
