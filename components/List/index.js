import React from 'react';
import { View, Alert } from 'react-native';
import { Actions } from  'react-native-router-flux';
import { StyledText, StyledView, StyledIcon, StyledFlatList, StyledTouchable } from './styled';
const List: () => React$Node = ({data}) => {
    const url = "https://www.wikipedia.org/";
    const handleOnItemPress = (item) => {
        if(data.length > 3) {
            Actions.push("pdf-view");
        }
        if(item.key == "Descargar archivos") {
            Alert.alert(
                'Espacio requerido',
                'Necesitas 100MB de espacio en tu celular para descargar los archivos ¿Estas seguro que quieres continuar?',
                [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );          
        }
        if(item.key == "Configuración") {
            Alert.alert(
                'En construcción',
                'Esta vista esta en construcción. Pronto estará en uso.',
                [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );  
        }
    }
    return (
        <>
        <StyledView>
            <StyledFlatList data={ data || [
                {key: 'Devin.pdf'},
                {key: 'Dan.pdf'},
                {key: 'Dominic.pdf'},
                {key: 'Jackson.pdf'},
                {key: 'James.pdf'},
                {key: 'Joel.pdf'},
                {key: 'John.pdf'},
                {key: 'Jillian.pdf'},
                {key: 'Jimmy.pdf'},
                {key: 'Julie.pdf'},
            ]}
            renderItem={({item}) => <StyledTouchable onPress={() => handleOnItemPress(item)}><StyledIcon name={item.icon || "file-pdf-o"} size={18} color={item.color || "#ff4c4c"} /><StyledText>{item.key}</StyledText></StyledTouchable>}
            />
            <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: "#cbcbcb"}}></View>
        </StyledView>
        </>
    );
};

export default List;
