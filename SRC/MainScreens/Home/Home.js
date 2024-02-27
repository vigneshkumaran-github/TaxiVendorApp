import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import TopView from './Components/TopView';
import { RFValue } from 'react-native-responsive-fontsize';
import StatusCard from './Components/StatusCard';

const Home = () => {
  return (
    <View style={styles.container}>
      <TopView />
      <View style={{flexDirection: 'row', alignItems: 'center',width:responsiveWidth(90),alignSelf:'center',marginTop:responsiveHeight(2)}}>
        <Text style={styles.text1}>Welcome , </Text>
        <Text style={styles.text2}>Daryl Mitchell</Text>
      </View>

      <StatusCard />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  topView: {
    width: responsiveWidth(90),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  text1:{
    color: colors.Textcolor,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
  },
  text2:{
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
  }
});
