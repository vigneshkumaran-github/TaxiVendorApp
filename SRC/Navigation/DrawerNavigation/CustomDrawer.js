import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

import {RFValue} from 'react-native-responsive-fontsize';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import { namesvg } from '../../Resources/Svg/Auth';
import { colors, fontWeight, fontfamily } from '../../Constants/DesignConstants';
import { bellsvg, contactsvg, historysvg, logoutsvg, rupeesvg } from '../../Resources/Svg/Navigation';

const CustomDrawer = props => {
  const navigation = useNavigation();


  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} style={{backgroundColor: colors.primarycolor, width: responsiveWidth(80)}}>
        <View
          style={{
            width: '100%',
            height: responsiveHeight(20),
            backgroundColor: colors.primarycolor,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', padding: 10}}
            onPress={() => {
              navigation.navigate('EditProfile');
            }}>
            <ResponsiveImage
              style={styles.image}
              source={{
                uri: 'https://gossipgist.com/uploads/3/cristiano-ronaldo.jpg',
              }}
              borderRadius={responsiveWidth(23) / 2}
            />
            <View
              style={{
                justifyContent: 'space-evenly',
                width: responsiveWidth(45),
                marginStart: responsiveWidth(1),
              }}>
              <View>
                <Text style={styles.text1} numberOfLines={2} ellipsizeMode="tail">
                  Crsitiano Ronaldo
                </Text>
                <Text style={styles.text2}>+91 9876543210</Text>
              </View>
              <Text style={styles.text2}>Edit Profile</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{height: responsiveHeight(80), backgroundColor: colors.white}}>
          <DrawerItem
            icon={({color, size}) => <SvgXml xml={bellsvg} width={responsiveWidth(7)} height={responsiveWidth(7)} />}
            label={() => <Text style={styles.itemtext}>Notification</Text>}
            onPress={() => navigation.navigate('Notifications')}
          />
           <DrawerItem
            icon={({color, size}) => <SvgXml xml={rupeesvg} width={responsiveWidth(7)} height={responsiveWidth(7)} />}
            label={() => <Text style={styles.itemtext}>Ride Earnings</Text>}
            onPress={() => navigation.navigate('RideEarnings')}
          />
           <DrawerItem
            icon={({color, size}) => <SvgXml xml={historysvg} width={responsiveWidth(7)} height={responsiveWidth(7)} />}
            label={() => <Text style={styles.itemtext}>My Fleet & Histories</Text>}
            onPress={() => navigation.navigate('MyFleetHistory')}
          />
           <DrawerItem
            icon={({color, size}) => <SvgXml xml={contactsvg} width={responsiveWidth(7)} height={responsiveWidth(7)} />}
            label={() => <Text style={styles.itemtext}>Contact & Support</Text>}
            onPress={() => navigation.navigate('Contact')}
          />
           <DrawerItem
            icon={({color, size}) => <SvgXml xml={logoutsvg} width={responsiveWidth(7)} height={responsiveWidth(7)} />}
            label={() => <Text style={styles.itemtext}>Log Out</Text>}
            onPress={() => navigation.navigate('MyTrips')}
          />
        </View>
        {/* {open && (
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            // enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            enablePanDownToClose
            snapPoints={snapPoints}
            onClose={()=>setOpen(false)}
            onDismiss={() => setOpen(false)}></BottomSheet>
        )} */}
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(23),
    height: responsiveWidth(23),
  },
  text1: {
    color: colors.white,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(15),
    fontWeight: fontWeight.medium,
  },
  text2: {
    color: colors.white,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(11),
    fontWeight: fontWeight.regular,
  },
  itemtext: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(14),
    fontWeight: fontWeight.regular,
  },
  blubtn: {
    width: responsiveWidth(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(7),
    borderRadius: 10,
    backgroundColor: colors.primarycolor,
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
  },
});