import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontWeight, fontfamily} from '../../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {dropdownsvg, steeringsvg} from '../../../Resources/Svg/Earnings';
import {RFValue} from 'react-native-responsive-fontsize';
import ResponsiveImage from 'react-native-responsive-image';
import ToggleSwitch from 'toggle-switch-react-native';
import {searchsvg, starsvg} from '../../../Resources/Svg/History';
import BlueButton from '../../../CustomComponents/BlueButton';

const DriverList = () => {
  const [searchText, setSearchText] = useState('');
  const [toggle, setToggle] = useState(false);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchLayout}>
        <SvgXml xml={searchsvg} width={responsiveWidth(7)} height={responsiveHeight(4)} />
        <TextInput
          style={[styles.input]}
          placeholder={'Search for drivers'}
          placeholderTextColor={colors.Textcolor}
          inputMode="text"
          value={searchText}
          maxLength={25}
          onChangeText={val => {
            setSearchText(val);
          }}
        />
      </TouchableOpacity>
      <View style={styles.totalView}>
        <Text style={styles.text1}>Total Drivers</Text>
        <Text style={styles.text1}>200</Text>
      </View>

      <View style={{height:responsiveHeight(59)}}>
        <FlatList
          data={data}
          keyExtractor={item => item}
          renderItem={({item, index}) => (
            <TouchableOpacity key={index} style={styles.card}>
              <ResponsiveImage style={styles.image} borderRadius={responsiveHeight(7) / 2} source={{uri: 'https://gossipgist.com/uploads/3/cristiano-ronaldo.jpg'}} />
              <View style={{height: responsiveHeight(6), justifyContent: 'space-evenly', width: responsiveWidth(50), marginStart: responsiveWidth(2)}}>
                <Text style={styles.text1}>Jude Bellingham</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SvgXml xml={starsvg} width={responsiveWidth(4)} height={responsiveHeight(3)} />
                  <Text style={styles.text3}> 3.5</Text>
                </View>
              </View>

              <ToggleSwitch
                isOn={toggle}
                onColor={colors.primarycolor}
                offColor={colors.boxGray}
                size="small"
                onToggle={isOn => setToggle(isOn)}
                style={{marginStart: responsiveWidth(4)}}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <BlueButton name={'ADD DRIVER'} />
    </View>
  );
};

export default DriverList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  searchLayout: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderRadius: 10,
    backgroundColor: colors.primarycolorlight,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
  },
  input: {
    width: responsiveWidth(70),
    height: responsiveHeight(7),
    marginStart: responsiveWidth(2),
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(15),
    fontWeight: fontWeight.regular,
  },
  totalView: {
    width: responsiveWidth(90),
    height: responsiveHeight(5),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(4),
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(15),
    fontWeight: fontWeight.medium,
  },
  card: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    height: responsiveHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: responsiveHeight(1),
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: responsiveWidth(3),
    marginBottom:responsiveHeight(1)
  },
  image: {
    width: responsiveHeight(7),
    height: responsiveHeight(7),
  },
  text3: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.medium,
  },
});
