import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PageHeader from '../../CustomComponents/PageHeader'
import EarningsHead from './Components/EarningsHead'
import EarningsCard from './Components/EarningsCard'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const RideEarnings = () => {
    const data=[1,2,3,4,5,6,7,8,9,0]
    const [selected,setSelected] = useState('')
  return (
    <View style={styles.container}>
      <PageHeader name={'Ride Earnings'} />
      <EarningsHead />
     
      <FlatList 
      data={data}
      style={{marginBottom:responsiveHeight(24),marginTop:responsiveHeight(1)}}
      renderItem={({item,index})=>(
        <EarningsCard  selected={selected} setSelected={setSelected} item={item} index={index}  />
      )}
      keyExtractor={item => item}
      />
    </View>
  )
}

export default RideEarnings

const styles = StyleSheet.create({})