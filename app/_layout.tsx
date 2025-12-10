import InitialLayout from "@/components/InitialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider>
        {/* Status Bar */}
        <ExpoStatusBar style="light" backgroundColor="#000" />

        {/* Full-screen container */}
        <View style={{ flex: 1, backgroundColor: "#000" }}>
          <SafeAreaView
            style={{ flex: 1 }}
            edges={["top", "bottom"]}
            onLayout={onLayoutRootView}
          >
            <InitialLayout />
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}
