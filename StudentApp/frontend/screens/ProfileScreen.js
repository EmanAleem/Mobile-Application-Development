import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, TextInput, View } from "react-native";
import styles, { colors } from "../styles/globalStyles";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: colors.sky }]}>
      <View style={styles.content}>

        <Text style={styles.title}>My Profile</Text>

        <Text style={styles.subtitle}>
          Type below and see your details live.
        </Text>

        <View
          style={[
            styles.card,
            {
              alignItems: "center",
              marginTop: 24,
              width: "100%",
            },
          ]}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85",
            }}
            style={{
              width: 104,
              height: 104,
              borderRadius: 52,
              borderWidth: 4,
              borderColor: "#DCE5FF",
            }}
          />

          <Text
            style={{
              color: colors.ink,
              fontSize: 21,
              fontWeight: "800",
              marginTop: 14,
            }}
          >
            {name || "Your name"}
          </Text>

          <Text
            style={{
              color: colors.muted,
              fontSize: 15,
              marginTop: 4,
            }}
          >
            {age ? `${age} years old` : "Your age will appear here"}
          </Text>
        </View>

        <Text style={styles.label}>Name</Text>

        <View style={styles.inputRow}>
          <Ionicons
            name="person-outline"
            size={20}
            color={colors.indigo}
          />

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#8A95AA"
            style={{
              color: colors.ink,
              flex: 1,
              fontSize: 16,
              padding: 14,
            }}
            inputMode="text"
          />
        </View>

        <Text style={styles.label}>Age</Text>

        <View style={styles.inputRow}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color={colors.indigo}
          />

          <TextInput
            value={age}
            onChangeText={setAge}
            placeholder="Enter your age"
            placeholderTextColor="#8A95AA"
            style={{
              color: colors.ink,
              flex: 1,
              fontSize: 16,
              padding: 14,
            }}
            keyboardType="numeric"
            inputMode="numeric"
            maxLength={3}
          />
        </View>

      </View>
    </View>
  );
}