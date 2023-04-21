import { Fontisto } from "@expo/vector-icons";
import { Avatar } from "@react-native-material/core";
import { getImages } from "../api/pexels";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import CardList from "../components/CardList";

export const ImageScreen = ({ route }) => {
  const { params } = route;
  const { src, photographer } = params;

  const [newImages, setNewImages] = useState([]);

  const loadSecondImages = async (searchTerm, perPage) => {
    const res = await getImages(searchTerm, perPage);
    setNewImages(res.data);
  };

  useEffect(() => {
    loadSecondImages(params.alt, 10);
  }, []);

  return (
    <ScrollView style={styles.imageContainer}>
      <Image
        style={styles.imageStyles}
        resizeMode="contain"
        source={{ uri: src.large }}
      />
      <View style={styles.infoView}>
        <Avatar label={photographer} style={styles.avatar} />
        <Text style={styles.authorName}>{photographer}</Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Fontisto name="download" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <CardList images={newImages.photos} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: "100%",
    backgroundColor: "#000",
  },
  imageStyles: {
    height: 350,
  },
  infoView: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  avatar: {},
  authorName: {
    width: "60%",
    fontSize: 25,
    marginHorizontal: 10,
  },
  downloadButton: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});
