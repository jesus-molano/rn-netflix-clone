import React, {useEffect, useState} from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import tw from 'twrnc'
import {useSetHeroElement} from "../hooks/useSetHeroElement";
import {useGetElements} from "../hooks/useGetElements";
import Hero from "../components/Hero";
import ListOfElements from "../components/ListOfElements";

const HomeScreen = () => {

  const {data: trendingData, isLoading: isTrendingLoading} = useGetElements("trending/all/day");
  const {data: upComingData, isLoading: isUpComingLoading} = useGetElements("movie/upcoming");
  const [selectedElement, setSelectedElement] = useState(0);
  const [heroElement] = useSetHeroElement(trendingData?.results, selectedElement);

  const trending = trendingData?.results
  const upComing= upComingData?.results
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw`flex-1 bg-black`}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <SafeAreaView style={tw`flex flex-1 gap-4`}>
            {heroElement && <Hero element={heroElement}/>}
            {trendingData && <ListOfElements elements={trending} title={'Trending'}/>}
            {upComingData && <ListOfElements elements={upComing} title={'Popular Movies'} />}
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen
