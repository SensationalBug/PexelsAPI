import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ModalWindow = ({ openSearch, handleSearch }) => {
  const [searchValue, setsearchValue] = useState("")
  return (
    <View
      style={{
        bottom: openSearch ? 0 : 70,
        height: openSearch ? 70 : 0,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => setsearchValue(value)}
      />
      <TouchableOpacity
        style={styles.searchButtom}
        onPress={() => handleSearch(searchValue)}
      >
        <Text>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#fff",
    width: "70%",
    height: 50,
    paddingLeft: 15,
    fontSize: 20,
    borderRadius: 5,
  },
  searchButtom: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    borderRadius: 5,
    height: 50,
  },
});

export default ModalWindow;
