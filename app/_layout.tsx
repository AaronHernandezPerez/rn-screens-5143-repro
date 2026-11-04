import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="next" options={{ title: "Next" }} />
      <Stack.Screen
        name="sheet"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [1],
          headerShown: false,
        }}
      />
    </Stack>
  );
}
