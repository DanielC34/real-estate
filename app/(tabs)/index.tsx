import { Image, Platform, Text, Button, View } from "react-native";
import "../../globals.css";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router"

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
        <ThemedText type="title">Home Page!</ThemedText>
        <HelloWave />
      </ThemedView>

      <View>
        <Link href="/sign-in" className="text-red-600">Go to Sign in page</Link>
      </View>
    </ParallaxScrollView>
  );
}
