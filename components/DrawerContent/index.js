import React from 'react';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Container, TopDrawer, BottomDrawer, StyledTitle} from './styled';
import List from '../List';
import { drawerLists } from '../../data/drawer';
const DrawerContent = () => {
    const handleOnItemPress = (item) => {
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
        else if(item.key == "Configuración") {
            Alert.alert(
                'En construcción',
                'Esta vista esta en construcción. Pronto estará en uso.',
                [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );  
        }
        else {
            Actions.push("pdf-view");
        }
    }
    return (
    <>
        <Container>
            <TopDrawer source={{uri: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?cs=srgb&dl=35mm-aerial-aerial-shot-1105766.jpg&fm=jpg"}}/>
            <BottomDrawer>
                <List 
                    data={drawerLists[0]}
                    onItemPress={handleOnItemPress}
                />
                <StyledTitle>Archivos recientes</StyledTitle>
                <List 
                    data={drawerLists[1]}
                    onItemPress={handleOnItemPress}
                    />
            </BottomDrawer>
        </Container>
    </>);
}


export default DrawerContent;