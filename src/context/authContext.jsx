import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const [isLogin, setIsLogin] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userName,
        password,
        userNameHandler,
        passwordHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
