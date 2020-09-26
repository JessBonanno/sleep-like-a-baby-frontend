import React, {useContext, useState} from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {useHistory} from "react-router";
import {UsersContext} from "../../contexts/UsersContext";


export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const {getUserInfo} = useContext(UsersContext);
  const history = useHistory();

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axiosWithAuth().post('/auth/login', values)
        console.log(res)
       await localStorage.setItem('token', res.data.token)
      const token = await localStorage.getItem('token');
      await getUserInfo();
      if (token) {
        setLoading(false)
        console.log({token})
        history.push('/dashboard')
      }
    } catch (err ) {
      console.log(err)
        setLoading(false)
    }
  }

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true)
    axiosWithAuth().post('/auth/register', values)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
    setValues(initialValues)
  }

  return {values, loading, handleChanges, handleLogin, handleSignup};
};


