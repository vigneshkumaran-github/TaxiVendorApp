import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../MainScreens/AuthScreens/WelcomeScreen';
import Login from '../MainScreens/AuthScreens/Login';
import Signup from '../MainScreens/AuthScreens/Signup';
import ContactDetails from '../MainScreens/AuthScreens/ContactDetails';
import OtpScreen from '../MainScreens/AuthScreens/OtpScreen';
import Home from '../MainScreens/Home/Home';
import RideEarnings from '../SubScreens/RideEarnings/RideEarnings';
import Contact from '../SubScreens/Contact&Support/Contact';
import EditProfile from '../SubScreens/EditProfile/EditProfile';
import Notifications from '../SubScreens/Notification/Notifications';
import MyFleetHistory from '../SubScreens/MyFleetHistories/MyFleetHistory';
import DriverDetails from '../SubScreens/Driver/DriverDetails';
import AddDriver from '../SubScreens/Driver/AddDriver';
import VehicleDetails from '../SubScreens/Vehicle/VehicleDetails';
import AddVehicle from '../SubScreens/Vehicle/AddVehicle';
import VehicleHistory from '../SubScreens/Vehicle/VehicleHistory';
import VehicleSuccess from '../SubScreens/Vehicle/VehicleSuccess';
import DriverSuccess from '../SubScreens/Driver/DriverSuccess';

const StackConfig = {headerShown: false};
const HomeStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AuthStackWithSplash = createNativeStackNavigator();

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={StackConfig} initialRouteName="WelcomeScreen">
      {/* <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={Login} /> */}
      <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
      {/* <AuthStack.Screen name="Signup" component={Signup} /> */}
      <AuthStack.Screen name="ContactDetails" component={ContactDetails} />
      <AuthStack.Screen name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={StackConfig} initialRouteName="WelcomeScreen">
      <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ContactDetails" component={ContactDetails} />
      <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="RideEarnings" component={RideEarnings} />
      <HomeStack.Screen name="Contact" component={Contact} />
      <HomeStack.Screen name="EditProfile" component={EditProfile} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="MyFleetHistory" component={MyFleetHistory} />
      <HomeStack.Screen name="DriverDetails" component={DriverDetails} />
      <HomeStack.Screen name="AddDriver" component={AddDriver} />
      <HomeStack.Screen name="DriverSuccess" component={DriverSuccess} />
      <HomeStack.Screen name="VehicleDetails" component={VehicleDetails} />
      <HomeStack.Screen name="AddVehicle" component={AddVehicle} />
      <HomeStack.Screen name="VehicleHistory" component={VehicleHistory} />
      <HomeStack.Screen name="VehicleSuccess" component={VehicleSuccess} />
    </HomeStack.Navigator>
  );
};
