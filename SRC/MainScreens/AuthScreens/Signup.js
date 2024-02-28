import {
  Keyboard,
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
import {addressvg, calendarsvg, countrysvg, gendersvg, languagesvg, namesvg} from '../../Resources/Svg/Auth';
import {SvgXml} from 'react-native-svg';
import {SelectList} from 'react-native-dropdown-select-list';
import BlueButton from '../../CustomComponents/BlueButton';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation()
  const [fullname, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');

  const genderData = [
    {key: '1', value: 'Male'},
    {key: '2', value: 'Female'},
    {key: '3', value: 'Others'},
  ];
  const countryData = [
    {key: '1', value: 'India'},
    {key: '2', value: 'USA'},
    {key: '3', value: 'UK'},
  ];

  const languageData = [
    {key: '1', value: 'English'},
    {key: '2', value: 'Tamil'},
    {key: '3', value: 'Portuguese'},
  ];
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
            xml={namesvg}
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
          />
          <TextInput
            style={[styles.input]}
            placeholder={'Full Name'}
            placeholderTextColor={colors.gray}
            inputMode="text"
            value={fullname}
            maxLength={25}
            onChangeText={val => {
              setFullName(val);
            }}
            // onFocus={() => setFocused(1)}
            // onBlur={() => setFocused(0)}
          />
        </View>

        <TouchableOpacity style={styles.inputContainer}>
          <SvgXml
            xml={calendarsvg}
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
          />
          <TextInput
            style={[styles.input]}
            placeholder={'Date Of Birth'}
            placeholderTextColor={colors.gray}
            inputMode="text"
            editable={false}
            value={fullname}
            maxLength={25}
            onChangeText={val => {
              setFullName(val);
            }}
            // onFocus={() => setFocused(1)}
            // onBlur={() => setFocused(0)}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent: 'center'}}>
          <SelectList
            setSelected={val => setGender(val)}
            data={genderData}
            save="value"
            placeholder='Gender'
            search={false}
            maxHeight={responsiveHeight(15)}
            boxStyles={[
              styles.inputContainer,
              {paddingStart: responsiveWidth(10)},
            ]}
            dropdownStyles={{
              borderColor: colors.boxGray,
            }}
            inputStyles={{
              color: colors.Textcolor,
              fontFamily: fontfamily.fontMedium,
              fontSize: RFValue(14),
              fontWeight: fontWeight.medium,
              marginStart: responsiveWidth(3),
            }}
            dropdownTextStyles={{
              color: colors.gray,
              fontFamily: fontfamily.fontMedium,
              fontSize: RFValue(14),
              fontWeight: fontWeight.medium,
              marginStart: responsiveWidth(3),
            }}
          />
          <SvgXml
            xml={gendersvg}
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
            style={{
              position: 'absolute',
              left: responsiveWidth(3),
              top: responsiveHeight(3.5),
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent: 'center'}}>
          <SelectList
            setSelected={val => setCountry(val)}
            data={countryData}
            save="value"
            search={false}
            placeholder='Nationality'
            maxHeight={responsiveHeight(15)}
            boxStyles={[
              styles.inputContainer,
              {paddingStart: responsiveWidth(10)},
            ]}
            dropdownStyles={{
              borderColor: colors.boxGray,
            }}
            inputStyles={{
              color: colors.Textcolor,
              fontFamily: fontfamily.fontMedium,
              fontSize: RFValue(14),
              fontWeight: fontWeight.medium,
              marginStart: responsiveWidth(3),
            }}
            dropdownTextStyles={{
              color: colors.gray,
              fontFamily: fontfamily.fontMedium,
              fontSize: RFValue(14),
              fontWeight: fontWeight.medium,
              marginStart: responsiveWidth(3),
            }}
          />
          <SvgXml
            xml={countrysvg}
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
            style={{
              position: 'absolute',
              left: responsiveWidth(3),
              top: responsiveHeight(3.5),
            }}
          />
        </TouchableOpacity>

        <View style={[styles.inputContainer,{height:responsiveHeight(15),alignItems:'flex-start',paddingVertical:responsiveHeight(1)}]}>
          <SvgXml
            xml={addressvg}
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
          />
          <TextInput
            style={[styles.input,{padding:5,textAlignVertical:'top',height:responsiveHeight(13)}]}
            placeholder={'Residential Address'}
            placeholderTextColor={colors.gray}
            inputMode="text"
            value={address}
            maxLength={25}
            onChangeText={val => {
              setAddress(val);
            }}
            // onFocus={() => setFocused(1)}
            // onBlur={() => setFocused(0)}
          />
        </View>

        <TouchableOpacity style={{justifyContent: 'center'}}>
          <SelectList
            setSelected={val => setCountry(val)}
            data={countryData}
            save="value"
            search={false}
            placeholder='Preferred Language'
            maxHeight={responsiveHeight(15)}
            boxStyles={[
              styles.inputContainer,
              {paddingStart: responsiveWidth(10)},
            ]}
            dropdownStyles={{
              borderColor: colors.boxGray,
            }}
            inputStyles={{
              color: colors.Textcolor,
              fontFamily: fontfamily.fontMedium,
              fontSize: RFValue(14),
              fontWeight: fontWeight.medium,
              marginStart: responsiveWidth(3),
            }}
            dropdownTextStyles={{
              color: colors.gray,
              fontFamily: fontfamily.fontMedium,
              fontSize: RFValue(14),
              fontWeight: fontWeight.medium,
              marginStart: responsiveWidth(3),
            }}
          />
          <SvgXml
            xml={languagesvg}
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
            style={{
              position: 'absolute',
              left: responsiveWidth(3),
              top: responsiveHeight(3.5),
            }}
          />
        </TouchableOpacity>

        <BlueButton name={'NEXT'} style={{marginTop:responsiveHeight(3)}} onPress={()=>{navigation.navigate('ContactDetails')}} />
      </ScrollView>
    </View>
  );
};

export default Signup;

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
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
