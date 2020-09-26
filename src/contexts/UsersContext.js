import React, {createContext, useState, Context} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const UsersContext = createContext({});

const UsersProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({
    id: '',
    email: '',
    username: '',
    recommended_hours: 0,
  });




  const getUserInfo = () => {
    axiosWithAuth().get('/users/current-user')
      .then(res => {
        console.log(res)
        setUserInfo(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const logout = () => {
    axiosWithAuth().get('/auth/logout')
      .then(res => {
        console.log(res)
        localStorage.removeItem('token')
        const token = localStorage.getItem('token')
        if (!token) {
          setLoggedIn(false)
        }
      })
    .catch(err => {
        console.log(err)
      })
  }

  return (
    <UsersContext.Provider value={{
      loggedIn,
      setLoggedIn,
      userInfo,
      setUserInfo,
      getUserInfo,
      logout,
    }}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider;

