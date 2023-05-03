import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './navigations/AuthNavigator'
import HomeNavigator from './navigations/HomeNavigator'
import 'react-native-gesture-handler'
import { useState } from 'react'

// import { supabase } from './lib/supabase'

export default function App () {
  const [user, setUser] = useState(false)
  return (
    <NavigationContainer>
      {
        !user
          ? <AuthNavigator />
          : <HomeNavigator />
      }
    </NavigationContainer>
  )
}
