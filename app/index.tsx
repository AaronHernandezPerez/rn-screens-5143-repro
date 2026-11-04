import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Link href="/sheet" style={styles.link} testID="open-sheet">
        Open form sheet
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  link: { fontSize: 18, color: "#007AFF", padding: 16 },
});
