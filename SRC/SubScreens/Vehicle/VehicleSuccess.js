import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import BlueButton from '../../CustomComponents/BlueButton';
import {useNavigation} from '@react-navigation/native';

const VehicleSuccess = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ResponsiveImage style={styles.image} resizeMode={'contain'} source={require('../../Resources/Images/yellowtaxi.png')} />
      <Text style={styles.text1}> Vehicle Added Successfully!</Text>

      <BlueButton
        name={'CONTINUE'}
        onPress={() => {
          navigation.popToTop();
        }}
      />

    </View>
  );
};

export default VehicleSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(20),
    // backgroundColor:'red'
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
    marginTop: responsiveHeight(3),
    marginBottom:responsiveHeight(6),
    width:responsiveWidth(50),
    textAlign:'center'
  },
});
