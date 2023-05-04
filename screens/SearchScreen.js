import React from 'react';
import {SafeAreaView, Text, TextInput, View} from "react-native";
import {MagnifyingGlassIcon} from "react-native-heroicons/solid";
import {MicrophoneIcon} from "react-native-heroicons/outline";
import tw from "twrnc";

function SearchScreen() {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-black gap-4`}>
      <View style={tw`flex flex-row justify-start gap-4 px-4 py-4 bg-gray-800 rounded`}>
        <MagnifyingGlassIcon color={'white'} height={25} width={25}/>
        <TextInput
          style={tw`flex-1 text-white`}
          keyboardType={'default'}
          placeholder={'Search series, movies, genres, etc.'}
          placeholderTextColor={tw.color('gray-400')}
        />
        <MicrophoneIcon color={'white'} height={25} width={25}/>
      </View>
      <View style={tw`px-2`}>
        <Text style={tw`text-white text-2xl`}>Top searches</Text>
      </View>
    </SafeAreaView>
  );
}

export default SearchScreen;