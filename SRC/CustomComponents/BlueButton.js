import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { RFValue } from 'react-native-responsive-fontsize';
import { colors, fontWeight, fontfamily } from '../Constants/DesignConstants';

const BlueButton = ({name,style,onPress}) => {
  return (
    <TouchableOpacity style={[styles.btn,style]} onPress={onPress}>
      <Text style={styles.btntext}>{name}</Text>
    </TouchableOpacity>
  )
}

export default BlueButton

const styles = StyleSheet.create({
    btn:{
        width:responsiveWidth(90),
        height:responsiveHeight(7),
        borderRadius:10,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.primarycolor
    },
    btntext:{
        color: colors.white,
        fontFamily: fontfamily.fontSemiBold,
        fontSize: RFValue(16),
        fontWeight: fontWeight.medium,
        letterSpacing:3
    }
})