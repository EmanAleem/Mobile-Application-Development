import { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ContactScreen from "./screens/ContactScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");

  function goHome() {
    setCurrentScreen("Home");
  }

  if (currentScreen === "Profile") {
    return <ProfileScreen goHome={goHome} />;
  }

  if (currentScreen === "Settings") {
    return <SettingsScreen goHome={goHome} />;
  }

  if (currentScreen === "Contact") {
    return <ContactScreen goHome={goHome} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <HomeScreen changeScreen={setCurrentScreen} />
    </SafeAreaView>
  );
}
