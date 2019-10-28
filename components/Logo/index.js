import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native'; 
import {Actions} from 'react-native-router-flux';
const Logo: () => React$Node = () => {
    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
              toValue: 1,
              duration: 3000,
            }
          ).start(() => {Actions.replace("qr-reader")});
    }, [])
    return (
        <>
            <Animated.Image style={{width: 300, height: 100, opacity: fadeAnim}} source={{uri: "http://pngimg.com/uploads/google/google_PNG19644.png"}}></Animated.Image>
        </>
    );
};

export default Logo;
