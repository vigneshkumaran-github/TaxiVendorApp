import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import PageHeader from '../../CustomComponents/PageHeader';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {camerablacksvg} from '../../Resources/Svg/Earnings';
import {RFValue} from 'react-native-responsive-fontsize';
import {calendarsvg, callsvg, gendersvg, namesvg, numbersvg} from '../../Resources/Svg/Auth';
import {SelectList} from 'react-native-dropdown-select-list';
import BlueButton from '../../CustomComponents/BlueButton';
import { pdfsvg } from '../../Resources/Svg/History';
import { useNavigation } from '@react-navigation/native';

const AddDriver = () => {
  const navigation = useNavigation()
  const [fullname, setFulllName] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNo, setMobile] = useState('');
  const [licenceNo, setLicenceNo] = useState('');
  const [gender,setGender] = useState()

  const genderData = [
    {key: '1', value: 'Male'},
    {key: '2', value: 'Feale'},
    {key: '3', value: 'Male'},
  ];
  return (
    <View style={styles.container}>
      <PageHeader name={'Add Driver'} />
      <ScrollView>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.addbtn}>
            <SvgXml xml={camerablacksvg} width={responsiveWidth(10)} height={responsiveWidth(10)} />
            <View style={styles.plusbtn}>
              <Text style={styles.plustext}>+</Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.inputContainer, {marginTop: responsiveHeight(5)}]}>
            <SvgXml xml={namesvg} width={responsiveWidth(8)} height={responsiveWidth(8)} />
            <TextInput
              style={[styles.input]}
              placeholder={'Full Name'}
              placeholderTextColor={colors.gray}
              inputMode="text"
              value={mobileNo}
              maxLength={25}
              onChangeText={val => {
                setFulllName(val);
              }}
              // onFocus={() => setFocused(1)}
              // onBlur={() => setFocused(0)}
            />
          </View>

          <View style={styles.inputContainer}>
            <SvgXml xml={calendarsvg} width={responsiveWidth(8)} height={responsiveWidth(8)} />
            <TextInput
              style={[styles.input]}
              placeholder={'Date Of Birth'}
              placeholderTextColor={colors.gray}
              inputMode="text"
              value={dob}
              maxLength={25}
              onChangeText={val => {
                setDob(val);
              }}
              // onFocus={() => setFocused(1)}
              // onBlur={() => setFocused(0)}
            />
          </View>

          <TouchableOpacity style={{justifyContent: 'center'}}>
            <SelectList
              setSelected={val => setGender(val)}
              data={genderData}
              save="value"
              search={false}
              maxHeight={responsiveHeight(15)}
              placeholder="Gender"
              boxStyles={[styles.inputContainer, {paddingStart: responsiveWidth(10)}]}
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

          <View style={styles.inputContainer}>
            <SvgXml xml={callsvg} width={responsiveWidth(8)} height={responsiveWidth(8)} />
            <TextInput
              style={[styles.input]}
              placeholder={'Mobile Number'}
              placeholderTextColor={colors.gray}
              inputMode="text"
              value={mobileNo}
              maxLength={25}
              onChangeText={val => {
                setMobile(val);
              }}
              // onFocus={() => setFocused(1)}
              // onBlur={() => setFocused(0)}
            />
          </View>

          <View style={styles.inputContainer}>
            <SvgXml xml={numbersvg} width={responsiveWidth(8)} height={responsiveWidth(8)} />
            <TextInput
              style={[styles.input]}
              placeholder={'Licence Number'}
              placeholderTextColor={colors.gray}
              inputMode="text"
              value={licenceNo}
              maxLength={25}
              onChangeText={val => {
                setLicenceNo(val);
              }}
            />
          </View>

          <TouchableOpacity style={styles.pdfcard}>
          <SvgXml xml={pdfsvg} width={responsiveHeight(7)} height={responsiveWidth(15)} />
          <Text style={styles.italictext}>Upload Driving Licence <Text style={styles.pdftext}>PDF</Text></Text>
          </TouchableOpacity>

          <BlueButton name={'FINISH'} onPress={()=>{navigation.navigate('DriverSuccess')}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  subContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
  },
  addbtn: {
    width: responsiveWidth(23),
    height: responsiveWidth(23),
    borderRadius: responsiveWidth(23) / 2,
    backgroundColor: colors.white,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plustext: {
    color: colors.white,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
  },
  plusbtn: {
    position: 'absolute',
    top: responsiveWidth(16),
    start: responsiveWidth(15),
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primarycolor,
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
  pdfcard: {
    width: responsiveWidth(90),
    alignItems: 'center',
    height: responsiveHeight(13),
    marginVertical: responsiveHeight(2),
    borderWidth: 0.9,
    borderColor: colors.primarycolor,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent:'space-evenly'
  },
  italictext:{
    color: colors.Textcolor,
    fontFamily: fontfamily.fontItalic,
    fontSize: RFValue(15),
    fontWeight: fontWeight.medium,
  },
  pdftext:{
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(14),
    fontWeight: fontWeight.bold,
  },
});
