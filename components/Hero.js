import {useGetElements} from "../hooks/useGetElements";
import {useGetImage} from "../hooks/useGetImage";
import {ImageBackground, Text, View} from "react-native";
import tw from 'twrnc'
import {LinearGradient} from "expo-linear-gradient";

const Hero = ({element}) => {
  const {image} = useGetImage(element?.backdrop_path);

  const type = element.media_type
  const {data: details} = useGetElements(
    type === 'movie'
      ? `movie/${element.id}`
      : `tv/${element.id}`
  );
  return(
    <View style={tw`h-full bg-red-400 max-h-[500px] relative`}>
      <Text style={tw`text-white z-30 absolute bottom-10 text-3xl text-center`}>
        {element.title}
      </Text>
      <LinearGradient
        colors={['black', 'transparent', 'black']}
        locations={[0, 0.5, 1]}
        style={tw`w-full h-full z-20`}
      >
      </LinearGradient>
      {image && <ImageBackground source={{uri:image}} style={tw`w-full h-full  absolute -z-10`} />}
    </View>
  )
};

export default Hero;