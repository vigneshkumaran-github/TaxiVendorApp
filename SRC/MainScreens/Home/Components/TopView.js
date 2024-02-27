import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { SvgXml } from 'react-native-svg'
import { callsvg } from '../../../Resources/Svg/Auth'
import { colors, fontWeight, fontfamily } from '../../../Constants/DesignConstants'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { menusvg } from '../../../Resources/Svg/Home'

const TopView = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.topView}>
        <TouchableOpacity style={styles.btn} onPress={()=>{ navigation.openDrawer()}}>
            <SvgXml xml={menusvg} width={responsiveHeight(4)} height={responsiveHeight(4)} />
        </TouchableOpacity>

        <Text style={styles.text}>Vendor</Text>
    </View>
  )
}

export default TopView

const styles = StyleSheet.create({
    topView:{
        width:responsiveWidth(90),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        marginTop:responsiveHeight(2)
    },
    btn:{
        width:responsiveHeight(7),
        height:responsiveHeight(7),
        borderRadius:responsiveHeight(7)/2,
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
        elevation:5
    },
    text:{
        color: colors.primarycolor,
        fontFamily: fontfamily.fontSemiBold,
        fontSize: RFValue(22),
        fontWeight: fontWeight.bold,
        letterSpacing:-1
    }
})