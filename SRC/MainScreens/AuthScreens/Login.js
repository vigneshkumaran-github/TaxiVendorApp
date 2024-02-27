import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgXml} from 'react-native-svg';
import {callsvg, namesvg} from '../../Resources/Svg/Auth';
import BlueButton from '../../CustomComponents/BlueButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation=useNavigation()
  const [mobileNo,setMobileNo] = useState('')


  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          styles.subContainer,
          {marginBottom: Keyboard.isVisible ? responsiveHeight(5) : 0},
        ]}>
        <Text style={styles.headtext}>Log In</Text>

        <Text style={[styles.text1,{marginBottom:responsiveHeight(1.5)}]}>
          Enter the Registered Mobile Number
        </Text>

        <View style={styles.inputContainer}>
          <SvgXml
            xml={callsvg}
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
          />
          <TextInput
            style={[styles.input]}
            placeholder={'Mobile Number'}
            placeholderTextColor={colors.gray}
            inputMode="text"
            value={mobileNo}
            maxLength={25}
            onChangeText={val => {
              setMobileNo(val);
            }}
            // onFocus={() => setFocused(1)}
            // onBlur={() => setFocused(0)}
          />
        </View>

        <BlueButton name={'NEXT'} style={{marginTop:responsiveHeight(4)}} onPress={()=>{navigation.navigate('OtpScreen')}} />

      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  subContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  inputContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveHeight(8),
    borderWidth: 1,
    marginTop: responsiveHeight(1.5),
    borderRadius: 10,
    borderColor: colors.boxGray,
    paddingHorizontal: responsiveWidth(3),
    backgroundColor:colors.white
  },
  input: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
    width:responsiveWidth(70),
    marginStart:responsiveWidth(1.5)
  },
  headtext: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(24),
    fontWeight: fontWeight.medium,
    marginTop: responsiveHeight(7),
    marginBottom: responsiveHeight(1),
  },
  text1: {
    color: colors.gray,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
});
