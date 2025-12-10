import InitialLayout from "@/components/InitialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider>
        {/* Status Bar */}
        <ExpoStatusBar style="light" backgroundColor="#000" />

        {/* Full-screen container */}
        <View style={{ flex: 1, backgroundColor: "#000" }}>
          <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
            <InitialLayout />
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}
