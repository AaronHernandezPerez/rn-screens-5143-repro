import { StyleSheet, Text, View } from "react-native";

export default function Next() {
  return (
    <View style={styles.container}>
      <Text>Pushed right after the sheet closed.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
