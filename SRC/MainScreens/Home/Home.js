import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import TopView from './Components/TopView';
import {RFValue} from 'react-native-responsive-fontsize';
import StatusCard from './Components/StatusCard';
import {AuthContext} from '../../Context/AuthContext';
import GraphCard from './Components/GraphCard';
import { SvgXml } from 'react-native-svg';
import { refreshsvg } from '../../Resources/Svg/Home';

const Home = () => {
  const {logoutModal, setLogoutModal} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TopView />
      <View style={{flexDirection: 'row', alignItems: 'center', width: responsiveWidth(90), alignSelf: 'center', marginTop: responsiveHeight(2)}}>
        <Text style={styles.text1}>Welcome , </Text>
        <Text style={styles.text2}>Daryl Mitchell</Text>
      </View>

      <StatusCard />
      <GraphCard />

      <TouchableOpacity style={styles.btn} onPress={()=>{ navigation.openDrawer()}}>
            <SvgXml xml={refreshsvg} width={responsiveHeight(4)} height={responsiveHeight(4)} />
        </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={logoutModal}
        onRequestClose={() => {
          setLogoutModal(!logoutModal);
        }}>
        <View style={styles.modalView}>
          <View style={styles.modalCard}>
            <Text style={styles.text2}>Are you sure want to logout?</Text>
            <View style={styles.btncontainer}>
              <TouchableOpacity
                style={[styles.modalbtn, {backgroundColor: colors.primarycolor}]}
                onPress={() => {
                  setLogoutModal(!logoutModal);
                }}>
                <Text style={[styles.modalbtntxt, {color: colors.white}]}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalbtn, {backgroundColor: colors.primarycolorlight}]}
                onPress={() => {
                  setLogoutModal(!logoutModal);
                }}>
                <Text style={[styles.modalbtntxt, {color: colors.primarycolor}]}>YES</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  topView: {
    width: responsiveWidth(90),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
  },
  text2: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(16),
    fontWeight: fontWeight.medium,
  },
  modalView: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: responsiveWidth(90),
    height: responsiveHeight(20),
    borderRadius: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btncontainer: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalbtn: {
    width: responsiveWidth(38),
    height: responsiveHeight(7),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalbtntxt: {
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(15),
    fontWeight: fontWeight.medium,
    letterSpacing: responsiveWidth(1),
  },
  btn:{
    width:responsiveHeight(7),
    height:responsiveHeight(7),
    borderRadius:responsiveHeight(7)/2,
    backgroundColor:colors.white,
    alignItems:'center',
    justifyContent:'center',
    elevation:5,
    position:'absolute',
    right:responsiveWidth(5),
    bottom:responsiveHeight(5)
},
});
