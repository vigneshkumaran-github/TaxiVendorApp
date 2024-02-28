import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import PageHeader from '../../CustomComponents/PageHeader';
import {SvgXml} from 'react-native-svg';
import {steeringsvg} from '../../Resources/Svg/Earnings';
import {colorsvg, numbersvg} from '../../Resources/Svg/Auth';
import {infosvg, pdfsvg} from '../../Resources/Svg/History';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BlueButton from '../../CustomComponents/BlueButton';
import { useNavigation } from '@react-navigation/native';

const AddVehicle = () => {
  const navigation = useNavigation()
  const [model, setModel] = useState('');
  const [colour, setColour] = useState('');
  const [regNo, setRegNo] = useState('');
  return (
    <View style={styles.container}>
      <PageHeader name={'Add Vehicle'} />

      <View style={styles.subContainer}>
        <View style={styles.inputContainer}>
          <SvgXml xml={steeringsvg} width={responsiveWidth(8)} height={responsiveWidth(8)} />
          <TextInput
            style={[styles.input]}
            placeholder={'Model'}
            placeholderTextColor={colors.gray}
            inputMode="text"
            value={model}
            maxLength={25}
            onChangeText={val => {
              setModel(val);
            }}
            // onFocus={() => setFocused(1)}
            // onBlur={() => setFocused(0)}
          />
        </View>

        <View style={styles.inputContainer}>
          <SvgXml xml={colorsvg} width={responsiveWidth(8)} height={responsiveWidth(8)} />
          <TextInput
            style={[styles.input]}
            placeholder={'Colour'}
            placeholderTextColor={colors.gray}
            inputMode="text"
            value={colour}
            maxLength={25}
            onChangeText={val => {
              setColour(val);
            }}
            // onFocus={() => setFocused(1)}
            // onBlur={() => setFocused(0)}
          />
        </View>

        <View style={styles.inputContainer}>
          <SvgXml xml={numbersvg} width={responsiveWidth(8)} height={responsiveWidth(8)} />
          <TextInput
            style={[styles.input]}
            placeholder={'Registration Number'}
            placeholderTextColor={colors.gray}
            inputMode="text"
            value={regNo}
            maxLength={25}
            onChangeText={val => {
              setRegNo(val);
            }}
            // onFocus={() => setFocused(1)}
            // onBlur={() => setFocused(0)}
          />
        </View>

        <TouchableOpacity style={styles.pdfcard}>
          <SvgXml xml={pdfsvg} width={responsiveHeight(7)} height={responsiveWidth(15)} />
          <Text style={styles.italictext}>
            Upload RC Book <Text style={styles.pdftext}>PDF</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pdfcard}>
          <SvgXml xml={pdfsvg} width={responsiveHeight(7)} height={responsiveWidth(15)} />
          <Text style={styles.italictext}>
            Upload Insurance <Text style={styles.pdftext}>PDF</Text>
          </Text>
        </TouchableOpacity>

        <BlueButton name={'FINISH'} onPress={() => {navigation.navigate('VehicleSuccess')}} style={{marginTop:responsiveHeight(2)}} />

        <View style={styles.info}>
          <SvgXml xml={infosvg} width={responsiveHeight(3)} height={responsiveWidth(6)} />
          <Text style={styles.infotext}>Only the admin can edit the PDF informations</Text>
        </View>
      </View>
    </View>
  );
};

export default AddVehicle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  subContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
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
    marginTop: responsiveHeight(2),
    borderWidth: 0.9,
    borderColor: colors.primarycolor,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'space-evenly',
  },
  italictext: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontItalic,
    fontSize: RFValue(15),
    fontWeight: fontWeight.medium,
  },
  pdftext: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(14),
    fontWeight: fontWeight.bold,
  },
  info: {
    width: responsiveWidth(90),
    backgroundColor: '#FFF5C2',
    height: responsiveHeight(9),
    borderRadius: 10,
    marginTop: responsiveHeight(2),
    padding: responsiveWidth(5),
    flexDirection: 'row',
  },
  infotext:{
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.regular,
    width:responsiveWidth(70),
    marginStart:responsiveWidth(2)
  }
});
