import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const [userId, setUserId] = useState(""); // State to store user input

  const handleLogin = async () => {
    if (!userId.trim()) {
      Alert.alert("Error", "Please enter a valid User ID");
      return;
    }

    try {
      router.push(`/explore?userId=${userId}`); // Pass userId to next screen
    } catch (error) {
      Alert.alert("Login Failed, Something went wrong!");
    }
  };

  return (
    <SafeAreaView className="bg-blue h-full">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.4,
            bottom: 0,
          }}
        />
        <View className="flex-1 justify-end px-10 pb-[60px]">
          {/* Title */}
          <Text className="text-8xl font-extrabold text-white mb-2">Splitkaro MVP</Text>
          <Text className="text-2xl font-rubik-extrabold mb-10 text-white">
            Track your expenses
          </Text>

          {/* User ID Input */}
          <TextInput
            style={{
              paddingVertical: 15,
              backgroundColor: "#fff",
              borderRadius: 10,
              paddingHorizontal: 10,
              marginBottom: 10,
            }}
            placeholder="Enter User ID"
            value={userId}
            onChangeText={setUserId}
          />

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="rounded-full w-full"
            style={{
              backgroundColor: "#11aadd",
              paddingVertical: 15,
              shadowColor: "#fff",
              shadowOpacity: 0.2,
              shadowRadius: 5,
              shadowOffset: { width: 0, height: 3 },
              elevation: 5, // For Android shadow
            }}
          >
            <Text className="text-lg font-bold text-center text-white">LOGIN {'>'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
