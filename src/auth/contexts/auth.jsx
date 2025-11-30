import { createContext, useContext, useReducer } from "react";
import * as lib from "../lib";
import Cookies from "js-cookie";

const Context = createContext(null);

const initialState = {
  user: null,
  loading: false,
  error: "",
}

function reducer(state, action) {
  switch(action.type) {
    case "loading": return {
      ...state,
      loading: true,
    };
    case "success": return {
      ...state,
      loading: false,
      error: "",
    };
    case "signin": return {
      user: action.payload,
      loading: false,
      error: "",
    };
    case "error": return {
      user: null,
      loading: false,
      error: action.payload,
    };
    case "self": return {
      user: action.payload,
      loading: false,
      error: "",
    };
    case "signout": return {
      user: null,
      loading: false,
      error: "",
    };
  }
}

/**
 * Auth context provider that can give access to data
 * and operation related to the auth state.
 */
export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  /**
   * Signs up a user to the API, storing any errors that
   * may occur in the context state.
   */
  const signup = async (data) => {
    dispatch({ type: "loading" });

    try {
      await lib.signup(data);
      
      dispatch({ type: "success" });
    } catch(error) {
      console.error(error)

      dispatch({ type: "error", payload: "Erro desconhecido" })
    }
  }
  
  /**
   * Signs in a user, setting their `access` and `refresh`
   * tokens as cookies.
   * This function also fetches their data right after,
   * storing them in the context state.
   * If unsuccessful, the error is registered in the auth state.
   */
  const signin = async (data) => {
    dispatch({ type: "loading" });

    try {
      const signinRes = await lib.signin(data);

      Cookies.set("access", signinRes.access);
      Cookies.set("refresh", signinRes.refresh);
      
      const userRes = await lib.loadSelf();
      
      dispatch({ type: "signin", payload: userRes });
    } catch(error) {
      console.error(error)

      dispatch({ type: "error", payload: "Erro desconhecido" })
    }
  }
  
  /**
   * Removes the session's cookies and clears the current
   * user information from the state.
   */
  const signout = () => {
    Cookies.remove("access");
    Cookies.remove("refresh");

    dispatch({ type: "signout" });
  }

  /**
   * Fetches data from the currently logged user.
   */
  const loadSelf = async () => {
    dispatch({ type: "loading" });

    try {
      const res = await lib.loadSelf();
      
      dispatch({ type: "self", payload: res });
    } catch(error) {
      console.error(error)

      dispatch({ type: "error", payload: "Erro desconhecido" })
    }
  }

  return (
    <Context.Provider value={{
      ...state,
      signup,
      signin,
      signout,
      loadSelf,
    }}>
      {children}
    </Context.Provider>
  );
}

/**
 * @returns The {@link Context `AuthContext`}, or throws an
 * error if used out of scope.
 */
export function useAuth() {
  const state = useContext(Context);

  if(!state) {
    throw new Error("useAuth needs to be used within an AuthProvider");
  }

  return state;
}
