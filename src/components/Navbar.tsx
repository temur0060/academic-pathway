import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { to: '/', label: 'Bosh sahifa' },
    { to: '/mavzular', label: 'Mavzular' },
    { to: '/test', label: 'Test' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-primary font-serif text-xl font-bold">
            <BookOpen className="w-6 h-6" />
            <span>Akademik Yozuv</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link to="/admin">
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-1" /> Admin
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout}>Chiqish</Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="default" size="sm">Ustoz kirish</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-up">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-center font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link to="/admin" onClick={() => setIsOpen(false)} className="block py-3 text-center">Admin Panel</Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="block w-full py-3 text-center text-destructive">Chiqish</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className="block py-3 text-center text-primary font-semibold">Ustoz kirish</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
