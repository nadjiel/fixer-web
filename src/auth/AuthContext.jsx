import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [userId, setUserId] = useState();

  return (
    <authContext.Provider
      value={{
        userId,
        setUserId,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
