import React from 'react';
import {FlatList, Pressable, Text, View} from "react-native";
import tw from 'twrnc'

function ListOfElements({elements}) {
  return (
    <View>
      <View>
        <FlatList
          data={elements}
          renderItem={({item}) => (
            <Pressable
              key={item.value}
              style={tw`bg-sky-800 border-sky-400 text-white`}
            >
              <Text style={tw`text-white`}>
                {item.title}
              </Text>
            </Pressable>
          )}
          keyExtractor={item => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default ListOfElements;