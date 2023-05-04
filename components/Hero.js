import {useGetElements} from "../hooks/useGetElements";
import {useGetImage} from "../hooks/useGetImage";
import {ImageBackground, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import InteractionsElement from "./InteractionsElement";
import tw from 'twrnc'

const Hero = ({element}) => {
  const {image} = useGetImage(element?.backdrop_path);

  const type = element.media_type
  const {data: details} = useGetElements(
    type === 'movie'
      ? `movie/${element.id}`
      : `tv/${element.id}`
  );
  return (
    <View style={tw`h-full bg-red-400 max-h-[520px] relative flex justify-end gap-4`}>
      <Text style={tw`text-white z-30 text-3xl text-center`}>
        {element.title}
      </Text>
      <LinearGradient
        colors={['black', 'transparent', 'black']}
        locations={[0, 0.5, 1]}
        style={tw`w-full h-full z-20 absolute inset-0 `}
      >
      </LinearGradient>
      <InteractionsElement />
      {image && <ImageBackground source={{uri: image}} style={tw`w-full h-full  absolute -z-10`}/>}
    </View>
  )
};

export default Hero;