import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProviderContext, setUserProviderContext] = useState(null);
  return (
    <UserContext.Provider
      value={{ userProviderContext, setUserProviderContext }}
    >
      {children}
    </UserContext.Provider>
  );
};
