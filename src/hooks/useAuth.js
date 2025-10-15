import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);
  
  const login = (username, password, isAdmin) => {
    setUser({ username, isAdmin, loggedIn: true });
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return { user, login, logout };
};

export default useAuth;