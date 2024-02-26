import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { loginRequest, registerRequest } from "../utils/apis/auth";

export const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {

      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuth(true);

    } catch (error) {

      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {

      const response = await loginRequest(user);

      setUser(response.data);

      setIsAuth(true);
      console.log(response.data);

    } catch (error) {

      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      
      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {

    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider value={{ signup, signin, user, isAuth, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
