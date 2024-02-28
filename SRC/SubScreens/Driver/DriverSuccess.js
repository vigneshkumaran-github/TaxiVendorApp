import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import BlueButton from '../../CustomComponents/BlueButton';
import {useNavigation} from '@react-navigation/native';

const DriverSuccess = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ResponsiveImage style={styles.image} source={require('../../Resources/Images/waiting.png')} />
      <Text style={styles.text1}>Successful!</Text>
      <Text style={styles.text2}>The driver will be added once the admin verifies the details</Text>

      <BlueButton
        name={'CONTINUE'}
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default DriverSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: responsiveWidth(70),
    height: responsiveHeight(35),
    // backgroundColor:'red'
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
    marginTop: responsiveHeight(2),
  },
  text2: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(13),
    fontWeight: fontWeight.medium,
    width: responsiveWidth(80),
    marginVertical: responsiveHeight(2),
    textAlign: 'center',
  },
});
