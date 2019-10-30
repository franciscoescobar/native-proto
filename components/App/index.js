import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { StyledIcon } from './styled';

import DrawerContent from '../DrawerContent';
import QrReader from '../../views/QrReader';
import Home from '../../views/Home';
import PdfView from '../../views/PdfView';
import Config from '../../views/Config';


const App: () => React$Node = () => {

  const handleLeftButton = () => (
    <TouchableOpacity onPress={() => Actions.drawerOpen()} >
      <StyledIcon name="menu" />
    </TouchableOpacity>
  );


  
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
              key="qr-reader"  
              >
              <Scene
                renderLeftButton={handleLeftButton}
                title="WES - IT" 
                navigationBarStyle={{backgroundColor: "#3f51b5"}}
                titleStyle={{ color: "white"}}
                key="qr-reader"  
                component={QrReader}
                />
            </Scene>
            <Scene
              hideDrawerButton={true} 
              hideNavBar={true} 
              key="home" initial={true} component={Home}/>
            <Scene 
              key="pdf-view"
              component={PdfView}
              backButtonTextStyle = "#fff"
              navBarButtonColor = "#fff"
              title="WES - IT"
              navigationBarStyle={{backgroundColor: "#3f51b5"}}
              titleStyle={{ color: "white"}}
              />
            <Scene 
            key="config"
            component={Config}
            backButtonTextStyle = "#fff"
            navBarButtonColor = "#fff"
            title="WES - IT"
            navigationBarStyle={{backgroundColor: "#3f51b5"}}
            titleStyle={{ color: "white"}}
            />
          </Stack>
        </Router>
        

    </>
  );
};

export default App;