import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colors, fontWeight, fontfamily } from '../../../Constants/DesignConstants'
import { SvgXml } from 'react-native-svg'
import { calendarsvg } from '../../../Resources/Svg/Auth'
import { RFValue } from 'react-native-responsive-fontsize'

const EarningsHead = () => {
  return (
    <View style={styles.card}>
     <View style={{height:'100%',justifyContent:'space-evenly'}}>
        <Text style={styles.text1}>Showing data of</Text>
        <TouchableOpacity style={styles.datebtn}>
            <SvgXml xml={calendarsvg} width={responsiveWidth(7)} height={responsiveHeight(3)} />
            <Text style={styles.text2}>12.12.23</Text>
        </TouchableOpacity>
     </View>
     <Text style={styles.amountext}>₹ 50000</Text>
    </View>
  )
}

export default EarningsHead

const styles = StyleSheet.create({
    card:{
        width:responsiveWidth(90),
        alignSelf:'center',
        justifyContent:'space-between',
        backgroundColor:colors.white,
        elevation:2,
        height:responsiveHeight(12),
        borderRadius:10,
        flexDirection:'row',
        paddingHorizontal:responsiveWidth(5),
        paddingVertical:responsiveHeight(1),
        alignItems:'center',
        marginTop:responsiveHeight(2)
    },
    text1:{
        color: colors.Textcolor,
        fontFamily: fontfamily.fontMedium,
        fontSize: RFValue(12),
        fontWeight: fontWeight.medium,
    },
    text2:{
        color: colors.Textcolor,
        fontFamily: fontfamily.fontMedium,
        fontSize: RFValue(14),
        fontWeight: fontWeight.medium,
    },
    datebtn:{
        height:responsiveHeight(5.5),
        width:responsiveWidth(27),
        borderRadius:5,
        borderWidth:1,
        borderColor:colors.boxGray,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    amountext:{
        color: colors.Textcolor,
        fontFamily: fontfamily.fontMedium,
        fontSize: RFValue(16),
        fontWeight: fontWeight.medium,
    }
})