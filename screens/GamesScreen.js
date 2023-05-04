import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import tw from "twrnc";

function GamesScreen(props) {
  return (
    <SafeAreaView style={tw`flex-1 justify-center bg-black px-4`}>
      <View style={tw`flex gap-4`}>
        <Text style={tw`text-white text-lg`}>Games</Text>
      </View>
    </SafeAreaView>
  );
}

export default GamesScreen;