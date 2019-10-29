import React, {useEffect} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { BackHandler } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Container, CenterText, TextBold, ButtonText, ButtonTouchable} from './styled';
const QrReader: () => React$Node = () => {
  const onSuccess = (e) => {
    if(e.text != "") {
      Actions.replace("pdf-view", {url:"http://www.pdf995.com/samples/pdf.pdf"});
    }
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, [])
  
  return (
    <>
      <Container>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        topContent={
          <CenterText>
            Scan<TextBold> the product</TextBold> you want so you can read the pdf.
          </CenterText>
        }
        bottomContent={
          <ButtonTouchable>
            <ButtonText>Scanning</ButtonText>
          </ButtonTouchable>
        }
      />
      </Container>
    </>
  );
};

export default QrReader;
