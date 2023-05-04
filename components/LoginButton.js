import React, {useEffect, useState} from 'react';
import tw from "twrnc";
import {Text, TouchableOpacity} from "react-native";

function LoginButton({setLastError, email, password, errorEmail, errorPassword, handleSubmit}) {

  useEffect(() => {
    setLastError(errorEmail)
  }, [errorEmail])

  useEffect(() => {
    setLastError(errorPassword)
  }, [errorPassword])

  return (
    <TouchableOpacity
      style={tw.style(
        `bg-transparent py-4 rounded-md border-2 border-gray-400 mt-4`,
        ((errorEmail || errorPassword) || (email === '' || password === '')) && 'opacity-50'
      )}
      onPress={() => handleSubmit()}
      disabled={!!((errorEmail || errorPassword) || (email === '' || password === ''))}
    >
      <Text style={tw`text-white text-center text-lg`}>Register</Text>
    </TouchableOpacity>
  );
}

export default LoginButton;