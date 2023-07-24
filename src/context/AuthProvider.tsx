import { createContext, useContext, useState } from "react";

const Auth = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  return <Auth.Provider value={{ user }}>{children}</Auth.Provider>;
};

function useAuth() {
  const context = useContext(Auth);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { Auth, AuthProvider, useAuth };
