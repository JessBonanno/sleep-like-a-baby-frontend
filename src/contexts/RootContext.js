import React from 'react';
import UsersProvider from './UsersContext';

export const RootProvider = ({children}) => {
  return (
    <UsersProvider>
      {children}
    </UsersProvider>
  );
};
