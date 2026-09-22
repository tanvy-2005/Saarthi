import { Link, useLocation } from 'react-router-dom';
import { Search, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TopNav({ role = 'student' }: { role?: 'student' | 'alumni' | 'admin' }) {
  const location = useLocation();

  const navLinks = [
    { name: 'Network', path: '/network' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Opportunities', path: '/opportunities' },
    { name: 'Events', path: '/events' },
    { name: 'Giving', path: '/giving' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-deep rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg italic">S</span>
          </div>
          <span className="font-serif text-xl font-semibold text-brand-deep">Saarthi</span>
        </Link>

        {/* Navigation Pills */}
        <nav className="hidden md:flex items-center gap-2 bg-slate-50 p-1 rounded-full border border-border">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white shadow-sm text-brand-deep'
                    : 'text-slate-500 hover:text-brand-deep hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors text-sm border border-transparent hover:border-slate-300">
            <Search className="w-4 h-4" />
            <span>Search...</span>
            <kbd className="ml-2 px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono shadow-sm">
              ⌘K
            </kbd>
          </button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="rounded-full text-slate-500 hover:text-brand-deep">
            <Bell className="w-5 h-5" />
          </Button>

          {/* User Profile Badge */}
          <Link to="/profile" className="flex items-center gap-2 pl-2 border-l border-border">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-sm font-semibold text-brand-deep leading-none">Aarav S.</span>
              <span className="text-[10px] text-brand-glow font-medium uppercase tracking-wider mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-glow"></span>
                Verified {role}
              </span>
            </div>
            <div className="w-9 h-9 rounded-full bg-brand-surface border-2 border-white shadow-sm flex items-center justify-center text-brand-deep">
              <User className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
