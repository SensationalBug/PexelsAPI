import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardImage = ({ url }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => navigation.navigate("Image", url)}
    >
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: url.src.small
            ? url.src.small
            : "https://t3.ftcdn.net/jpg/05/38/52/48/360_F_538524834_KTWCegIa69mIWDLVx6Sc6tdkW6beiMBR.jpg",
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 5,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: 180,
  },
});

export default CardImage;
