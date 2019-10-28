import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Linking} from 'react-native';
import {Container, CenterText, TextBold, ButtonText, ButtonTouchable} from './styled';
const QrReader: () => React$Node = () => {
    const onSuccess = (e) => {
        Linking
          .openURL(e.data)
          .catch(err => console.error('An error occured', err));
    }
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
