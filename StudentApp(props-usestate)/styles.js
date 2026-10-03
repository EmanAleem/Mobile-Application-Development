import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    padding: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "serif",
    color: "#182B5C",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#45506A",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#AAB8D8",
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    padding: 14,
    width: "100%",
  },
  button: {
    backgroundColor: "#4058C8",
    borderRadius: 10,
    marginTop: 12,
    padding: 15,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    alignSelf: "center",
    backgroundColor: "#4058C8",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  backButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
