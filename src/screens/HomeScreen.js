import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import CardList from "../components/CardList";
import ModalWindow from "../components/ModalWindow";
import { ImageContext } from "../context/ImageContext";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = ({ openSearch }) => {
  const { data, loadImages } = useContext(ImageContext);
  const navigation = useNavigation();

  useEffect(() => {
    loadImages();
  }, []);

  const handleSearch = async (searchTerm) => {
    await loadImages(searchTerm, 50);
  };

  const navigate = (screen, url = ".") => {
    navigation.navigate(screen, url);
  };

  return (
    <View style={styles.appContainer}>
      <ModalWindow openSearch={openSearch} handleSearch={handleSearch} />
      <Text style={styles.results}>
        {data.total_results}{" "}
        {data.total_results > 1 ? "Resultados" : "Resultado"}
      </Text>
      <CardList
        images={data.photos}
        navigateMethod={() => navigate("Image")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  results: {
    textAlign: "right",
    marginHorizontal: 10,
    color: "#fff",
    marginBottom: 5,
  },
});
