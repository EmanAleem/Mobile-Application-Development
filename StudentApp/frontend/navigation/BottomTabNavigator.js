import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactScreen from "../screens/ContactScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { colors } from "../styles/globalStyles";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

function tabIcon(routeName, color, size) {
  const icons = {
    Home: "home",
    Settings: "settings",
    Contact: "mail",
  };

  return <Ionicons name={icons[routeName]} size={size} color={color} />;
}

function screenOptions({ route }) {
  return {
    headerStyle: { backgroundColor: colors.navy },
    headerTintColor: colors.white,
    headerTitleAlign: "center",
    tabBarActiveTintColor: colors.indigo,
    tabBarInactiveTintColor: "#7C879D",
    tabBarIcon: function showTabIcon({ color, size }) {
      return tabIcon(route.name, color, size);
    },
  };
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} options={{ title: "Contact Us" }} />
    </Tab.Navigator>
  );
}
