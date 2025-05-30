import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import BotTab from '../BotTab';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {View, Text} from 'react-native';

import KFKubwaScreen from '../../screens/MFKubwa';
import KFNdogoScreen from '../../screens/MFNdogo';
import KFAdminScreen from '../../screens/MFAdmin';
import MFSetting from '../../screens/Settings/SignIn';
import MFAdmSgnIn from "../../screens/MFAdmin/SignInAdm";
import MFKw from "../../screens/MFKubwa";
import Ref from "../../screens/Settings/Reference";
import AdvSgnIn from "../../screens/Advocate/AdvocateHm";
import SignInBankAdm from "../../screens/MFBankAdmin/SignInAdm";



const Drawer = createDrawerNavigator();

const DummyScreen = props => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
    <Text>{props.name} </Text>
  </View>
);

const RootNavigator = props => {

  
  return (
    <NavigationContainer

    
    >
      <Drawer.Navigator
      
      screenOptions={{
        headerShown: false,
      }}>
        <Drawer.Screen name="Homes" component={BotTab} />
        <Drawer.Screen name="MiFedha Ndogos" component={KFNdogoScreen} />
        <Drawer.Screen name="MiFedha Kubwa" component={MFKw} />
        <Drawer.Screen name="MiFedha Advocate" component={AdvSgnIn} />
        
        <Drawer.Screen name="MiFedha Admin 2" component={MFAdmSgnIn} />
        <Drawer.Screen name="Bank Admin" component={SignInBankAdm} />
        <Drawer.Screen name="MiFedha Admin 1" component={MFSetting} />
        <Drawer.Screen name="Reference" component={Ref} />
        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;