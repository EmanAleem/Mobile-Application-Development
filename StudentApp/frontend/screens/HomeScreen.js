import Ionicons from "@expo/vector-icons/Ionicons";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles, { colors } from "../styles/globalStyles";

const backgroundImage = {
  uri: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
};

export default function HomeScreen({ navigation }) {
  function openProfile() {
    navigation.navigate("Profile");
  }

  function openSettings() {
    navigation.getParent().navigate("Settings");
  }

  function openContact() {
    navigation.getParent().navigate("Contact");
  }

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(10, 21, 50, 0.75)",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <View style={styles.content}>

          <View
            style={[
              styles.iconCircle,
              {
                backgroundColor: "rgba(255,255,255,0.18)",
                marginBottom: 18,
              },
            ]}
          >
            <Ionicons
              name="school"
              size={33}
              color={colors.white}
            />
          </View>

          <Text
            style={{
              color: "#BFD1FF",
              fontWeight: "800",
              letterSpacing: 2,
              fontSize: 12,
            }}
          >
            WELCOME TO
          </Text>

          <Text
            style={[
              styles.title,
              {
                color: colors.white,
                fontSize: 44,
                marginTop: 10,
              },
            ]}
          >
            Student Hub
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color: "#E0E8FF",
                marginBottom: 28,
                maxWidth: 290,
              },
            ]}
          >
            Learn, grow, and stay connected in one place.
          </Text>

        </View>

        <View
          style={{
            gap: 12,
            width: "100%",
          }}
        >
          <HomeButton
            label="My Profile"
            icon="person"
            onPress={openProfile}
          />

          <HomeButton
            label="Settings"
            icon="settings"
            onPress={openSettings}
          />

          <HomeButton
            label="Contact Us"
            icon="mail"
            onPress={openContact}
          />
        </View>

      </View>
    </ImageBackground>
  );
}

function HomeButton({ label, icon, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.82}
      style={[
        styles.button,
        {
          backgroundColor: "rgba(255, 255, 255, 0.96)",
        },
      ]}
    >
      <Ionicons
        name={icon}
        size={20}
        color={colors.navy}
        style={{ marginRight: 10 }}
      />

      <Text
        style={[
          styles.buttonText,
          {
            color: colors.navy,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}