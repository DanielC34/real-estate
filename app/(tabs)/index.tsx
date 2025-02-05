import { Image, Platform, View, Text } from "react-native";
import "../../globals.css";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          className="absolute bottom-0 left-0 w-[290px] h-[178px]"
        />
      }
    >
      {/* Header Section */}
      <ThemedView className="flex flex-row items-center gap-2">
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Steps */}
      <ThemedView className="gap-2 mb-2">
        <Text className="text-lg font-rubikBold text-white">
          Step 1: Try it
        </Text>
        <Text className="text-base font-rubikRegular text-white">
          Edit <Text className="font-rubikBold">app/(tabs)/index.tsx</Text> to
          see changes. Press{" "}
          <Text className="font-rubikBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </Text>{" "}
          to open developer tools.
        </Text>
      </ThemedView>

      <ThemedView className="gap-2 mb-2">
        <Text className="text-lg font-rubikBold text-white">
          Step 2: Explore
        </Text>
        <Text className="text-base font-rubikExtrabold text-white">
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Text>
      </ThemedView>

      <ThemedView className="gap-2 mb-2">
        <Text className="text-lg font-rubikBold text-white">
          Step 3: Get a fresh start
        </Text>
        <Text className="text-base font-rubikRegular text-white">
          When you're ready, run{" "}
          <Text className="font-rubikBold">npm run reset-project</Text> to get a
          fresh
          <Text className="font-rubikBold"> app</Text> directory. This will move
          the current
          <Text className="font-rubikBold"> app</Text> to
          <Text className="font-rubikBold"> app-example</Text>.
        </Text>
      </ThemedView>
    </ParallaxScrollView>
  );
}
