import React from 'react';
import {FlatList, Pressable, Text, View} from "react-native";
import tw from 'twrnc'
import {ElementCard} from "./ElementCard";

function ListOfElements({elements, title = '', poster = true }) {
  return (
    <View style={tw`flex gap-2`}>
      <Text style={tw`text-white text-xl mt-4`}>
        {title}
      </Text>
      <View>
        {
          <FlatList
            data={elements}
            renderItem={({item}) => (
              <ElementCard item={item} poster={poster}/>
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