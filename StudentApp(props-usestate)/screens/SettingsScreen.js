import { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

export default function SettingsScreen(props) {
  const [darkMode, setDarkMode] = useState(false);
  const backgroundColor = darkMode ? "#1E1E1E" : "#EEF4FF";
  const textColor = darkMode ? "white" : "#182B5C";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={{ width: "100%" }}>
        <Text style={[styles.title, { color: textColor }]}>Settings</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: darkMode ? "#303030" : "white", padding: 20, borderRadius: 10 }}>
          <Text style={{ color: textColor, fontSize: 18 }}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </View>
      <TouchableOpacity onPress={props.goHome} style={[styles.backButton, { marginTop: 25 }]}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
