import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles, { colors } from "../styles/globalStyles";

export default function ContactScreen({ navigation }) {
  const [email, setEmail] = useState("");

  function submit() {
    Alert.alert("Submitted", "Your email has been submitted.");
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.sky }]}>
      
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

        <Text style={styles.title}>Contact Us</Text>

        <Text style={styles.subtitle}>
          Have a question? Leave your email and we will be in touch.
        </Text>

        <View
          style={[
            styles.card,
            {
              alignItems: "center",
              marginTop: 30,
              width: "100%",
            },
          ]}
        >
          
          <View style={styles.iconCircle}>
            <Ionicons
              name="mail"
              size={32}
              color={colors.indigo}
            />
          </View>

          <Text
            style={[
              styles.label,
              {
                marginTop: 16,
              },
            ]}
          >
            Email address
          </Text>

          <View style={styles.inputRow}>
            <Ionicons
              name="mail-outline"
              size={20}
              color={colors.indigo}
            />

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              placeholderTextColor="#8A95AA"
              style={{
                color: colors.ink,
                flex: 1,
                fontSize: 16,
                paddingVertical: 14,
                paddingRight: 12,
              }}
              keyboardType="email-address"
              inputMode="email"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <TouchableOpacity
            onPress={submit}
            activeOpacity={0.85}
            style={[
              styles.button,
              {
                marginTop: 22,
              },
            ]}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );

  function goHome() {
    navigation.navigate("Home");
  }
}