import React, { useEffect, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline'
import tw from 'twrnc'
import { debounce } from '../helpers/debounce'
import { handleValidateEmail } from '../helpers/handleValidateForm'
import { handleValidatePassword } from '../helpers/handleValidateForm'

const initialState = {
  placeholder: '',
  keyboardType: 'default',
  value: '',
  errorMessage: '',
  onChangeText: () => {}
}

const FormTextInput = ({ type, value, setValue, setError }) => {
  const [element, setElement] = useState(initialState)
  const [isValidInput, setIsValidInput] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = inputText => {
    setValue(inputText)
  }

  useEffect(() => {
    if (type === 'email') {
      setElement({
        placeholder: 'Email or phone number',
        keyboardType: 'email-address',
        errorMessage: 'Please enter a valid email address',
        onChangeText: handleInputChange
      })
    }
    if (type === 'password') {
      setElement({
        placeholder: 'Password',
        keyboardType: 'default',
        errorMessage: 'Please enter a valid password',
        onChangeText: handleInputChange
      })
    }
  }, [])

  useEffect(() => {
    if (type === 'email') {
      const isValidEmail = handleValidateEmail(value)
      !isValidEmail
        ? setError(element.errorMessage)
        : setError(null)
      setIsValidInput(isValidEmail)
      return
    }
    if (type === 'password') {
      const isValidPassword = handleValidatePassword(value)
      !isValidPassword
        ? setError(element.errorMessage)
        : setError(null)
      setIsValidInput(isValidPassword)
      return
    }
    setError(null)
  }, [value])

  return (
    <View>
      <TextInput
        style={tw.style(
          `text-lg bg-gray-700 p-4 rounded-md text-white`,
          isFocused && 'border-2 border-gray-400 bg-gray-600',
          !isValidInput &&
            value !== '' &&
            ' border-2 border-red-600 bg-gray-600'
        )}
        placeholder={element.placeholder}
        placeholderTextColor={tw.color('text-gray-300')}
        keyboardType={element.keyboardType}
        autoCapitalize='none'
        autoCorrect={false}
        value={value}
        onChangeText={element.onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={!isPasswordVisible}
      />
      {type === 'password' && (
        <Pressable
          style={tw`absolute right-4 top-4`}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <EyeIcon height={30} width={30} style={tw`text-white`} />
          ) : (
            <EyeSlashIcon height={30} width={30} style={tw`text-white`} />
          )}
        </Pressable>
      )}
    </View>
  )
}

export default FormTextInput
