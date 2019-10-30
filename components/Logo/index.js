import React, {useEffect, useState} from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native'; 
import {Actions} from 'react-native-router-flux';
const Logo: () => React$Node = () => {
    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
              toValue: 1,
              duration: 2500,
            }
          ).start(() => {Actions.replace("qr-reader")});
    }, [])
    return (
        <>
            <TouchableWithoutFeedback onPress={() => {console.log("hola");Actions.replace("qr-reader")}}>
                <Animated.Image style={{width: 300, height: 150, opacity: fadeAnim}} source={{uri: "http://pngimg.com/uploads/arctic_fox/arctic_fox_PNG41373.png"}}></Animated.Image>
            </TouchableWithoutFeedback>
        </>
    );
};

export default Logo;
