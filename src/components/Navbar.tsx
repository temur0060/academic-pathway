import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, Home, FileText, ClipboardList, LogIn, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Bosh sahifa', icon: Home },
    { to: '/mavzular', label: 'Mavzular', icon: FileText },
    { to: '/test', label: 'Test', icon: ClipboardList },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-primary font-serif text-xl font-bold">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="hidden sm:inline">Akademik Yozuv</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
                    location.pathname === link.to ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Link to="/admin">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Settings className="w-4 h-4" /> Admin
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={logout} className="gap-2">
                    <LogOut className="w-4 h-4" /> Chiqish
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="default" size="sm" className="gap-2">
                    <LogIn className="w-4 h-4" /> Ustoz kirish
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Right Side Slide */}
      <div 
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-serif text-lg font-bold text-primary">Menyu</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 transition-all ${
                    location.pathname === link.to 
                      ? 'bg-primary/10 text-primary border-r-4 border-primary' 
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border space-y-3">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/admin" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 w-full p-3 rounded-xl bg-primary/10 text-primary font-medium"
                  >
                    <Settings className="w-5 h-5" />
                    Admin Panel
                  </Link>
                  <button 
                    onClick={() => { logout(); setIsOpen(false); }}
                    className="flex items-center gap-3 w-full p-3 rounded-xl bg-destructive/10 text-destructive font-medium"
                  >
                    <LogOut className="w-5 h-5" />
                    Chiqish
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium"
                >
                  <LogIn className="w-5 h-5" />
                  Ustoz kirish
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
