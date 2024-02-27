import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontWeight, fontfamily} from '../../../Constants/DesignConstants';
import {SvgXml} from 'react-native-svg';
import {carsvg} from '../../../Resources/Svg/Home';
import {dropdownsvg, steeringsvg} from '../../../Resources/Svg/Earnings';
import {RFValue} from 'react-native-responsive-fontsize';
import FareDetails from '../../../CustomComponents/FareDetails';
import ResponsiveImage from 'react-native-responsive-image';

const EarningsCard = ({selected, setSelected, item, index}) => {


    const onSelect=()=>{
        if(selected===index){
            setSelected('')
        }
        else{
            setSelected(index);
        }
    }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
       onSelect()
      }}>
      {/* Top View */}
      <View style={styles.topView}>
        <ResponsiveImage style={styles.carImage} source={require('../../../Resources/Images/yellowcar.png')} resizeMode={'contain'} />
        <View
          style={{
            height: responsiveHeight(6),
            width: responsiveWidth(40),
            marginStart: responsiveWidth(2),
          }}>
          <Text style={styles.text1}>Hyundai Verna</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SvgXml xml={steeringsvg} width={responsiveWidth(5)} height={responsiveHeight(4)} />
            <Text style={styles.text2}> Luka Modric</Text>
          </View>
        </View>

        <View
          style={{
            height: responsiveHeight(6),
            width: responsiveWidth(23),
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginStart: responsiveWidth(2),
          }}>
          <Text style={styles.amountext}>₹5000</Text>
        </View>
      </View>
      <View style={styles.line} />

      {/* Center View */}
      {selected === index && (
        <View style={{width: responsiveWidth(85), alignSelf: 'center'}}>
          <View>
            <Text style={styles.centertext2}>VEHICLE TYPE</Text>
            <Text style={styles.centertext1}>Sedan</Text>
          </View>
          <View>
            <Text style={styles.centertext2}>VEHICLE NUMBER</Text>
            <Text style={styles.centertext1}>TN 65 AQ 1398</Text>
          </View>
          <View>
            <Text style={styles.centertext2}>TRIP TYPE</Text>
            <Text style={styles.centertext1}>Outstation</Text>
          </View>
          <View style={{marginTop: responsiveHeight(0.5)}}>
            <Text style={styles.centertext2}>FARE DETAILS</Text>
            <FareDetails />
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.bottomView} onPress={()=>{onSelect()}}>
        <SvgXml xml={dropdownsvg} height={responsiveHeight(3)} width={responsiveWidth(5)} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default EarningsCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 2,
    marginTop: responsiveHeight(1),
    paddingVertical: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(85),
    alignSelf: 'center',
    height: responsiveHeight(7),
  },
  amountext: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
  text2: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.medium,
  },
  line: {
    width: responsiveWidth(90),
    height: 1,
    backgroundColor: colors.boxGray,
    marginVertical: responsiveHeight(1),
  },
  centertext1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
    marginTop: responsiveHeight(0.5),
  },
  centertext2: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.medium,
    marginTop: responsiveHeight(1),
  },
  bottomView: {
    width: responsiveWidth(85),
    alignSelf: 'center',
    height: responsiveHeight(4),
    alignItems: 'center',
  },
  carImage: {
    width: responsiveWidth(18),
    height: responsiveHeight(6),
    alignSelf: 'flex-end',
  },
});
