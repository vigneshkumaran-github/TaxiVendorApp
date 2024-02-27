import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import ResponsiveImage from 'react-native-responsive-image';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import BlueButton from '../../CustomComponents/BlueButton';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View
        style={{
          width: responsiveWidth(90),
          alignItems: 'center',
          marginTop: responsiveHeight(10),
          alignSelf: 'center',
        }}>
        <ResponsiveImage
          source={require('../../Resources/Images/welcome.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
        <Text style={styles.text1}>WELCOME !</Text>
        <Text style={[styles.text2, {marginVertical: responsiveHeight(1)}]}>
          Congratulations on joining our community of trusted partners! Your
          journey with begins now. We're excited to have you on board as a
          valued vendor.
        </Text>

        <BlueButton
          name={'LOG IN'}
          onPress={()=>{navigation.navigate('Login')}}
          style={{marginTop: responsiveHeight(5),marginBottom:responsiveHeight(2)}}
        />

        <Text style={styles.text2}>OR</Text>

        <TouchableOpacity style={[styles.btn]}  onPress={()=>{navigation.navigate('Signup')}}>
          <Text style={styles.btntext}>{'SIGN UP'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  image: {
    width: responsiveWidth(90),
    height: responsiveHeight(35),
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(22),
    fontWeight: fontWeight.medium,
    letterSpacing: responsiveWidth(1),
    textAlign: 'center',
    marginVertical: responsiveHeight(1.5),
  },
  text2: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
    textAlign: 'center',
    width: responsiveWidth(80),
  },
  btn: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primarycolorlight,
    marginVertical: responsiveHeight(2),
  },
  btntext: {
    color: colors.primarycolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
    letterSpacing: 3,
  },
});
