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
import AppleImage from './trashImages/Apple.png';
import BananaImage from './trashImages/Banana.png';
import PizzaImage from './trashImages/Pizza.png';
import FishBoneImage from './trashImages/FishBone.png';


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

const organicWaste = [AppleImage, BananaImage, PizzaImage, FishBoneImage];


const recyclables = [
  require('./trashImages/Bottle.png'),
  require('./trashImages/CoffeeCup.png'),
  require('./trashImages/PaperPlane.png'),
  require('./trashImages/MetalCan.png'),
];

const landfillWaste = [
  require('./trashImages/Mask.png'),
  require('./trashImages/Mug.png'),
  require('./trashImages/PlasticBag.png'),
  require('./trashImages/Straw.png'),
];

const electronicsWaste = [
  require('./trashImages/Batteries.png'),
  require('./trashImages/CarBattery.png'),
  require('./trashImages/Phone.png'),
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
  const [lBinPosition, setLBinPosition] = useState({x:0, y:0 });
  const orgBinPosition = { x: 365, y: 75 };
  const recBinPosition = { x: 216, y: 4 };
  const eBinPosition = { x: 26, y: 182 };



  const respawnObject = (objectNumber) => {
    const randomTrashImage = getRandomTrashImage();
    const XPosition = 10;
    const YPosition = 10;
    const slideDuration = getRandomDuration();

    switch (objectNumber) {
      case 1:
        setDidSlide1(false); // Reset slide state
          setObject1Image(randomTrashImage);
          object1AnimatedValue.setValue({ x: 10, y: 10 }); // Reset initial position
          Animated.timing(object1AnimatedValue, {
            toValue: { x: 350, y: 240 }, // Update to slide to bottom position
            duration: slideDuration, // Set slide duration
            useNativeDriver: false,
          }).start(() => {
            setDidSlide1(true);
            setObject1Position({ x: 416, y: 272 });// Set slide state to true after animation completes
          });
          break;
      case 2:
        setDidSlide2(false); // Reset slide state
          setObject2Image(randomTrashImage);
          object2AnimatedValue.setValue({ x: 10, y: 10 }); // Reset initial position
          Animated.timing(object2AnimatedValue, {
            toValue: { x: 350, y: 240 }, // Update to slide to bottom position
            duration: slideDuration, // Set slide duration
            useNativeDriver: false,
          }).start(() => {
            setDidSlide2(true);
            setObject2Position({ x: 416, y: 272 });// Set slide state to true after animation completes
          });
          break;
      case 3:
        setDidSlide3(false); // Reset slide state
          setObject3Image(randomTrashImage);
          object3AnimatedValue.setValue({ x: 10, y: 10 }); // Reset initial position
          Animated.timing(object3AnimatedValue, {
            toValue: { x: 350, y: 240 }, // Update to slide to bottom position
            duration: slideDuration, // Set slide duration
            useNativeDriver: false,
          }).start(() => {
            setDidSlide3(true);
            setObject3Position({ x: 416, y: 272 });// Set slide state to true after animation completes
          });
          break;
    }
  };


  // Use orgBinPosition in your panResponder1 code
  const panResponder1 = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        setDidSlide1(true);
        setObject1Position({ x: gesture.moveX - 70, y: gesture.moveY - 30 });
      },
      onPanResponderRelease: (event, gesture) => {

        const obj1X = gesture.moveX - 80;
        const obj1Y = gesture.moveY - 30;
        const orgBinX = orgBinPosition.x + 40;
        const orgBinY = orgBinPosition.y - 20;
        const radius = 80; // Set the radius around the bin

        const recBinX = recBinPosition.x;
        const recBinY = recBinPosition.y;

        const eBinX = eBinPosition.x;
        const eBinY = eBinPosition.y;

        // Calculate the distance between the object and the bin using Pythagorean theorem
        const distanceOrg = Math.sqrt(Math.pow(obj1X - orgBinX, 2) + Math.pow(obj1Y - orgBinY, 2));
        const distanceRec = Math.sqrt(Math.pow(obj1X - recBinX, 2) + Math.pow(obj1Y - recBinY, 2));
        const distanceE = Math.sqrt(Math.pow(obj1X - eBinX, 2) + Math.pow(obj1Y - eBinY, 2));

        // Define the boundaries of the organicsBin area with the radius taken into account
        const orgBinLeft = orgBinX - radius;
        const orgBinRight = orgBinX + 200 + radius;
        const orgBinTop = orgBinY - radius;
        const orgBinBottom = orgBinY + 100 + radius;

        // Define the boundaries of the recyclingBin area with the radius taken into account
        const recBinLeft = recBinX - radius;
        const recBinRight = recBinX + 200 + radius;
        const recBinTop = recBinY - radius;
        const recBinBottom = recBinY + 100 + radius;

        // Define the boundaries of the eWasteBin area with the radius taken into account
        const eBinLeft = eBinX - radius;
        const eBinRight = eBinX + 200 + radius;
        const eBinTop = eBinY - radius;
        const eBinBottom = eBinY + 100 + radius;

        // Check if item is within ewaste bin
        if ((obj1X >= orgBinLeft) && (obj1X <= orgBinRight) && (obj1Y >= orgBinTop) && (obj1Y <= orgBinBottom) && (distanceOrg <= radius)) {
          setObjInBin(true);
          if (organicWaste.includes(object1Image)) {
            //counter++ or something
            console.log(obj1X, obj1Y);
            console.log("location matches AND ITEM MATCHES!");
            Animated.timing(object1AnimatedValue, {
              toValue: { x: 10, y: 10 }, // Reset to initial position
              duration: 0,
              useNativeDriver: false,
            }).start(() => {
              respawnObject(1); // Respawn object 1
            });
          } else {
            console.log("location matches BUT ITEM DOES NOT MATCH!");
            console.log(obj1X, obj1Y);
            Animated.timing(object1AnimatedValue, {
              toValue: { x: 10, y: 10 }, // Reset to initial position
              duration: 0,
              useNativeDriver: false,
            }).start(() => {
              respawnObject(1); // Respawn object 1
            });
          }
        } else if ((obj1X >= recBinLeft) && (obj1X <= recBinRight) && (obj1Y >= recBinTop) && (obj1Y <= recBinBottom) && (distanceRec <= radius)) {
            setObjInBin(true);
              if (recyclables.includes(object1Image)) {
                //counter++ or something
                console.log(obj1X, obj1Y);
                console.log("location matches AND ITEM MATCHES!");
                Animated.timing(object1AnimatedValue, {
                  toValue: { x: 10, y: 10 }, // Reset to initial position
                  duration: 0,
                  useNativeDriver: false,
                }).start(() => {
                  respawnObject(1); // Respawn object 1
                });
              } else {
                console.log("location matches BUT ITEM DOES NOT MATCH!");
                console.log(obj1X, obj1Y);
                Animated.timing(object1AnimatedValue, {
                  toValue: { x: 10, y: 10 }, // Reset to initial position
                  duration: 0,
                  useNativeDriver: false,
                }).start(() => {
                  respawnObject(1); // Respawn object 1
                });
              }
          } else if ((obj1X >= eBinLeft) && (obj1X <= eBinRight) && (obj1Y >= eBinTop) && (obj1Y <= eBinBottom) && (distanceE <= radius)) {
            setObjInBin(true);
              if (electronicsWaste.includes(object1Image)) {
                //counter++ or something
                console.log(obj1X, obj1Y);
                console.log("location matches AND ITEM MATCHES!");
                Animated.timing(object1AnimatedValue, {
                  toValue: { x: 10, y: 10 }, // Reset to initial position
                  duration: 0,
                  useNativeDriver: false,
                }).start(() => {
                  respawnObject(1); // Respawn object 1
                });
              } else {
                console.log("location matches BUT ITEM DOES NOT MATCH!");
                console.log(obj1X, obj1Y);
                Animated.timing(object1AnimatedValue, {
                  toValue: { x: 10, y: 10 }, // Reset to initial position
                  duration: 0,
                  useNativeDriver: false,
                }).start(() => {
                  respawnObject(1); // Respawn object 1
                });
              }
          }
        else {
          console.log("location does not match");
          console.log(obj1X, obj1Y);
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
        onPanResponderRelease: (event, gesture) => {

          const obj2X = gesture.moveX - 80;
          const obj2Y = gesture.moveY - 30;
          const orgBinX = orgBinPosition.x + 40;
          const orgBinY = orgBinPosition.y - 20;
          const radius = 80; // Set the radius around the bin

          const recBinX = recBinPosition.x;
          const recBinY = recBinPosition.y;

          const eBinX = eBinPosition.x;
          const eBinY = eBinPosition.y;

          // Calculate the distance between the object and the bin using Pythagorean theorem
          const distanceOrg = Math.sqrt(Math.pow(obj2X - orgBinX, 2) + Math.pow(obj2Y - orgBinY, 2));
          const distanceRec = Math.sqrt(Math.pow(obj2X - recBinX, 2) + Math.pow(obj2Y - recBinY, 2));
          const distanceE = Math.sqrt(Math.pow(obj2X - eBinX, 2) + Math.pow(obj2Y - eBinY, 2));

          // Define the boundaries of the organicsBin area with the radius taken into account
          const orgBinLeft = orgBinX - radius;
          const orgBinRight = orgBinX + 200 + radius;
          const orgBinTop = orgBinY - radius;
          const orgBinBottom = orgBinY + 100 + radius;

          // Define the boundaries of the recyclingBin area with the radius taken into account
          const recBinLeft = recBinX - radius;
          const recBinRight = recBinX + 200 + radius;
          const recBinTop = recBinY - radius;
          const recBinBottom = recBinY + 100 + radius;

          // Define the boundaries of the eWasteBin area with the radius taken into account
          const eBinLeft = eBinX - radius;
          const eBinRight = eBinX + 200 + radius;
          const eBinTop = eBinY - radius;
          const eBinBottom = eBinY + 100 + radius;

          // Check if item is within ewaste bin
          if ((obj2X >= orgBinLeft) && (obj2X <= orgBinRight) && (obj2Y >= orgBinTop) && (obj2Y <= orgBinBottom) && (distanceOrg <= radius)) {
            setObjInBin(true);
            if (organicWaste.includes(object2Image)) {
              //counter++ or something
              console.log(obj2X, obj2Y);
              console.log("location matches AND ITEM MATCHES!");
              Animated.timing(object2AnimatedValue, {
                toValue: { x: 10, y: 10 }, // Reset to initial position
                duration: 0,
                useNativeDriver: false,
              }).start(() => {
                respawnObject(2); // Respawn object 1
              });
            } else {
              console.log("location matches BUT ITEM DOES NOT MATCH!");
              console.log(obj2X, obj2Y);
              Animated.timing(object2AnimatedValue, {
                toValue: { x: 10, y: 10 }, // Reset to initial position
                duration: 0,
                useNativeDriver: false,
              }).start(() => {
                respawnObject(2); // Respawn object 1
              });
            }
          } else if ((obj2X >= recBinLeft) && (obj2X <= recBinRight) && (obj2Y >= recBinTop) && (obj2Y <= recBinBottom) && (distanceRec <= radius)) {
            setObjInBin(true);
              if (recyclables.includes(object2Image)) {
                //counter++ or something
                console.log(obj2X, obj2Y);
                console.log("location matches AND ITEM MATCHES!");
                Animated.timing(object2AnimatedValue, {
                  toValue: { x: 10, y: 10 }, // Reset to initial position
                  duration: 0,
                  useNativeDriver: false,
                }).start(() => {
                  respawnObject(2); // Respawn object 1
                });
              } else {
                console.log("location matches BUT ITEM DOES NOT MATCH!");
                console.log(obj2X, obj2Y);
                Animated.timing(object2AnimatedValue, {
                  toValue: { x: 10, y: 10 }, // Reset to initial position
                  duration: 0,
                  useNativeDriver: false,
                }).start(() => {
                  respawnObject(2); // Respawn object 1
                });
              }
          } else if ((obj2X >= eBinLeft) && (obj2X <= eBinRight) && (obj2Y >= eBinTop) && (obj2Y <= eBinBottom) && (distanceE <= radius)) {
            setObjInBin(true);
              if (electronicsWaste.includes(object2Image)) {
                //counter++ or something
                console.log(obj2X, obj2Y);
                console.log("location matches AND ITEM MATCHES!");
                Animated.timing(object2AnimatedValue, {
                  toValue: { x: 10, y: 10 }, // Reset to initial position
                  duration: 0,
                  useNativeDriver: false,
                }).start(() => {
                  respawnObject(2); // Respawn object 1
                });
              } else {
                console.log("location matches BUT ITEM DOES NOT MATCH!");
                console.log(obj2X, obj2Y);
                Animated.timing(object2AnimatedValue, {
                  toValue: { x: 10, y: 10 }, // Reset to initial position
                  duration: 0,
                  useNativeDriver: false,
                }).start(() => {
                  respawnObject(2); // Respawn object 2
                });
              }
          } else {
            console.log("location does not match");
            console.log(obj2X, obj2Y);
          }
        },
      })
      ).current;

