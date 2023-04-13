import React, {useState} from "react";
import {useRef, useEffect } from "react";
import { View, Image, StyleSheet, Animated, PanResponder } from "react-native";
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
import plasticBottleImage from "./images/Bottle.png";
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
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {
      //Muffin is in the like area
      if (
        position.x._value < -50 &&
        position.y._value > height / 2 - 150 &&
        position.y._value < height / 2
      ) {
          Animated.spring(position, {
            toValue: {x: -width - 10, y: position.y._value},
            friction: 10,
          }).start(() => {
            addLikedMuffin([...likedMuffins, muffins[currentMuffin].name]);
            if (currentMuffin == muffins.length - 1) setDone(true);
            else setCurrentMuffin(currentMuffin + 1);
            position.setValue({x: 0, y: 0});
          });
      }
      // Muffin is in the dislike area
      else if (
        position.x._value > 50 &&
        position.y._value > height / 2 - 150 &&
        position.y._value < height / 2
      ) {
        Animated.spring(position, {
          toValue: {x: width + 10, y: position.y._value},
          friction: 10,
        }).start(() => {
          addDislikedMuffin([...dislikedMuffins, appleImage[currentMuffin].name]);
          if (currentMuffin == appleImage.length - 1) setDone(true);
          else setCurrentMuffin(currentMuffin + 1);
          position.setValue({x: 0, y: 0});
        });
      }
      //Muffin is neither in the like nor the dislike area
      else {
        Animated.spring(position, {
          toValue: {x: 0, y: 0},
          friction: 10,
        }).start();
      }
    },
    });

    <Animatable.Image
            source={appleImage}
            style={[
              styles.appleImage,
              {
                transform: [
                  {
                    translateX: this.state.pan.x,
                  },
                  {
                    translateY: this.state.pan.y,
                  },
                ],
              },
            ]}
            {...this._panResponder.panHandlers}
    />

      <Image source={ewasteBinImage} style={styles.binImage} />
      <Image source={recyclingBinImage} style={styles.binImage} />
      <Image source={organicsBinImage} style={styles.binImage} />
      <Image source={landfillImage} style={styles.landfillImage} />
      <Image source={appleImage} style={styles.appleImage} />
      <Image source={plasticBottleImage} style={styles.plasticBottleImage} />
    </View>
  );

    const [likedMuffins, addLikedMuffin] = useState([]);
    const [dislikedMuffins, addDislikedMuffin] = useState([]);
    //State for checking the index of the current muffin
    const [currentMuffin, setCurrentMuffin] = useState(0);
    //State for checking if all the muffins are done
    const [done, setDone] = useState(false);



};



//Good code start here
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
  },
  binImage: {
    position: "absolute",
    resizeMode: "contain",
  },
  landfillImage: {
    position: "absolute",
    resizeMode: "contain",
  },
  appleImage: {
      position: "absolute",
      resizeMode: "contain",
    },
    plasticBottleImage: {
      position: "absolute",
      resizeMode: "contain",
    }
});

export default GamePage;
