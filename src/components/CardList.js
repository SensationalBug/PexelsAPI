import React from "react";
import { View, FlatList } from "react-native";
import CardImage from "./CardImage";

const CardList = ({ images }) => {
  const renderItem = ({ item }) => (
    <View style={{ flex: 1 }}>
      <CardImage url={item} />
    </View>
  );

  return (
    <View style={{flex:1}}>
      <FlatList
        data={images}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CardList;
