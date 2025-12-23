import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Home, FileText, ClipboardList, LogIn, LogOut, Settings, Sun, Moon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Bosh sahifa', icon: Home },
    { to: '/mavzular', label: 'Mavzular', icon: FileText },
    { to: '/test', label: 'Test', icon: ClipboardList },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="hidden sm:inline font-serif text-lg font-bold text-foreground">
                Akademik Yozuv
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                    location.pathname === link.to 
                      ? 'bg-primary text-primary-foreground shadow-glow' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}

              {/* Theme Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="hover:bg-muted ml-2"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-accent" />
                ) : (
                  <Moon className="w-4 h-4 text-primary" />
                )}
              </Button>

              {isAuthenticated ? (
                <div className="flex items-center gap-2 ml-2">
                  <Link to="/admin">
                    <Button size="sm" className="gap-2 btn-rose">
                      <Settings className="w-4 h-4" /> Admin
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={logout} className="gap-2 text-destructive hover:bg-destructive/10">
                    <LogOut className="w-4 h-4" /> Chiqish
                  </Button>
                </div>
              ) : (
                <Link to="/login" className="ml-2">
                  <Button size="sm" className="gap-2 bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
                    <LogIn className="w-4 h-4" /> Kirish
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-muted">
                {theme === 'dark' ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
              </Button>
              <button 
                className="p-2 rounded-xl hover:bg-muted transition-colors" 
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-[300px] bg-card border-l border-border shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-gradient-hero">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="font-serif text-lg font-bold text-primary-foreground">Menu</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl hover:bg-primary-foreground/10 text-primary-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 transition-all ${
                    location.pathname === link.to 
                      ? 'bg-primary/10 text-primary border-r-4 border-primary' 
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    location.pathname === link.to ? 'bg-gradient-primary shadow-glow' : 'bg-muted'
                  }`}>
                    <link.icon className={`w-5 h-5 ${location.pathname === link.to ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="p-5 border-t border-border space-y-3 bg-muted/30">
              {isAuthenticated ? (
                <>
                  <Link to="/admin" onClick={() => setIsOpen(false)} className="flex items-center gap-3 w-full p-4 rounded-xl btn-rose font-medium">
                    <Settings className="w-5 h-5" /> Admin
                  </Link>
                  <button onClick={() => { logout(); setIsOpen(false); }} className="flex items-center gap-3 w-full p-4 rounded-xl bg-destructive/10 text-destructive font-medium border border-destructive/20">
                    <LogOut className="w-5 h-5" /> Chiqish
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow">
                  <LogIn className="w-5 h-5" /> Kirish
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}