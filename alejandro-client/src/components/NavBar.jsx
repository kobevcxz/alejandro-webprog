import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClass = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'bg-blue-600 text-white'
      : 'text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-zinc-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          AnimeHub
        </NavLink>

        <nav className="flex items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default NavBar;