// Use orgBinPosition in your panResponder1 code
  const panResponder3 = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        setDidSlide3(true);
        setObject3Position({ x: gesture.moveX - 70, y: gesture.moveY - 30 });
      },
      onPanResponderRelease: (event, gesture) => {

        const obj3X = gesture.moveX - 80;
        const obj3Y = gesture.moveY - 30;
        const orgBinX = orgBinPosition.x + 40;
        const orgBinY = orgBinPosition.y - 20;
        const radius = 80; // Set the radius around the bin

        const recBinX = recBinPosition.x;
        const recBinY = recBinPosition.y;

        const eBinX = eBinPosition.x;
        const eBinY = eBinPosition.y;

        // Calculate the distance between the object and the bin using Pythagorean theorem
        const distanceOrg = Math.sqrt(Math.pow(obj3X - orgBinX, 2) + Math.pow(obj3Y - orgBinY, 2));
        const distanceRec = Math.sqrt(Math.pow(obj3X - recBinX, 2) + Math.pow(obj3Y - recBinY, 2));
        const distanceE = Math.sqrt(Math.pow(obj3X - eBinX, 2) + Math.pow(obj3Y - eBinY, 2));

        // Define the boundaries of the organicsBin area with the radius taken into account
        const orgBinLeft = orgBinX - radius;
        const orgBinRight = orgBinX + 200 + radius;
        const orgBinTop = orgBinY - radius;
        const orgBinBottom = orgBinY + 100 + radius;

        // Define the boundaries of the recyclingBin area with the radius taken into account
        const recBinLeft = recBinX - radius;
        const recBinRight = recBinX + 200 + radius;
        const recBinTop = recBinY - radius;
        const recBinBottom = recBinY + 100 + radius;

        // Define the boundaries of the eWasteBin area with the radius taken into account
        const eBinLeft = eBinX - radius;
        const eBinRight = eBinX + 200 + radius;
        const eBinTop = eBinY - radius;
        const eBinBottom = eBinY + 100 + radius;

        // Check if item is within ewaste bin
        if ((obj3X >= orgBinLeft) && (obj3X <= orgBinRight) && (obj3Y >= orgBinTop) && (obj3Y <= orgBinBottom) && (distanceOrg <= radius)) {
          setObjInBin(true);
          if (organicWaste.includes(object3Image)) {
            //counter++ or something
            console.log(obj3X, obj3Y);
            console.log("location matches AND ITEM MATCHES!");
            Animated.timing(object3AnimatedValue, {
              toValue: { x: 10, y: 10 }, // Reset to initial position
              duration: 0,
              useNativeDriver: false,
            }).start(() => {
              respawnObject(3); // Respawn object 1
            });
          } else {
            console.log("location matches BUT ITEM DOES NOT MATCH!");
            console.log(obj3X, obj3Y);
            Animated.timing(object3AnimatedValue, {
              toValue: { x: 10, y: 10 }, // Reset to initial position
              duration: 0,
              useNativeDriver: false,
            }).start(() => {
              respawnObject(3); // Respawn object 1
            });
          }
        } else if ((obj3X >= recBinLeft) && (obj3X <= recBinRight) && (obj3Y >= recBinTop) && (obj3Y <= recBinBottom) && (distanceRec <= radius)) {
          setObjInBin(true);
            if (recyclables.includes(object3Image)) {
              //counter++ or something
              console.log(obj3X, obj3Y);
              console.log("location matches AND ITEM MATCHES!");
              Animated.timing(object3AnimatedValue, {
                toValue: { x: 10, y: 10 }, // Reset to initial position
                duration: 0,
                useNativeDriver: false,
              }).start(() => {
                respawnObject(3); // Respawn object 1
              });
            } else {
              console.log("location matches BUT ITEM DOES NOT MATCH!");
              console.log(obj3X, obj3Y);
              Animated.timing(object3AnimatedValue, {
                toValue: { x: 10, y: 10 }, // Reset to initial position
                duration: 0,
                useNativeDriver: false,
              }).start(() => {
                respawnObject(3); // Respawn object 1
              });
            }
        } else if ((obj3X >= eBinLeft) && (obj3X <= eBinRight) && (obj3Y >= eBinTop) && (obj3Y <= eBinBottom) && (distanceE <= radius)) {
          setObjInBin(true);
            if (electronicsWaste.includes(object3Image)) {
              //counter++ or something
              console.log(obj3X, obj3Y);
              console.log("location matches AND ITEM MATCHES!");
              Animated.timing(object1AnimatedValue, {
                toValue: { x: 10, y: 10 }, // Reset to initial position
                duration: 0,
                useNativeDriver: false,
              }).start(() => {
                respawnObject(3); // Respawn object 1
              });
            } else {
              console.log("location matches BUT ITEM DOES NOT MATCH!");
              console.log(obj3X, obj3Y);
              Animated.timing(object3AnimatedValue, {
                toValue: { x: 10, y: 10 }, // Reset to initial position
                duration: 0,
                useNativeDriver: false,
              }).start(() => {
                respawnObject(3); // Respawn object 1
              });
            }
        } else {
          console.log("location does not match");
          console.log(obj3X, obj3Y);
        }
      },
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

      <Image source={ewasteBinImage} style={styles.binImage} />
      <Image source={recyclingBinImage} style={styles.binImage} />
      <Image source={organicsBinImage} style={styles.binImage} />
      <Image source={landfillImage} style={styles.landfillImage} />

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