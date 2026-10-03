import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles";

export default function ContactScreen(props) {
  const [email, setEmail] = useState("");

  function submitEmail() {
    Alert.alert("Submitted", "Your email has been submitted.");
  }

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.text}>✉ Enter your email below</Text>
        <TextInput style={styles.input} placeholder="example@email.com" value={email} onChangeText={setEmail} keyboardType="email-address" inputMode="email" autoCapitalize="none" />
        <TouchableOpacity style={styles.button} onPress={submitEmail}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={props.goHome} style={[styles.backButton, { marginTop: 25 }]}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
