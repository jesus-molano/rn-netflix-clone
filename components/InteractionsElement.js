import React from 'react';
import tw from "twrnc";
import {Text, View} from "react-native";
import {CheckIcon, InformationCircleIcon} from "react-native-heroicons/outline";
import {PlayIcon} from "react-native-heroicons/solid";

function InteractionsElement() {
  return (
    <View style={tw`flex flex-row justify-center gap-8 z-20`}>
      <View style={tw`flex items-center`}>
        <CheckIcon color={'white'} width={25} height={25}/>
        <Text style={tw`text-white text-xs`}>My list</Text>
      </View>
      <View style={tw`flex flex-row items-center gap-2 px-4 py-2 bg-white rounded`}>
        <PlayIcon color={'black'} width={25} height={25}/>
        <Text style={tw`text-black text-lg font-semibold`}>Play</Text>
      </View>
      <View style={tw`flex items-center`}>
        <InformationCircleIcon color={'white'} width={25} height={25}/>
        <Text style={tw`text-white text-xs`}>Information</Text>
      </View>
    </View>
  );
}

export default InteractionsElement;