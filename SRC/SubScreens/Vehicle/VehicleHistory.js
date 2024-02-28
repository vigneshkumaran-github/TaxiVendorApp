import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageHeader from '../../CustomComponents/PageHeader';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';

const VehicleHistory = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9,11,23,33];
  return (
    <View style={styles.container}>
      <PageHeader name={'Vehicle History'} />
      <FlatList
        data={data}
        style={{}}
        keyExtractor={item => item}
        renderItem={({item, index}) => (
          <View style={styles.card}>
            <View style={{width: responsiveWidth(62), height: responsiveHeight(7), justifyContent: 'space-evenly'}}>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.text1}>TY123D45</Text>
                <Text style={styles.bluetext}> 12.12.23 to 13.12.23</Text>
              </View>
              <Text style={styles.text2}>Outstation | Lionel messi</Text>
            </View>
            <View style={{width: responsiveWidth(24), height: responsiveHeight(7), alignItems: 'flex-end', justifyContent: 'center'}}>
              <Text style={styles.text1}>₹5000</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default VehicleHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  card: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: responsiveHeight(8),
    borderRadius: 11,
    padding: responsiveWidth(2),
    marginVertical:responsiveHeight(0.5)
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(14),
    fontWeight: fontWeight.medium,
  },
  bluetext: {
    color: colors.primarycolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.medium,
  },
  text2: {
    color: colors.gray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    fontWeight: fontWeight.medium,
  },
});
