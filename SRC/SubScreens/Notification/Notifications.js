import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgXml} from 'react-native-svg';
import { camersvg } from '../../Resources/Svg/Auth';
import PageHeader from '../../CustomComponents/PageHeader';
import { locatesvg, ticksvg } from '../../Resources/Svg/Notification';

const Notifications = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <View style={styles.container}>
      <PageHeader name={'Notifications'} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.headtext}>TODAY</Text>
        {data?.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.circle}>
              <SvgXml xml={locatesvg} width={responsiveHeight(3)} height={responsiveHeight(3)} />
            </View>
            <View style={{width: responsiveWidth(65), height: responsiveHeight(7.5), justifyContent: 'space-between', marginStart: responsiveWidth(2)}}>
              <Text style={styles.text1}>Trip Completed</Text>
              <Text style={styles.text2}>The trip of Romario Williams has been Completed!</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  card: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    height: responsiveHeight(10),
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: responsiveHeight(1.5),
  },
  circle: {
    width: responsiveHeight(7),
    height: responsiveHeight(7),
    borderRadius: responsiveHeight(7) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primarycolor,
  },
  headtext: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
    marginStart: responsiveWidth(5),
    marginVertical: responsiveHeight(2),
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
  text2: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.medium,
  },
});