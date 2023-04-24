import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ImageScreen } from "./src/screens/ImageScreen";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import pexelsLogo from "./assets/pexels.png";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import ImageContextProvider from "./src/context/ImageContext";

const App = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const Stack = createNativeStackNavigator();
  return (
    <ImageContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerLeft: () => (
                <Image style={styles.logo} source={pexelsLogo} />
              ),
              title: "Pedro Image Downloader",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => setOpenSearch(!openSearch)}
                  style={styles.search}
                >
                  {openSearch ? (
                    <Fontisto name="close-a" size={24} color="#fff" />
                  ) : (
                    <Fontisto name="search" size={24} color="#fff" />
                  )}
                </TouchableOpacity>
              ),
              headerStyle: { backgroundColor: "#000" },
              headerTitleStyle: { color: "#fff" },
            }}
          >
            {(props) => <HomeScreen {...props} openSearch={openSearch} />}
          </Stack.Screen>
          <Stack.Screen
            name="Image"
            component={ImageScreen}
            options={{
              headerStyle: { backgroundColor: "#000" },
              headerTitleStyle: { color: "#fff" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageContextProvider>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  search: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default App;
