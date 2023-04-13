import React from "react";
import { View, Image, StyleSheet } from "react-native";
import backgroundImage from "./images/belt_static.png";
import wheel1Image from "./images/wheel1.png";
import wheel2Image from "./images/wheel2.png";
import wheel3Image from "./images/wheel3.png";
import wheel4Image from "./images/wheel4.png";
import landfillImage from "./images/Landfill.png";
import ewasteBinImage from "./images/EwasteBin.png";
import recyclingBinImage from "./images/RecyclingBin.png";
import organicsBinImage from "./images/OrganicsBin.png";
import * as Animatable from "react-native-animatable";
//base layout

const GamePage = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <Animatable.Image
        source={wheel1Image}
        style={styles.wheel1Image}
        animation="rotate"
        iterationCount="infinite"
        duration={3000} // You can adjust the duration and other properties as needed
      />
      <Animatable.Image
        source={wheel2Image}
        style={styles.wheel2Image}
        animation="rotate"
        iterationCount="infinite"
        duration={3000}
      />
      <Animatable.Image
        source={wheel3Image}
        style={styles.wheel3Image}
        animation="rotate"
        iterationCount="infinite"
        duration={3000}
      />
      <Animatable.Image
        source={wheel4Image}
        style={styles.wheel4Image}
        animation="rotate"
        iterationCount="infinite"
        duration={3000}
      />
      <Image source={ewasteBinImage} style={styles.binImage} />
      <Image source={recyclingBinImage} style={styles.binImage} />
      <Image source={organicsBinImage} style={styles.binImage} />
      <Image source={landfillImage} style={styles.landfillImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  wheel1Image: {
    position: "absolute",
    resizeMode: "contain",
    top: "79%",
    left: "41%",
  },
  wheel2Image: {
    position: "absolute",
    resizeMode: "contain",
    top: "57%",
    left: "29%",
  },
  wheel3Image: {
    position: "absolute",
    resizeMode: "contain",
    width: "8%",
    top: "34%",
    left: "18%",
  },
  wheel4Image: {
    position: "absolute",
    resizeMode: "contain",
    width: "5%",
    top: "14%",
    left: "8%",
  },
  wheelImage: {
    position: "absolute",
    resizeMode: "contain",
  },
  binImage: {
    position: "absolute",
    resizeMode: "contain",
  },
  landfillImage: {
    position: "absolute",
    resizeMode: "contain",
  },
});

export default GamePage;
