import { useState } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable
} from 'react-native'

import tw from 'twrnc'
import { handleValidateEmail } from '../helpers/handleValidateForm'
import FormTextInput from '../components/FormTextInput'

export default function RecoveryScreen ({ navigation }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const isValidatedEmail = handleValidateEmail(email)
    if (!isValidatedEmail) return setError('Please enter a valid email')
    navigation.navigate('SignIn')
  }

  return (
    <SafeAreaView style={tw`flex-1 justify-center bg-black px-4`}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={tw`flex gap-4`}>
            <Text style={tw`text-white text-lg`}>{error}</Text>
            <FormTextInput type='email' value={email} setValue={setEmail} setError={setError}/>
            <TouchableOpacity
              style={tw`bg-transparent py-4 rounded-md border-2 border-gray-400 mt-4`}
              onPress={handleSubmit}
            >
              <Text style={tw`text-white text-center text-lg`}>
                Recovery Password
              </Text>
            </TouchableOpacity>

            <Pressable onPress={() => navigation.goBack()}>
              <Text
                style={tw`text-white text-center mt-6 font-medium text-gray-400 text-lg`}
              >
                {'<'}Go back
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
