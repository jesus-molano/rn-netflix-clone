import { useState } from 'react'
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
import tw from 'twrnc'
import FormTextInput from '../components/FormTextInput'
import LoginButton from "../components/LoginButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [lastError, setLastError] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, serErrorPassword] = useState('')

  const handleSubmit = () => {
    if (!email || !password) return setLastError('All fields are required')
    setLastError(null)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigation.navigate('HomeTabs')
        }
      })
      .catch((error) => {
        setLastError(error.message)
      });
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
            <LoginButton setLastError={setLastError} errorEmail={errorEmail} errorPassword={errorPassword} email={email} password={password} handleSubmit={handleSubmit} text={'Login'} />
          </View>
          <Pressable
            style={tw`flex justify-center items-center mt-10`}
            onPress={() => navigation.navigate('Recovery')}
          >
            <Text style={tw`text-gray-400 text-lg`}>Forgot your password?</Text>
          </Pressable>
          <View
            style={tw`flex flex-row justify-center items-center gap-4 mt-8`}
          >
            <Text style={tw`text-white text-lg`}>Don't have an account?</Text>
            <Pressable
              title='SignIn'
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={tw`text-red-500 text-lg font-bold`}>Sign Up</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default SignInScreen
