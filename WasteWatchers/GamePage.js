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

const GamePage = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <Image source={wheel1Image} style={styles.wheelImage} />
      <Image source={wheel2Image} style={styles.wheelImage} />
      <Image source={wheel3Image} style={styles.wheelImage} />
      <Image source={wheel4Image} style={styles.wheelImage} />
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
