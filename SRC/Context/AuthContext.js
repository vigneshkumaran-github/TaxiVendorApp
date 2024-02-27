import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  // const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [netConnected,setNetConnected] = useState(null)
  let a = 'HELLO';
  const [UserToken, setUserToken] = useState(null);

  const checkUser = async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        // setUserDetails(details);
        setUserToken(token);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      } //
      const loc = await AsyncStorage.getItem('location');
      if(loc){
        const val = JSON.parse(loc);
        setLocationData(val)
      }
    } catch (err) {
      setIsLoading(false);
    }
  };

  const Logout = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('refreshToken');
    setUserToken(null);
  };

//   useEffect(() => {
//     checkUser();
//   }, [netConnected]);

  let contextValue = {
    a,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
