import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 200 : 0,
    alignContent: "center",
    alignItems: "center"
  },
  header: {
    flexDirection: "row"
  },
  text: {
    fontSize: 24,
    fontWeight: "700"
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: "80%",
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    gap: 10
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  }
});
