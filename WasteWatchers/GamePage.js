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

const trashImages = [
    require('./trashImages/Apple.png'),
    require('./trashImages/Banana.png'),
    require('./trashImages/Batteries.png'),
    require('./trashImages/Bottle.png'),
    require('./trashImages/CarBattery.png'),
    require('./trashImages/CoffeeCup.png'),
    require('./trashImages/FishBone.png'),
    require('./trashImages/Mask.png'),
    require('./trashImages/MetalCan.png'),
    require('./trashImages/Mug.png'),
    require('./trashImages/PaperPlane.png'),
    require('./trashImages/Phone.png'),
    require('./trashImages/Pizza.png'),
    require('./trashImages/PlasticBag.png'),
    require('./trashImages/Straw.png'),
    require('./trashImages/Tab.png'),
];

const getRandomTrashImage = () => {
    const randomIndex = Math.floor(Math.random() * trashImages.length);
    return trashImages[randomIndex];
};

// Generate a random duration between 1 and 5 seconds
const getRandomDuration = () => {
  return Math.floor(Math.random() * 2500) + 1000; // Random duration between 1 and 3.5 seconds
};

const GamePage = ({ navigation }) => {
  const [object1Position, setObject1Position] = useState({ x: 0, y: 0 });
  const [object2Position, setObject2Position] = useState({ x: 0, y: 0 });
  const [object3Position, setObject3Position] = useState({ x: 0, y: 0 });
  const object1AnimatedValue = useRef(new Animated.ValueXY({ x: 10, y: 10 })).current;
  const object2AnimatedValue = useRef(new Animated.ValueXY({ x: 10, y: 10 })).current;
  const object3AnimatedValue = useRef(new Animated.ValueXY({ x: 10, y: 10 })).current;
  const [didSlide1, setDidSlide1] = useState(false);
  const [didSlide2, setDidSlide2] = useState(false);
  const [didSlide3, setDidSlide3] = useState(false);
  const [object1Image, setObject1Image] = useState(getRandomTrashImage());
  const [object2Image, setObject2Image] = useState(getRandomTrashImage());
  const [object3Image, setObject3Image] = useState(getRandomTrashImage());
  const [inBin, setObjInBin] = useState(false);


  const panResponder1 = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        setDidSlide1(true);
        setObject1Position({ x: gesture.moveX - 70, y: gesture.moveY - 30 });
      },
      onPanResponder1Release: () => {
        // Check if apple is within ewaste bin
        if (
          (applePosition.x == orgBinPosition.x) && (applePosition.y == orgBinPosition.y)
        ) {
            setObjInBin(true);
            console.log("location matches");
          }
          else{
            setObjInBin(false);
            console.log("location doesn't matches");
          }
      },
    })
  ).current;

  const panResponder2 = useRef(
  PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      setDidSlide2(true);
      setObject2Position({ x: gesture.moveX - 70, y: gesture.moveY - 30 });
    },
    onPanResponderRelease: () => {},
  })
).current;

const panResponder3 = useRef(
  PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      setDidSlide3(true);
      setObject3Position({ x: gesture.moveX - 70, y: gesture.moveY - 30});
    },
    onPanResponderRelease: () => {},
  })
).current;

  useEffect(() => {
    navigation.setOptions({ headerShown: false });

    // Add the animation code here
    Animated.timing(object1AnimatedValue, {
      toValue: { x: 360, y: 220 },
      duration: getRandomDuration(),
      useNativeDriver: false,
      isInteraction: false,
    }).start();
    Animated.timing(object2AnimatedValue, {
      toValue: { x: 360, y: 220 },
      duration: getRandomDuration(),
      useNativeDriver: false,
      isInteraction: false,
    }).start();
    Animated.timing(object3AnimatedValue, {
      toValue: { x: 360, y: 220 },
      duration: getRandomDuration(),
      useNativeDriver: false,
      isInteraction: false,
    }).start();
  }, [navigation, object1AnimatedValue, object2AnimatedValue, object3AnimatedValue]);

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
        //Winsome's edit- image changes
      <Animated.Image source={ewasteBinImage} style={styles.binImage} />
      <Animated.Image source={recyclingBinImage} style={styles.binImage} />
      <Animated.Image source={organicsBinImage} style={styles.binImage } />
      <Animated.Image source={landfillImage} style={styles.landfillImage} />

      <Animated.Image
        source={appleImage}
        style={
          didSlide
            ? [styles.appleImage, { top: applePosition.y, left: applePosition.x}, {opacity: inBin ? 0 : 1 }]
            : [styles.appleImage, { transform: appleAnimatedValue.getTranslateTransform() }, {opacity: inBin ? 0 : 1 }]
        }
        {...panResponder.panHandlers}
      />


      <Animated.Image
        source={object1Image}
        style={
          didSlide1
            ? [styles.objectImage, { top: object1Position.y, left: object1Position.x }]
            : [styles.objectImage, { transform: object1AnimatedValue.getTranslateTransform() }]
        }
        {...panResponder1.panHandlers}
      />
      <Animated.Image
          source={object2Image}
          style={
            didSlide2
              ? [styles.objectImage, { top: object2Position.y, left: object2Position.x }]
              : [styles.objectImage, { transform: object2AnimatedValue.getTranslateTransform() }]
          }
          {...panResponder2.panHandlers}
        />
        <Animated.Image
          source={object3Image}
          style={
            didSlide3
              ? [styles.objectImage, { top: object3Position.y, left: object3Position.x }]
              : [styles.objectImage, { transform: object3AnimatedValue.getTranslateTransform() }]
          }
          {...panResponder3.panHandlers}
        />
    </View>
  );


  // OBJECT1RESPAWN NEEDS TESTING, ADD IT AFTER YOU HIDE OBJECT1 AFTER,
  // IT GETS DROPPED IN A BIN
  // Respawns Object1 with new image & at start of belt
  const object1Respawn = () => {
    const [object1Position, setObject1Position] = useState({ x: 0, y: 0 });
    const object1AnimatedValue = useRef(new Animated.ValueXY({ x: 10, y: 10 })).current;
    const [didSlide1, setDidSlide1] = useState(false);
    const [object1Image, setObject1Image] = useState(getRandomTrashImage());
    setDidSlide1(false);
    useEffect(() => {
      Animated.timing(object1AnimatedValue, {
        toValue: { x: 360, y: 220 },
        duration: getRandomDuration(),
        useNativeDriver: false,
        isInteraction: false,
      }).start();
    }, [navigation, object1AnimatedValue]);
    return (
      <Animated.Image
        source={object1Image}
        style={
          didSlide1
            ? [styles.objectImage, { top: object1Position.y, left: object1Position.x }]
            : [styles.objectImage, { transform: object1AnimatedValue.getTranslateTransform() }]
        }
        {...panResponder1.panHandlers}
      />
    );
  };
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
  objectImage: {
    position: "absolute",
    resizeMode: "contain",
    width: "20%",
    height: "20%",
    top: "10%",
    left: "10%",
    zIndex: 999, // Added zIndex to make the apple draggable over other elements
  },
});

export default GamePage;