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
import { handleValidateForm } from '../helpers/handleValidateForm'
import tw from 'twrnc'
import FormTextInput from '../components/FormTextInput'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const errorMessage = handleValidateForm(email, password)
    if (errorMessage) return setError(errorMessage)
    navigation.navigate('SignUp')
  }

  console.log(error);

  return (
    <SafeAreaView style={tw`flex-1 justify-center bg-black px-4`}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={tw`flex gap-4`}>
            <Text style={tw`text-white text-lg`}>{error}</Text>
            <FormTextInput type='email' value={email} setValue={setEmail} setError={setError}/>
            <FormTextInput type='password' value={password} setValue={setPassword} setError={setError} />
            <TouchableOpacity
              style={tw`bg-transparent py-4 rounded-md border-2 border-gray-400 mt-4`}
              onPress={handleSubmit}
            >
              <Text style={tw`text-white text-center text-lg`}>Login</Text>
            </TouchableOpacity>
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
