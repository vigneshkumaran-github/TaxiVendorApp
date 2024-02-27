import {StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontWeight, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import ResponsiveImage from 'react-native-responsive-image';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {RFValue} from 'react-native-responsive-fontsize';
import BlueButton from '../../CustomComponents/BlueButton';
import {callsvg, camersvg, namesvg} from '../../Resources/Svg/Auth';
import PageHeader from '../../CustomComponents/PageHeader';

const EditProfile = () => {
  const [imageUri, setImageUri] = useState('https://gossipgist.com/uploads/3/cristiano-ronaldo.jpg');
  const [image, setImage] = useState('');
  const [fullName, setFullName] = useState('Cristiano Ronaldo');
  const [mobileNo, setMobileNo] = useState('9876543210');
  const [focused, setFocused] = useState(0);
  const navigation = useNavigation();

  const getFilename = url => {
    console.log(url.substr(url.lastIndexOf('/') + 1), 'fdhgfhgffhgfhffjhfjfhgfjgj');
    return url.substr(url.lastIndexOf('/') + 1);
  };

  const openFiles = async () => {
    // setModalVisible(false)
    ImagePicker.openPicker({
      multiple: false,
      cropping: true,
      freeStyleCropEnabled: true,
      mediaType: 'photo',
    })
      .then(images => {
        console.log(images, '****Images****');
        setImageUri(images.path);
        setImage({
          uri: Platform.OS === 'android' ? images.path : images.path.replace('file://', ''),
          type: images.mime,
          name: getFilename(images.path),
        });
      })
      .catch(err => console.log(err));
  };

  // const updateProfile = async () => {
  //   if (name?.length < 4) {
  //     showToastRed("Name should contain atleast 4 characters")
  //   }
  //   else {
  //     setLoading(true)
  //     const formData = new FormData();
  //     formData.append('name', name);
  //     image && image?.length !== 0 && formData.append('profile_photo', image?.length !== 0 ? image : null);
  //     console.log(formData, 'nyvgytcxewz');
  //     try {
  //       response = await fetch(BASE_URL + '/customer', {
  //         method: 'PUT',
  //         body: formData,
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //           Accept: 'application/json',
  //           Authorization: 'Bearer ' + (await AsyncStorage.getItem('userToken')),
  //         },
  //       });
  //       let responseJson = await response.json();
  //       console.log(responseJson);
  //       if (responseJson.status === true) {
  //         navigation.goBack()
  //         showToastGreen(responseJson.message)
  //         setLoading(false)
  //       }
  //       else {
  //         showToastRed(responseJson?.error?.message)
  //         setLoading(false)
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  // }

  return (
    <View style={styles.container}>

      <PageHeader name={'Edit Profile'} />
      <TouchableOpacity onPress={()=>{navigation.goBack()}}
      style={{position:'absolute',top:responsiveHeight(6),right:responsiveWidth(4)}}> 
        <Text style={styles.bluetext}>Save</Text>
      </TouchableOpacity>

      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.imageview}
          onPress={() => {
            openFiles();
          }}>
          {imageUri !== '' && <ResponsiveImage source={{uri: imageUri}} style={styles.image} borderRadius={responsiveWidth(22) / 2} />}
          <View style={styles.camerabtn}>
            <SvgXml xml={camersvg} width={responsiveHeight(2)} height={responsiveHeight(2)} />
          </View>
        </TouchableOpacity>
        <Text style={styles.text1}>Cristiano Ronaldo</Text>
      </View>

      <View style={[styles.inputContainer, {borderColor: focused === 1 ? colors.primarycolor : colors.boxGray}]}>
        <SvgXml xml={namesvg} height={responsiveHeight(4)} width={responsiveWidth(6)} />
        <TextInput
          style={[styles.input, {borderColor: focused === 1 ? colors.primarycolor : colors.boxGray}]}
          placeholder={'Full Name'}
          placeholderTextColor={colors.gray}
          inputMode="text"
          value={fullName}
          maxLength={25}
          onChangeText={val => {
            setFullName(val);
          }}
          onFocus={() => setFocused(1)}
          onBlur={() => setFocused(0)}
        />
      </View>

      <View style={[styles.inputContainer, {borderColor: focused === 2 ? colors.primarycolor : colors.boxGray}]}>
        <SvgXml xml={callsvg} height={responsiveHeight(4)} width={responsiveWidth(6)} />
        <TextInput
          style={[styles.input]}
          placeholder={'Mobile Number'}
          placeholderTextColor={colors.gray}
          inputMode="text"
          value={mobileNo}
          maxLength={10}
          onChangeText={val => {
            setMobileNo(val);
          }}
          onFocus={() => setFocused(2)}
          onBlur={() => setFocused(0)}
        />
      </View>

    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  head: {
    backgroundColor: colors.primarycolor,
    width: responsiveWidth(100),
    height: responsiveHeight(25),
  },
  topcircle: {
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    borderRadius: responsiveWidth(50) / 2,
    backgroundColor: colors.primarycolorlight,
    opacity: 0.1,
  },
  position1: {
    position: 'absolute',
    top: -responsiveWidth(20),
  },
  position2: {
    position: 'absolute',
    left: -responsiveWidth(20),
  },
  profile: {
    marginTop: responsiveHeight(5),
    alignItems: 'center',
  },
  imageview: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    borderRadius: responsiveHeight(10) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: responsiveHeight(1),
    borderColor: colors.white,
    backgroundColor: colors.primarycolor,
  },
  image: {
    width: responsiveHeight(9),
    height: responsiveHeight(9),
  },
  camerabtn: {
    width: responsiveHeight(4),
    height: responsiveHeight(4),
    backgroundColor: colors.primarycolor,
    borderRadius: responsiveHeight(4) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -responsiveHeight(1),
    right: -responsiveHeight(1),
  },
  input: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(15),
    fontWeight: fontWeight.medium,
    width: responsiveWidth(80),
    marginStart: responsiveWidth(2),
  },
  inputContainer: {
    marginTop: responsiveHeight(2.5),
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    height: responsiveHeight(7),
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: colors.white,
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  text1: {
    color: colors.Textcolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(15),
    fontWeight: fontWeight.regular,
  },
  bluetext:{
    color: colors.primarycolor,
    fontFamily: fontfamily.fontSemiBold,
    fontSize: RFValue(15),
    fontWeight: fontWeight.medium,
  }
});
