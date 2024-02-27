import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontWeight, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgXml} from 'react-native-svg';
import {carsvg} from '../../../Resources/Svg/Home';

const StatusCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text1}>Vehicle Status</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(1),
          justifyContent: 'space-between',
        }}>
        <View style={styles.btn}>
          <SvgXml
            xml={carsvg}
            width={responsiveWidth(15)}
            height={responsiveHeight(4)}
            style={{alignSelf: 'flex-end'}}
          />
          <View
            style={{
              height: responsiveHeight(7),
              width: responsiveWidth(19),
              justifyContent: 'space-evenly',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={[styles.circle, {backgroundColor: 'green'}]} />
              <Text style={styles.smalltext}>ACTIVE</Text>
            </View>
            <Text style={styles.amountext}>50</Text>
          </View>
        </View>

        <View style={styles.btn}>
          <SvgXml
            xml={carsvg}
            width={responsiveWidth(15)}
            height={responsiveHeight(4)}
            style={{alignSelf: 'flex-end'}}
          />
          <View
            style={{
              height: responsiveHeight(7),
              width: responsiveWidth(19),
              justifyContent: 'space-evenly',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={[styles.circle, {backgroundColor: 'red'}]} />
              <Text style={styles.smalltext}>INACTIVE</Text>
            </View>
            <Text style={styles.amountext}>150</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(100),
    height: responsiveHeight(16),
    backgroundColor: colors.primarycolorlight,
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(7),
    paddingVertical: responsiveHeight(2),
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
  btn: {
    width: responsiveWidth(40),
    height: responsiveHeight(7.5),
    borderRadius: 5,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(0.9),
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
    borderColor: colors.gray,
  },
  circle: {
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: responsiveWidth(2.5) / 2,
  },
  smalltext: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.medium,
    marginStart: responsiveWidth(1),
  },
  amountext: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(25),
    fontWeight: fontWeight.medium,
  },
});
