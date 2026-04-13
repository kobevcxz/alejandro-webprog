import { NavLink, Link } from 'react-router-dom';
import Button from './Button';

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
      : 'text-zinc-400 hover:bg-zinc-800 hover:text-white',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        <NavLink to="/" className="text-xl font-bold text-blue-500">
          AnimeHub
        </NavLink>

        <div className="flex items-center gap-4">
          
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

          <div className="flex items-center gap-3">
            <Link
              to="/auth/signin"
              className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400 hover:text-white transition"
            >
              Login
            </Link>

            <Link to="/auth/signup">
              <Button className="text-[11px] px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </header>
  );
};

export default NavBar;