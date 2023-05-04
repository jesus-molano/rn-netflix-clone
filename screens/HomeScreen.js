import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import tw from 'twrnc'
import {useSetHeroElement} from "../hooks/useSetHeroElement";
import {useGetElements} from "../hooks/useGetElements";
import Hero from "../components/Hero";

const HomeScreen = () => {

  const {data: trendingData, isLoading: isTrendingLoading} = useGetElements("trending/all/day");
  const [selectedElement, setSelectedElement] = useState(0);
  const [heroElement] = useSetHeroElement(trendingData?.results, selectedElement);
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      {heroElement && <Hero element={heroElement}/>}
      <View style={tw`flex gap-4`}>
        <Text style={tw`text-white`}>Hello</Text>
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen
