import {
  Keyboard,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {callsvg, mailsvg} from '../../Resources/Svg/Auth';
import {SvgXml} from 'react-native-svg';
import CheckBox from '@react-native-community/checkbox';
import BlueButton from '../../CustomComponents/BlueButton';
import { useNavigation } from '@react-navigation/native';

const ContactDetails = () => {
  const navigation=useNavigation()
  const [mobileNo, setMobileNo] = useState('');
  const [mobileNo2, setMobileNo2] = useState('');
  const [email, setEmail] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          styles.subContainer,
          {marginBottom: Keyboard.isVisible ? responsiveHeight(5) : 0},
        ]}>
        <Text style={styles.headtext}>Sign Up</Text>

        <Text style={styles.text1}>
          Enter the below details to get signed Up
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

        <View style={styles.inputContainer}>
          <SvgXml
            xml={callsvg}
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
          />
          <TextInput
            style={[styles.input]}
            placeholder={'Alternate Mobile Number'}
            placeholderTextColor={colors.gray}
            inputMode="text"
            value={mobileNo2}
            maxLength={25}
            onChangeText={val => {
              setMobileNo2(val);
            }}
            // onFocus={() => setFocused(1)}
            // onBlur={() => setFocused(0)}
          />
        </View>

        <View style={styles.inputContainer}>
          <SvgXml
            xml={mailsvg}
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
          />
          <TextInput
            style={[styles.input]}
            placeholder={'Email'}
            placeholderTextColor={colors.gray}
            inputMode="text"
            value={email}
            maxLength={25}
            onChangeText={val => {
              setEmail(val);
            }}
            // onFocus={() => setFocused(1)}
            // onBlur={() => setFocused(0)}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:responsiveHeight(1.5)}}>
          <CheckBox
            disabled={false}
            value={toggle}
            onValueChange={newValue => setToggle(newValue)}
            tintColor={colors.primarycolor}
            tintColors={{false: colors.gray, true: colors.primarycolor}}
          />
          <Text style={[styles.text1]}>I hereby accept all the </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://metacare4u.life/terms-and-conditions')
            }>
            <Text style={[styles.bluetext]}>terms and conditions </Text>
          </TouchableOpacity>
        </View>

        <BlueButton name={'NEXT'} onPress={()=>{navigation.navigate('OtpScreen')}} />
      </ScrollView>
    </View>
  );
};

export default ContactDetails;

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
    backgroundColor: colors.white,
  },
  input: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
    width: responsiveWidth(70),
    marginStart: responsiveWidth(1.5),
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
  bluetext: {
    color: colors.primarycolor,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
});
