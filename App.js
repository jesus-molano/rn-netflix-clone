import {useState} from 'react'
import {View} from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import AuthNavigator from './navigations/AuthNavigator'
import HomeTabNavigator from './navigations/HomeTabNavigator'
import {createStackNavigator} from "@react-navigation/stack";
import SearchScreen from "./screens/SearchScreen";
import {UserCircleIcon} from "react-native-heroicons/outline";
import tw from "twrnc";
import 'react-native-gesture-handler'

// import { supabase } from './lib/supabase'

export default function App() {
  const [user, setUser] = useState(true)
  const RootStack = createStackNavigator()
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {!user ? (
          <RootStack.Screen
            name={'Auth'}
            component={AuthNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <RootStack.Screen
            name={'HomeTabs'}
            component={HomeTabNavigator}
            options={{
              headerShown: false,
            }}
          />
        )}
        <RootStack.Screen name={'Search'} component={SearchScreen} options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
          headerTitle: '',
          headerRight: () => (
            <View style={tw`flex flex-row gap-4`}>
              <UserCircleIcon color={'white'} width={25} height={25}/>
            </View>
          )
        }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
