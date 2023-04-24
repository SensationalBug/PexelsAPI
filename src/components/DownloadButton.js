import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const DownloadButton = ({ url, buttonName, id }) => {
    const downloadFile = async () => {
      let fileUri = FileSystem.documentDirectory + id + ".jpeg";
      const { uri } = await FileSystem.downloadAsync(url, fileUri);
    
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        const assets = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync("Download", assets, false);
      }
    };

  const handleDownload = () => downloadFile();

  return (
    <TouchableOpacity style={styles.button} onPress={() => handleDownload()}>
      <Text style={{color:"#fff"}}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    height: 40,
    width: "22%",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DownloadButton;
