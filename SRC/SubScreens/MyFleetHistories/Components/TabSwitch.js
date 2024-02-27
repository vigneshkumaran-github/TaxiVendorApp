import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontWeight, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';

const TabSwitch = ({selected, setSelected}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <TouchableOpacity
          style={[styles.card]}
          onPress={() => {
            setSelected(1);
          }}>
          <Text style={selected === 1 ? styles.text1 : styles.text2}>Drivers</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            setSelected(2);
          }}>
          <Text style={selected === 2 ? styles.text1 : styles.text2}>Vehicle</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.line, {alignItems: selected === 1 ? 'flex-start' : 'flex-end'}]}>
        <View style={styles.line2} />
      </View>
    </View>
  );
};

export default TabSwitch;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  textcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    width: responsiveWidth(44),
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: responsiveWidth(90),
    height: responsiveHeight(0.2),
    backgroundColor: colors.boxGray,
    justifyContent: 'center',
    marginTop: responsiveHeight(1.5),
  },
  line2: {
    width: responsiveWidth(46),
    backgroundColor: colors.primarycolor,
    height: responsiveHeight(0.9),
    borderRadius: 5,
  },
  text2: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(15),
    fontWeight: fontWeight.regular,
  },
  text1: {
    color: colors.primarycolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(15),
    fontWeight: fontWeight.regular,
  },
});