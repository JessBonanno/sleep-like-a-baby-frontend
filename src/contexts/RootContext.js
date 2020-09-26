import React from 'react';
import UsersProvider from './UsersContext';
import SleepLogsProvider from "./SleepLogsContext";

export const RootProvider = ({children}) => {
  return (
    <UsersProvider>
      <SleepLogsProvider>
        {children}
      </SleepLogsProvider>
    </UsersProvider>
  );
};
