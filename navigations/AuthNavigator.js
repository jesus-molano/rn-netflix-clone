import { createStackNavigator } from '@react-navigation/stack'
import { SignInScreen, SignUpScreen, RecoveryScreen } from '../screens'
import NetflixLogo from '../assets/netflix-logo.svg'
import SearchScreen from "../screens/SearchScreen";
import React from "react";

const AuthNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitle: () => <NetflixLogo width={100} height={30} />,
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitle: props => <NetflixLogo width={100} height={30} />,
          headerBackTitleVisible: false
        })}
      />
      <Stack.Screen
        name='Recovery'
        component={RecoveryScreen}
        options={{
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitle: props => <NetflixLogo width={100} height={30} />,
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen name={'SearchScreen'} component={SearchScreen} options={{title: 'Search'}}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator
