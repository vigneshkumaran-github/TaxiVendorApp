import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontWeight, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {BarChart} from 'react-native-gifted-charts';

const GraphCard = () => {
  const [selected, setSelected] = useState(1);
  const barData = [
    {value: 250, label: 'Mo'},
    {value: 500, label: 'Tu',},
    {value: 745, label: 'We', },
    {value: 320, label: 'Th'},
    {value: 600, label: 'Fr',},
    {value: 256, label: 'Sa'},
    {value: 300, label: 'Su'},
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.text1}>Total Earnings</Text>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => {
            setSelected(1);
          }}
          style={[styles.btn, {backgroundColor: selected === 1 ? colors.primarycolor : colors.primarycolorlight}]}>
          <Text style={[styles.btntext, {color: selected === 1 ? colors.white : colors.Textcolor}]}>Daily</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelected(2);
          }}
          style={[styles.btn, {backgroundColor: selected === 2 ? colors.primarycolor : colors.primarycolorlight}]}>
          <Text style={[styles.btntext, {color: selected === 2 ? colors.white : colors.Textcolor}]}>Weekly</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelected(3);
          }}
          style={[styles.btn, {backgroundColor: selected === 3 ? colors.primarycolor : colors.primarycolorlight}]}>
          <Text style={[styles.btntext, {color: selected === 3 ? colors.white : colors.Textcolor}]}>Monthly</Text>
        </TouchableOpacity>
      </View>
      <BarChart height={responsiveHeight(15)} width={responsiveWidth(92)} barWidth={responsiveWidth(2)} noOfSections={1} barBorderRadius={4} frontColor={colors.primarycolor} data={barData} yAxisThickness={0} xAxisThickness={0} spacing={responsiveWidth(9)} />
    </View>
  );
};

export default GraphCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(100),
    alignSelf: 'center',
    backgroundColor: colors.white,
    height: responsiveHeight(32),
    borderRadius: 10,
    marginTop: responsiveHeight(3),
    elevation: 5,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1),
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
  },
  btnView: {
    width: responsiveWidth(92),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(1),
  },
  btn: {
    width: responsiveWidth(28),
    height: responsiveHeight(6),
    borderRadius: 5,
    backgroundColor: colors.primarycolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
});
