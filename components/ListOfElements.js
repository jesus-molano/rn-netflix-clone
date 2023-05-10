import React from 'react';
import {FlatList, Pressable, Text, View} from "react-native";
import tw from 'twrnc'
import {ElementCard} from "./ElementCard";

function ListOfElements({elements, title = '', poster = true , setSelectedElement = null}) {
  return (
    <View style={tw`flex gap-2`}>
      <Text style={tw`text-white text-xl mt-4`}>
        {title}
      </Text>
      <View>
        {
          <FlatList
            data={elements}
            renderItem={({item, index}) => (
              <ElementCard item={item} poster={poster} setSelectedElement={setSelectedElement} index={index}/>
            )}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={tw`w-2`}/>}
            contentContainerStyle={tw`p-2`}
          />
        }
      </View>
    </View>
  );
}

export default ListOfElements;