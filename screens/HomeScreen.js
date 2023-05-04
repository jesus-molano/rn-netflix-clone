import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import tw from 'twrnc'

const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 justify-center bg-black px-4`}>
      <View style={tw`flex gap-4`}>
        <Text style={tw`text-white text-lg`}>Home Screen</Text>
        <Text style={tw`text-white text-lg`}>{API_KEY}</Text>
        <Text style={tw`text-white text-lg`}>{API_URL}</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
