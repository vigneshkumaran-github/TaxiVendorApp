import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BlueButton from './SRC/CustomComponents/BlueButton'
import { AuthStackScreen, HomeStackScreen } from './SRC/Navigation/StackNav'
import Drawer from './SRC/Navigation/DrawerNavigation/Drawer'

const App = () => {
  return (
    <NavigationContainer>
     <Drawer />
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})