import React, {useContext, useState} from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {useNavigate} from "react-router";
import {UsersContext} from "../../contexts/UsersContext";


export const useForm = (initialValues) => {
  const {setLoggedIn} = useContext(UsersContext)
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      if (token) {
        setLoggedIn(true)
      }
        setLoading(false)
        navigate('/home')
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


