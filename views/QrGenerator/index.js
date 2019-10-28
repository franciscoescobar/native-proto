import React, {useState} from 'react';
import {Button} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Container, StyledInput} from './styled';
const QrGenerator: () => React$Node = () => {
    const [qr, setQr] = useState("");
    const [buttonText, setButtonText] = useState("Escribe algo");
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const handleTextChange = (text) => {
        if(text !== ""){
            setButtonDisabled(false);
            setButtonText("Enviar");
        }
        else {
            setButtonDisabled(true);
            setButtonText("Escribe algo");
        }
        setQr(text);
    }
    return (
        <>
            <Container>
                <StyledInput onChangeText={handleTextChange}
                value={qr}/>
                {qr === "" ?
                null :
                <QRCode
                    value={qr}
                />}
                <Button title={buttonText} disabled={buttonDisabled}/>
            </Container>
        </>
    );
};

export default QrGenerator;
