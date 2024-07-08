import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import SplashScreen from "./screens/SplashScreen";
import CreateCalendarSection from "./screens/CreateCalendarSection";
import StudentInfo from "./components/StudentInfo";
import AddLocationSection from "./components/AddLocationSection";
import OverlayDateEnd from "./components/OverlayDateEnd";
import OverlayDateStart from "./components/OverlayDateStart";
import OverlayTimeStart from "./components/OverlayTimeStart";
import OverlayTimeEnd from "./components/OverlayTimeEnd";
import OverlayDateEnd1 from "./components/OverlayDateEnd1";
import OverlayDateStart1 from "./components/OverlayDateStart1";
import AddLocationSection1 from "./screens/AddLocationSection1";
import CreateCalendarSectionSchedu from "./components/CreateCalendarSectionSchedu";
import CreateCalendarSectionAddSc from "./components/CreateCalendarSectionAddSc";
import StudentInfo1 from "./components/StudentInfo1";
import StudentInfo2 from "./components/StudentInfo2";
import SignUpSection from "./components/SignUpSection";
import SignInSection from "./screens/SignInSection";
import FrameInstance from "./screens/FrameInstance";
import OverlayTimeStart1 from "./components/OverlayTimeStart1";
import OverlayTimeEnd1 from "./components/OverlayTimeEnd1";
import CreateTaskSection from "./screens/CreateTaskSection";
import CreatePerformanceSection from "./screens/CreatePerformanceSection";
import OverlayTaskOption from "./components/OverlayTaskOption";
import OverlayTaskOption1 from "./components/OverlayTaskOption1";
import OverlayTaskOption2 from "./components/OverlayTaskOption2";
import OverlayTaskOption3 from "./components/OverlayTaskOption3";
import StudentInfo3 from "./screens/StudentInfo3";
import JoinCalendarSection from "./screens/JoinCalendarSection";
import StudentInfo4 from "./screens/StudentInfo4";
import StudentInfo5 from "./screens/StudentInfo5";
import OverlayShareLink1 from "./components/OverlayShareLink1";
import OverlayMap1 from "./components/OverlayMap1";
import OverlayJoinClassroom from "./components/OverlayJoinClassroom";
import JoinMapAlarmSection from "./screens/JoinMapAlarmSection";
import OverlayShareLink from "./components/OverlayShareLink";
import Profile from "./screens/Profile";
import CreateMapAlarmSection from "./screens/CreateMapAlarmSection";
import Settings from "./screens/Settings";
import OverlayMap from "./components/OverlayMap";
import SettingsEditPersonalInfo1 from "./screens/SettingsEditPersonalInfo1";
import SettingsEditPersonalInfo from "./screens/SettingsEditPersonalInfo";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'AbrilFatface-Regular': require('./assets/fonts/AbrilFatface-Regular.ttf'),
    'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'Oswald-Medium': require('./assets/fonts/Oswald-Medium.ttf'),
    'RobotoCondensed-Regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'RobotoCondensed-Bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
    'IBMPlexMono-Regular': require('./assets/fonts/IBMPlexMono-Regular.ttf'),
    'IBMPlexMono-Bold': require('./assets/fonts/IBMPlexMono-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Abel-Regular': require('./assets/fonts/Abel-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return null; // Or handle loading state here
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {hideSplashScreen ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="CreateCalendarSection" component={CreateCalendarSection} />
            <Stack.Screen name="AddLocationSection" component={AddLocationSection} />
            <Stack.Screen name="AddLocationSection1" component={AddLocationSection1} />
            <Stack.Screen name="CreateCalendarSectionSchedu" component={CreateCalendarSectionSchedu} />
            <Stack.Screen name="CreateCalendarSectionAddSc" component={CreateCalendarSectionAddSc} />
            <Stack.Screen name="SignUpSection" component={SignUpSection} />
            <Stack.Screen name="SignInSection" component={SignInSection} />
            <Stack.Screen name="FrameInstance" component={FrameInstance} />
            <Stack.Screen name="CreateTaskSection" component={CreateTaskSection} />
            <Stack.Screen name="CreatePerformanceSection" component={CreatePerformanceSection} />
            <Stack.Screen name="OverlayTaskOption" component={OverlayTaskOption} />
            <Stack.Screen name="OverlayTaskOption1" component={OverlayTaskOption1} />
            <Stack.Screen name="OverlayTaskOption2" component={OverlayTaskOption2} />
            <Stack.Screen name="OverlayTaskOption3" component={OverlayTaskOption3} />
            <Stack.Screen name="StudentInfo3" component={StudentInfo3} />
            <Stack.Screen name="JoinCalendarSection" component={JoinCalendarSection} />
            <Stack.Screen name="StudentInfo4" component={StudentInfo4} />
            <Stack.Screen name="StudentInfo5" component={StudentInfo5} />
            <Stack.Screen name="OverlayMap1" component={OverlayMap1} />
            <Stack.Screen name="OverlayJoinClassroom" component={OverlayJoinClassroom} />
            <Stack.Screen name="JoinMapAlarmSection" component={JoinMapAlarmSection} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="CreateMapAlarmSection" component={CreateMapAlarmSection} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="OverlayMap" component={OverlayMap} />
            <Stack.Screen name="SettingsEditPersonalInfo1" component={SettingsEditPersonalInfo1} />
            <Stack.Screen name="SettingsEditPersonalInfo" component={SettingsEditPersonalInfo} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
