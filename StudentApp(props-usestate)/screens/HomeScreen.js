import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

export default function HomeScreen(props) {
  function openProfile() {
    props.changeScreen("Profile");
  }

  function openSettings() {
    props.changeScreen("Settings");
  }

  function openContact() {
    props.changeScreen("Contact");
  }

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, backgroundColor: "rgba(12, 28, 72, 0.72)", justifyContent: "center", padding: 25 }}>
        <View>
          <Text style={[styles.title, { color: "white", fontSize: 42 }]}>Student App</Text>
          <Text style={[styles.text, { color: "white" }]}>Welcome to your student space</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={openProfile}>
            <Text style={styles.buttonText}>Go to Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openSettings}>
            <Text style={styles.buttonText}>Go to Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openContact}>
            <Text style={styles.buttonText}>Go to Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
