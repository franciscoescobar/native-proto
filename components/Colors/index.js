import React from 'react';
import {View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {StyledText, StyledTouchable} from './styled';
const Colors: () => React$Node = () => {
  return (
    <>
        <View style={{flex: 1}} >
            <StyledTouchable style={{flex: 1, backgroundColor: 'powderblue'}} onPress={() => Actions.push("files")}><StyledText>Archivos </StyledText></StyledTouchable>
            <StyledTouchable style={{flex: 2, backgroundColor: 'skyblue'}} onPress={() => Actions.push("qr-generator")}><StyledText>Generar QR</StyledText></StyledTouchable>
            <StyledTouchable style={{flex: 3, backgroundColor: 'steelblue'}} onPress={() => Actions.push("qr-reader")}><StyledText>Buscar QR</StyledText></StyledTouchable>
        </View>
    </>
  );
};

export default Colors;
