import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import styles, { colors } from "../styles/globalStyles";

export default function SettingsScreen({ navigation }) {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark
    ? {
        background: "#121827",
        card: "#202A3D",
        text: "#F4F7FF",
        muted: "#B8C2D8",
      }
    : {
        background: colors.lavender,
        card: colors.white,
        text: colors.ink,
        muted: colors.muted,
      };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      
      <TouchableOpacity
        onPress={goHome}
        style={[
          styles.backButton,
          {
            left: 24,
            marginTop: 0,
            position: "absolute",
            top: 20,
            zIndex: 1,
          },
        ]}
      >
        <Ionicons
          name="home-outline"
          size={19}
          color={colors.indigo}
          style={{ marginRight: 7 }}
        />

        <Text style={styles.backButtonText}>Home</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        
        <Text style={[styles.title, { color: theme.text }]}>
          Settings
        </Text>

        <Text style={[styles.subtitle, { color: theme.muted }]}>
          Make Student Hub feel comfortable for you.
        </Text>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              marginTop: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            },
          ]}
        >
          
          <View style={{ flex: 1, paddingRight: 14 }}>
            <Text
              style={{
                color: theme.text,
                fontSize: 18,
                fontWeight: "800",
              }}
            >
              Dark mode
            </Text>

            <Text
              style={{
                color: theme.muted,
                fontSize: 14,
                lineHeight: 20,
                marginTop: 5,
              }}
            >
              Switch the app to a softer, low-light theme.
            </Text>
          </View>

          <Switch
            value={isDark}
            onValueChange={setIsDark}
            trackColor={{
              false: "#C8D1E2",
              true: "#6779FF",
            }}
            thumbColor={isDark ? "#FFFFFF" : "#F8FAFF"}
          />

        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Ionicons
            name={isDark ? "moon" : "sunny"}
            size={54}
            color={isDark ? "#C8C1FF" : "#F5A623"}
          />

          <Text
            style={{
              color: theme.text,
              fontSize: 18,
              fontWeight: "800",
              marginTop: 12,
            }}
          >
            {isDark ? "Dark mode is on" : "Light mode is on"}
          </Text>
        </View>

      </View>
    </View>
  );

  function goHome() {
    navigation.navigate("Home");
  }
}