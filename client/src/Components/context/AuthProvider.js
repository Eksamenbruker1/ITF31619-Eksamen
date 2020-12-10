import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserInfo } from '../utils/authService';



const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Dette er data for fetch User data")
    const fetchUserdata = async () => {
      
          
      if (user === null) {
        setLoading(true);
        const data = await getUserInfo()
        console.log(data.data.data)
        if (data.data?.success) {
          
          setUser({...data.data.data,"online":true})
        } else {
          //setUser(null);
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
