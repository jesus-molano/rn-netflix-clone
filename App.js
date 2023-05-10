import {View} from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import AuthNavigator from './navigations/AuthNavigator'
import HomeTabNavigator from './navigations/HomeTabNavigator'
import {createStackNavigator} from "@react-navigation/stack";
import SearchScreen from "./screens/SearchScreen";
import {UserCircleIcon} from "react-native-heroicons/outline";
import useAuthentication from './hooks/useAuthentication'
import tw from "twrnc";
import 'react-native-gesture-handler'

export default function App() {
  const RootStack = createStackNavigator()

  const {user} = useAuthentication()

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
