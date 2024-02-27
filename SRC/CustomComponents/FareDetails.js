import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import { colors, fontWeight, fontfamily } from '../Constants/DesignConstants';

const FareDetails = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.rowview}>
        <Text style={styles.text1}>Trip Fare</Text>
        <Text style={styles.text2}>₹ 1000</Text>
      </View>

      <View style={styles.rowview}>
        <Text style={styles.text1}>Convenience Fee</Text>
        <Text style={styles.text2}>₹ 1000</Text>
      </View>

      <View style={styles.rowview}>
        <Text style={styles.text1}>Taxes</Text>
        <Text style={styles.text2}>₹ 1000</Text>
      </View>

      <View style={styles.rowview}>
        <Text style={styles.text1}>Code Discount</Text>
        <Text style={[styles.text2,{color:colors.orange}]}>₹ -1000</Text>
      </View>
      <View style={{height: 1, borderStyle: 'dashed', borderWidth: 0.7, marginVertical: responsiveHeight(0.7), borderColor: colors.gray}} />

      <View style={styles.rowview}>
        <Text style={styles.text2}>Total Amount</Text>
        <Text style={[styles.text2]}>₹ 1000</Text>
      </View>
    </View>
  );
};

export default FareDetails;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(85),
    alignSelf: 'center',
  },
  rowview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(0.4),
    justifyContent: 'space-between',
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    fontWeight: fontWeight.regular,
  },
  text2: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
});