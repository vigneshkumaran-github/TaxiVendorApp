import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { leftarrowbluesvg } from '../Resources/Svg/Home';
import { colors, fontWeight, fontfamily } from '../Constants/DesignConstants';

const PageHeader = ({name, style,textstyle}) => {
  const navigation = useNavigation()
  return (
    <View style={[styles.head, style]}>
      <TouchableOpacity style={styles.btn} onPress={()=>{navigation.goBack()}}>
        <SvgXml xml={leftarrowbluesvg} width={responsiveWidth(4.7)} height={responsiveWidth(4.6)} />
      </TouchableOpacity>
      <Text style={[styles.text,textstyle]}>{name}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(3),
    marginTop:responsiveHeight(1)
  },
  btn: {
    width: responsiveWidth(13.5),
    height: responsiveWidth(13.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(15) / 2,
    elevation: 5,
  },
  text: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(17),
    fontWeight: fontWeight.medium,
    marginStart:responsiveWidth(5)
  },
});