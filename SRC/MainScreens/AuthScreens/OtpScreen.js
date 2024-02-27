import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation} from '@react-navigation/native';
import BlueButton from '../../CustomComponents/BlueButton';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const CELL_COUNT = 4;
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.headtext}>OTP</Text>
        <Text style={styles.text1}>
          Enter the code which is sent to the mobile number ***** **876
        </Text>

        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          returnKeyType="done"
          clearButtonMode="never"
          // textContentType="oneTimeCode"
          onSubmitEditing={Keyboard.dismiss}
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(1),
          }}>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <Text style={[styles.smalltext, {color: colors.Textcolor}]}>
              Request{' '}
              <Text style={[styles.smalltext, {color: colors.primarycolor}]}>
                Resend{' '}
              </Text>
              in
            </Text>
          </TouchableOpacity>

          <View>
            <Text style={[styles.smalltext, {color: colors.Textcolor}]}>
              00:35
            </Text>
          </View>
        </View>

        <BlueButton name={"VERIFY"} onPress={()=>{navigation.navigate('Home')}} />
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  subContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
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
  codeFieldRoot: {
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    marginHorizontal: responsiveWidth(2),
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.boxGray,
    borderRadius: 15,
    fontSize: RFValue(18),
    textAlign: 'center',
    lineHeight: responsiveWidth(17),
    color: colors.primarycolor,
    backgroundColor: colors.white,
  },
  focusCell: {
    borderColor: colors.primarycolor,
  },
  smalltext: {
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
});
