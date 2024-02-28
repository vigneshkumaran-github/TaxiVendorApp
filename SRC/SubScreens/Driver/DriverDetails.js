import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import ToggleSwitch from 'toggle-switch-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ResponsiveImage from 'react-native-responsive-image';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {starsvg} from '../../Resources/Svg/History';
import PageHeader from '../../CustomComponents/PageHeader';

const DriverDetails = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <PageHeader name={'Driver Details'} />

      <View style={styles.card}>
        <ResponsiveImage style={styles.image} borderRadius={responsiveHeight(7) / 2} source={{uri: 'https://gossipgist.com/uploads/3/cristiano-ronaldo.jpg'}} />
        <View style={{height: responsiveHeight(6), justifyContent: 'space-evenly', width: responsiveWidth(50), marginStart: responsiveWidth(2)}}>
          <Text style={styles.text1}>Jude Bellingham</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SvgXml xml={starsvg} width={responsiveWidth(4)} height={responsiveHeight(3)} />
            <Text style={styles.text3}> 3.5</Text>
          </View>
        </View>

        <ToggleSwitch
          isOn={toggle}
          onColor={colors.primarycolor}
          offColor={colors.boxGray}
          size="small"
          onToggle={isOn => setToggle(isOn)}
          style={{marginStart: responsiveWidth(4)}}
        />
      </View>

      <View style={styles.card2}>
        <View style={{}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>VEHICLE NUMBER</Text>
          <Text style={styles.text1}>TN 65 AQ 1398</Text>
        </View>

        <View style={{marginTop: responsiveHeight(1)}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>DATE OF BIRTH</Text>
          <Text style={styles.text1}>02.05.2001</Text>
        </View>

        <View style={{marginTop: responsiveHeight(1)}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>GENDER</Text>
          <Text style={styles.text1}>Male</Text>
        </View>

        <View style={{marginTop: responsiveHeight(1)}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>CONTACT INFORMATION</Text>
          <Text style={styles.text1}>+91 9876543310</Text>
        </View>

        <View style={{marginTop: responsiveHeight(1)}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>LICENCE NUMBER</Text>
          <Text style={styles.text1}>9876543310</Text>
        </View>
      </View>
    </View>
  );
};

export default DriverDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
  card: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    height: responsiveHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: responsiveHeight(1),
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(3),
    marginBottom: responsiveHeight(1),
  },
  image: {
    width: responsiveHeight(7),
    height: responsiveHeight(7),
  },
  text3: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.medium,
  },
  card2: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: responsiveWidth(3),
    marginTop: responsiveHeight(2),
  },
});
