import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";
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
import appleImage from "./images/Apple.png";

const GamePage = ({ navigation }) => {
  const [applePosition, setApplePosition] = useState({ x: 0, y: 0 });
  const appleAnimatedValue = useRef(new Animated.ValueXY({ x: 10, y: 10 })).current;
  const [didSlide, setDidSlide] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        setDidSlide(true);
        setApplePosition({ x: gesture.moveX, y: gesture.moveY });
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  useEffect(() => {
    navigation.setOptions({ headerShown: false });

    // Add the animation code here
    Animated.timing(appleAnimatedValue, {
      toValue: { x: 350, y: 100 },

      duration: 4000,
      useNativeDriver: false,
      isInteraction: false,
    }).start();
  }, [navigation, appleAnimatedValue]);

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <Animatable.Image
        source={wheel1Image}
        style={styles.wheel1Image}
        animation="rotate"
        iterationCount="infinite"
        duration={3000}
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

      <Animated.Image
        source={appleImage}
        style={
          didSlide
            ? [styles.appleImage, { top: applePosition.y, left: applePosition.x }]
            : [styles.appleImage, { transform: appleAnimatedValue.getTranslateTransform() }]
        }
        {...panResponder.panHandlers}
      />
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
    width: "8%",
    top: "17.5%",
    left: "8%",
  },
  wheelImage: {
    position: "absolute",
    resizeMode: "contain",
    width: "8%",
    top: "34%",
    left: "18%",
  },
  landfillImage: {
    position: "absolute",
    resizeMode: "contain",
  },
  binImage: {
    position: "absolute",
    resizeMode: "contain",
  },
  appleImage: {
    position: "absolute",
    resizeMode: "contain",
    width: "10%",
    height: "10%",
    top: "10%",
    left: "10%",
    zIndex: 999, // Add zIndex to make the apple draggable over other elements
  },
});

export default GamePage;