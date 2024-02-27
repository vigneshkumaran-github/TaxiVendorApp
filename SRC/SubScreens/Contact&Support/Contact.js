import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PageHeader from '../../CustomComponents/PageHeader'
import { colors, fontWeight, fontfamily } from '../../Constants/DesignConstants'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgXml } from 'react-native-svg'
import { callsvg, mailsvg } from '../../Resources/Svg/Auth'

const Contact = () => {

   
  return (
    <View style={styles.container}>
      <PageHeader name={'Contact & Support'} />

      <View style={styles.subContainer}>
        <Text style={styles.headtext}>How can we help?</Text>
        
        <TouchableOpacity activeOpacity={0.2} style={styles.card} onPress={()=>{Linking.openURL(`tel:${'9876543210'}`)}}>
          <View style={styles.btn}>
            <SvgXml xml={callsvg} width={responsiveWidth(9)} height={responsiveHeight(4)} />
          </View>
          <View style={{height:responsiveHeight(7),justifyContent:'space-evenly',marginStart:responsiveWidth(2)}}>
            <Text style={styles.text1}>Call Us</Text>
            <Text style={styles.text2}>Available Weekdays - 09:00 AM to 04:30PM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.btn}>
            <SvgXml xml={mailsvg} width={responsiveWidth(9)} height={responsiveHeight(4)} />
          </View>
          <View style={{height:responsiveHeight(7),justifyContent:'space-evenly',marginStart:responsiveWidth(2)}}>
            <Text style={styles.text1}>Mail Us</Text>
            <Text style={styles.text2}> Send us an email and we’ll get back to you</Text>
          </View>
        </TouchableOpacity>
       
      </View>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.backgroundcolor
    },
    subContainer:{
        width:responsiveWidth(90),
        alignSelf:'center'
    },
    card:{
        width:responsiveWidth(90),
        alignSelf:'center',
        height:responsiveHeight(11),
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.boxGray,
        backgroundColor:colors.white,
        paddingHorizontal:responsiveWidth(4),
        marginTop:responsiveHeight(1.5),
        flexDirection:'row',
        alignItems:'center'
    },
    headtext:{
        color: colors.Textcolor,
        fontFamily: fontfamily.fontMedium,
        fontSize: RFValue(18),
        fontWeight: fontWeight.medium,
        marginVertical:responsiveHeight(1)
    },
    btn:{
        width:responsiveHeight(7),
        height:responsiveHeight(7),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
        elevation:1,
        shadowColor:'gray',
        borderRadius:responsiveHeight(7)/2,
    },
    text1:{
        color: colors.Textcolor,
        fontFamily: fontfamily.fontMedium,
        fontSize: RFValue(14),
        fontWeight: fontWeight.medium,
    },
    text2:{
        color: colors.gray,
        fontFamily: fontfamily.fontMedium,
        fontSize: RFValue(11),
        fontWeight: fontWeight.medium,
    },
})