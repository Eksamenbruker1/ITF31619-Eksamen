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
        console.log("data")
        setLoading(true);
          const data = {
            "success": true,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDAwYjE5NGMzNmNkODZlMGU2M2RmOCIsImlhdCI6MTYwNzU1MTYyMiwiZXhwIjoxNjA3ODEwODIyfQ.qss2xgI12CO1P8WgmiP8YDloPlppbBvI7KE0gZrWYO0",
            "user": {
                "id": "5fd00b194c36cd86e0e63df8",
                "email": "testregisteradmin@test.no",
                "role": "admin"
            }
        }
        if (data?.success) {
      
          const currentUser = data.user;
          console.log("setUser(currentUser)setUser(currentUser)setUser(currentUser)setUser(currentUser)setUser(currentUser)")
          console.log(setUser(currentUser))
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
        isLoggedIn: !!user,
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
