import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserInfo } from '../utils/authService';

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserdata = async () => {
      if (user === null) {
        setLoading(true);
        const data = await getUserInfo()
        if (data.data?.success) {
          console.log("Resultat på get user info i Auth Provider")
          console.log(data.data.data)
          setUser(data.data.data)
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    };
    fetchUserdata();
  }, [user]);

  return (
    
    <Provider
      value={{
        isLoading: loading,
        isAdmin: user?.role === 'admin',
        isLoggedIn: user&&true,
        user,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
