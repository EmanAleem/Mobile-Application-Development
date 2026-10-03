import { View } from "react-native";

import HomeScreen from "./frontend/homescreen";
import ProfileScreen from "./frontend/ProfileScreen";

export default function App() {
  return (
    <View>
      <HomeScreen />
      <ProfileScreen />
    </View>
  );
}