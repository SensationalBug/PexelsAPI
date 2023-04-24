import { Fontisto } from "@expo/vector-icons";
import { Avatar } from "@react-native-material/core";
import { getImages } from "../api/pexels";
import React, { useEffect, useState } from "react";
import CardImage2 from "../components/CardImage2";

import * as WebBrowser from "expo-web-browser";
import DownloadButton from "../components/DownloadButton";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export const ImageScreen = ({ route }) => {
  const [newImages, setNewImages] = useState([]);
  const [DBS, setDBS] = useState({ height: 0, left: "100%" });

  const { params } = route;
  const { src, photographer, photographer_url, id } = params;
  const { photos = [] } = newImages;
  const loadSecondImages = async (searchTerm, perPage) => {
    const res = await getImages(searchTerm, perPage);
    setNewImages(res.data);
  };

  useEffect(() => {
    loadSecondImages(params.alt, 20);
  }, []);

  const handlePress = async () => {
    await WebBrowser.openBrowserAsync(photographer_url);
  };

  const showDownloadButtons = () => {
    DBS.height === 100
      ? setDBS({ height: 0, left: "100%" })
      : setDBS({ height: 100, left: "0%" });
  };

  return (
    <ScrollView style={styles.imageContainer}>
      <Image
        style={styles.imageStyles}
        resizeMode="contain"
        source={{ uri: src.large2x }}
      />
      <View style={styles.infoView}>
        <Avatar label={photographer} style={styles.avatar} />
        <TouchableOpacity
          style={{ width: "60%" }}
          onPress={() => handlePress()}
        >
          <Text style={styles.authorName}>{photographer}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={() => showDownloadButtons()}
        >
          <Fontisto name="download" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          left: DBS.left,
          flexWrap: "wrap",
          height: DBS.height,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <DownloadButton id={id} url={src.original} buttonName="Original" />
        <DownloadButton id={id} url={src.large2x} buttonName="Large2x" />
        <DownloadButton id={id} url={src.large} buttonName="Large" />
        <DownloadButton id={id} url={src.medium} buttonName="Medium" />
        <DownloadButton id={id} url={src.small} buttonName="Small" />
        <DownloadButton id={id} url={src.portrait} buttonName="Portrait" />
        <DownloadButton id={id} url={src.landscape} buttonName="Landscape" />
        <DownloadButton id={id} url={src.tiny} buttonName="Tiny" />
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {photos.map((elem, index) => {
          return <CardImage2 key={index} url={elem} />;
        })}
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  avatar: {},
  authorName: {
    color:"#fff",
    fontSize: 25,
    marginHorizontal: 10,
  },
  downloadButton: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});
