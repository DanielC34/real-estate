import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "@/constants/images";
import Google from "../assets/icons/google.png"
const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flex: 1 }} className="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-15">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome To MoveScout!
          </Text>

          <Text className="px-10 text-4xl font-rubikBold text-wrap text-header text-center mt-3">
            Getting you closer to your
            <Text className="text-purple-600 text-rubikBold"> dream home!</Text>
          </Text>

          <Text className="text-base text-center font-rubik text-black-200 text-subheader mt-3">
            Use your Google account to login
          </Text>

          {/* Google sign in button */}
          <TouchableOpacity className="mt-4 border border-black-300 rounded-full w-4/5 mx-auto">
            <View className="flex flex-row items-center justify-center bg-white py-2 px-4 rounded-full border-black-300">
              <Image source={Google} className="w-5 h-5 mr-2" resizeMode="contain" />
              <Text className="text-black font-rubik">Sign in with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn