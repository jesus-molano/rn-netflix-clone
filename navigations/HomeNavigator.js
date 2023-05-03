import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens'

const HomeNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        
      })}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeNavigator
