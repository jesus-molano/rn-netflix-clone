import {ImageBackground, Pressable, Text, View} from "react-native";
import tw from "twrnc";
import React from "react";
import {useGetImage} from "../hooks/useGetImage";
import {LinearGradient} from "expo-linear-gradient";

export const ElementCard = ({item, poster, index, setSelectedElement}) => {
  const typeOfImage = poster ? 'poster_path' : 'backdrop_path'

  const {image} = useGetImage(item?.[typeOfImage])

  return (
    <Pressable
      key={item.id}
      style={tw`bg-gray-800 h-45 w-30 flex justify-end items-center pb-4 rounded-lg overflow-hidden`}
      onPress={() => setSelectedElement && setSelectedElement(index)}
    >

      {image && <ImageBackground source={{uri: image}} style={tw`absolute inset-0 -z-10 rounded-lg`}/>}
      {!poster && (
        <>
          <Text style={tw`text-white z-30 text-center`}>
            {item.title || item.name}
          </Text>
          <LinearGradient
            colors={['transparent', 'black']}
            locations={[0, 1]}
            style={tw`z-20 absolute inset-0 rounded-lg `}
          >
          </LinearGradient>
        </>
      )}
    </Pressable>
  )
}
