import {Pressable, View} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomeScreen, DownloadsScreen, GamesScreen, WhatsNewScreen} from '../screens'
import {
  HomeIcon,
  PlayCircleIcon,
  RocketLaunchIcon,
  ArrowDownCircleIcon,
  UserCircleIcon
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeIconSolid,
  PlayCircleIcon as PlayCircleIconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
  ArrowDownCircleIcon as ArrowDownCircleIconSolid,
  MagnifyingGlassIcon
} from "react-native-heroicons/solid";
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import NetflixLogoMini from '../assets/netflix-logo-mini.svg'

const HomeTabNavigator = () => {
  const Tab = createBottomTabNavigator()
  const navigation = useNavigation()
  const headerStyleOptions = {
    headerStyle: {backgroundColor: 'black'},
    headerTintColor: 'white',
    headerRight: () => (
      <View style={tw`flex flex-row gap-4`}>
        <Pressable onPress={() => navigation.navigate('Search')}>
          <MagnifyingGlassIcon color={'white'} height={25} width={25}/>
        </Pressable>
        <UserCircleIcon color={'white'} width={25} height={25}/>
      </View>
    )
  }

  return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return focused ? <HomeIconSolid color={tw.color('white')}/> :
                <HomeIcon color={tw.color('gray-400')} size={20}/>
            } else if (route.name === 'Games') {
              return focused ? <RocketLaunchIconSolid color={tw.color('white')}/> :
                <RocketLaunchIcon color={tw.color('gray-400')} size={20}/>
            } else if (route.name === "What's new") {
              return focused ? <PlayCircleIconSolid color={tw.color('white')}/> :
                <PlayCircleIcon color={tw.color('gray-400')} size={20}/>
            } else if (route.name === "Downloads") {
              return focused ? <ArrowDownCircleIconSolid color={tw.color('white')}/> :
                <ArrowDownCircleIcon color={tw.color('gray-400')} size={20}/>
            }
          },
          tabBarStyle: {backgroundColor: 'black'},
          tabBarLabelStyle: {marginTop: -8, marginBottom: 8, color: 'white'},
          unmountOnBlur: true,
        })}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            ...headerStyleOptions,
            headerLeft: () => <NetflixLogoMini height={40} width={30}/>,
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Tab.Screen
          name='Games'
          component={GamesScreen}
          options={{
            ...headerStyleOptions
          }}
        />
        <Tab.Screen
          name="What's new"
          component={WhatsNewScreen}
          options={{
            ...headerStyleOptions
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={DownloadsScreen}
          options={{
            ...headerStyleOptions
          }}
        />
      </Tab.Navigator>
  )
}

export default HomeTabNavigator
