import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Actions} from 'react-native-router-flux';
import {Container, CenterText, TextBold, ButtonText, ButtonTouchable} from './styled';

const QrReader: () => React$Node = () => {
  const onSuccess = (item) => {
    if (Actions.currentScene === "_qr-reader") 
      Actions.push("pdf-view", {url:"http://www.pdf995.com/samples/pdf.pdf"});

  }
  return (
    <>
      <Container>
        <QRCodeScanner
          onRead={onSuccess}
          reactivate = {true}
          reactivateTimeout = {3000}
          showMarker = {true}
          topContent={
            <CenterText>
              Scan<TextBold> the QR code</TextBold> you want so you can read the pdf.
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
