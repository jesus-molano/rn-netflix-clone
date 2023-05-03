import { useEffect, useState } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback
} from 'react-native'
import { handleValidateForm } from '../helpers/handleValidateForm'
import tw from 'twrnc'
import FormTextInput from '../components/FormTextInput'

function SignUpScreen ({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, serErrorPassword] = useState('')
  const [lastError, setLastError] = useState('')

  useEffect(() => {
    setLastError(errorEmail)
    console.log(errorEmail);
  }, [errorEmail])

  useEffect(() => {
    setLastError(errorPassword)
    console.log(errorPassword);
  }, [errorPassword])
  

  const handleSubmit = () => {
    if(!email || !password) return setError('All fields are required')
    setLastError(null)
    navigation.navigate('SignIn')
  }

  return (
    <SafeAreaView style={tw`flex-1 justify-center bg-black px-4`}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={tw`flex gap-4`}>
            {lastError && <Text style={tw`text-white text-lg`}>{lastError}</Text>}
            <FormTextInput type='email' value={email} setValue={setEmail} setError={setErrorEmail}/>
            <FormTextInput type='password' value={password} setValue={setPassword} setError={serErrorPassword} />
            <TouchableOpacity
              style={tw.style(
                `bg-transparent py-4 rounded-md border-2 border-gray-400 mt-4`,
                (errorEmail || errorPassword) && 'opacity-50'
                )}
              onPress={handleSubmit}
              disabled={(!errorEmail && !errorPassword) ? false : true}

            >
              <Text style={tw`text-white text-center text-lg`}>Register</Text>
            </TouchableOpacity>
          </View>
          <View
            style={tw`flex flex-row justify-center items-center gap-4 mt-8`}
          >
            <Text style={tw`text-white text-lg`}>Already have an account?</Text>
            <Pressable
              title='SignIn'
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={tw`text-red-500 text-lg font-bold`}>Sign In</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default SignUpScreen
