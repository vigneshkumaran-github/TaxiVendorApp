import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BlueButton from './SRC/CustomComponents/BlueButton';
import {AuthStackScreen, HomeStackScreen} from './SRC/Navigation/StackNav';
import Drawer from './SRC/Navigation/DrawerNavigation/Drawer';
import {AuthProvider} from './SRC/Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
