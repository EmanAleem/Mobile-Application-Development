import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles";

export default function ProfileScreen(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", width: "100%" }}>
        <Text style={styles.title}>Profile</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/200?img=47" }}
          style={{ width: 120, height: 120, borderRadius: 60, alignSelf: "center", marginBottom: 25 }}
        />
        <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} inputMode="text" />
        <TextInput style={styles.input} placeholder="Enter your age" value={age} onChangeText={setAge} keyboardType="numeric" inputMode="numeric" />
        <Text style={styles.text}>Name: {name || "Not entered"}</Text>
        <Text style={styles.text}>Age: {age || "Not entered"}</Text>
      </View>
      <TouchableOpacity onPress={props.goHome} style={[styles.backButton, { marginTop: 8 }]}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
