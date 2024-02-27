import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../Constants/DesignConstants'
import PageHeader from '../../CustomComponents/PageHeader'
import TabSwitch from './Components/TabSwitch'
import DriverList from './Components/DriverList'
import VehicleList from './Components/VehicleList'

const MyFleetHistory = () => {
    const [selected,setSelected] = useState(1)
  return (
    <View style={styles.container}>
     <PageHeader name={'My fleet & Histories'} />
     <TabSwitch selected={selected} setSelected={setSelected} />
     {
        selected===1 ? <DriverList /> : <VehicleList />
     }
    </View>
  )
}

export default MyFleetHistory

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.backgroundcolor
    }
})