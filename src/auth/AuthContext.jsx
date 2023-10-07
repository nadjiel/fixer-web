import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
