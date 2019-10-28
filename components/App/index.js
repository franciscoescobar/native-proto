import React from 'react';
import {StatusBar} from 'react-native';
import QrReader from '../../views/QrReader';
import Files from '../../views/Files';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { StyledIcon } from './styled';
import DrawerContent from '../DrawerContent';
const App: () => React$Node = () => {

  const handleLeftButton = () => {

  }
  return (
    <>
        <StatusBar backgroundColor="#002984" barStyle="light-content"/>
        <Router>
          <Stack key="root">
            <Scene
              drawer
              contentComponent = {DrawerContent} 
              drawerWidth = {250} 
              hideDrawerButton={true} 
              hideNavBar={true} 
              >
            <Scene
              onEnter={() => Actions.drawerOpen()}
              title="WES - IT" 
              navigationBarStyle={{backgroundColor: "#3f51b5"}}
              titleStyle={{ color: "white"}}
              key="qr-reader" 
              initial={true}  
              component={QrReader}
              />
              </Scene>
            <Scene key="files" component={Files}/>
          </Stack>
        </Router>
        

    </>
  );
};

export default App;
