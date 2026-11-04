import { Stack } from "expo-router";

// The form sheet hosts its own stack (a multi-step sheet flow).
export default function SheetLayout() {
  return <Stack screenOptions={{ title: "Sheet" }} />;
}
