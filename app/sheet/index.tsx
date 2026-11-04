import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SheetScreen() {
  const onContinue = () => {
    // Close the form sheet, then push a screen on the stack underneath on the next tick.
    // The pushed screen reuses a recycled RNSScreenContentWrapper whose delegate still
    // points at the dismissed sheet, and the red box appears.
    router.back();
    setTimeout(() => router.push("/next"), 0);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onContinue} style={styles.button} testID="continue">
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingTop: 140 },
  button: { backgroundColor: "#007AFF", borderRadius: 12, padding: 16, alignItems: "center" },
  buttonText: { color: "white", fontSize: 17, fontWeight: "600" },
});
