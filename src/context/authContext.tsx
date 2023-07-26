/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "@services/interface";

interface AuthContextProps {
  login: (currentUser: IUser) => void;
  logout: () => void;
  user: IUser | null
}

export const AuthContext = createContext<AuthContextProps>({
  login: () => {},
  logout: () => {},
  user: null
});

export const AuthProvider = (props: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null)

  const login = (currentUser: IUser) => {
    localStorage.setItem("isLogged", "true");
    navigate("/dashboard");
    setUser(currentUser)
  };

  const logout = () => {
    localStorage.removeItem("isLogged");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
