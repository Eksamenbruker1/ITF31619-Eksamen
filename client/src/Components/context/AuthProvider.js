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
        if (data?.success) {
          console.log("setUser(currentUser)setUser(currentUser)setUser(currentUser)setUser(currentUser)setUser(currentUser)")
          console.log(currentUser)
          const currentUser = data.user;
          setUser(currentUser)

        } else {
          //setUser(null);
        }
        console.log(user)
        
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
