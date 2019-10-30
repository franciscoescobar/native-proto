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
              duration: 2500,
            }
          ).start(() => {Actions.reset("qr-reader")});
    }, [])
    return (
        <>
            <Animated.Image 
                style={{width: 300, height: 150, opacity: fadeAnim}} 
                source={{uri: "http://pngimg.com/uploads/arctic_fox/arctic_fox_PNG41373.png"}}
            />
        </>
    );
};

export default Logo;
