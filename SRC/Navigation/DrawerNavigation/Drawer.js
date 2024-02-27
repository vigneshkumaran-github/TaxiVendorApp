import {StyleSheet, Text, View} from 'react-native';

import React, {useCallback, useMemo, useRef, useState} from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import { colors } from '../../Constants/DesignConstants';
import { HomeStackScreen } from '../StackNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

const Drawer = () => {
  const Drawerc = createDrawerNavigator();

  return (
    <Drawerc.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: colors.primarycolor,
        drawerInactiveTintColor: colors.Textcolor,
        // swipeEnabled:false
        swipeEdgeWidth: -10,
        drawerStyle: {
          width: responsiveWidth(80),
        },
        drawerContainerStyle: {
          padding: 0,
        },
        drawerType: 'slide',
      }}>
      <Drawerc.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
    </Drawerc.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
