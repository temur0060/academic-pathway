import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { username: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const savedAuth = localStorage.getItem('akademik_auth');
    if (savedAuth) {
      const parsed = JSON.parse(savedAuth);
      setIsAuthenticated(true);
      setUser(parsed);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === 'BAZAROV.ATT.1-25' && password === 'BAZAROV.1-25') {
      const userData = { username };
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem('akademik_auth', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('akademik_auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
