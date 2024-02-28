import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import ToggleSwitch from 'toggle-switch-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ResponsiveImage from 'react-native-responsive-image';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {historywhitesvg, starsvg, vehiclesvg} from '../../Resources/Svg/History';
import PageHeader from '../../CustomComponents/PageHeader';
import { useNavigation } from '@react-navigation/native';
import BlueButton from '../../CustomComponents/BlueButton';

const VehicleDetails = () => {
  const navigation=useNavigation()
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <PageHeader name={'Vehicle Details'} />

      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate('VehicleHistory');
        }}>
        <SvgXml xml={vehiclesvg} width={responsiveWidth(13)} height={responsiveHeight(10)} />
        {/* <ResponsiveImage style={styles.image} borderRadius={responsiveHeight(7) / 2} source={{uri: 'https://gossipgist.com/uploads/3/cristiano-ronaldo.jpg'}} /> */}
        <View style={{height: responsiveHeight(6), justifyContent: 'space-evenly', width: responsiveWidth(50), marginStart: responsiveWidth(2)}}>
          <Text style={styles.text1}>Hyundai Verna</Text>
          <Text style={styles.text3}>TN 65 AQ 1398</Text>
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

      <View style={styles.card2}>
        <View style={{}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>MODEL</Text>
          <Text style={styles.text1}>2023</Text>
        </View>

        <View style={{marginTop: responsiveHeight(1)}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>COLOUR</Text>
          <Text style={styles.text1}>Black</Text>
        </View>

        <View style={{marginTop: responsiveHeight(1)}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>REGISTRATION NUMBER</Text>
          <Text style={styles.text1}>TN 65 AQ 1398</Text>
        </View>

        <View style={{marginTop: responsiveHeight(1)}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>DRIVER</Text>
          <Text style={styles.text1}>Ajith Kumar</Text>
        </View>

        <View style={{marginTop: responsiveHeight(1)}}>
          <Text style={[styles.text3, {marginBottom: responsiveHeight(0.5)}]}>KILOMETRES</Text>
          <Text style={styles.text1}>45000</Text>
        </View>
      </View>
     <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('VehicleHistory')}}>
     <SvgXml xml={historywhitesvg} width={responsiveWidth(6)} height={responsiveHeight(4)} />
     <Text style={styles.btntext}>{' '}View Vehicle History</Text>
     </TouchableOpacity>
    </View>
  );
};

export default VehicleDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
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
    marginBottom: responsiveHeight(1),
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
  card2: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: responsiveWidth(3),
    marginTop: responsiveHeight(2),
  },
  btn:{
    width:responsiveWidth(50),
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:colors.primarycolor,
    height:responsiveHeight(6),
    borderRadius:10,
    alignSelf:'flex-end',
    marginHorizontal:responsiveWidth(5),
    marginTop:responsiveHeight(1),
    justifyContent:'center'
  },
  btntext:{
    color: colors.white,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.medium,
  }
});
