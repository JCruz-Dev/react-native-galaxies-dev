import { Button, SafeAreaView, Text } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
const feed = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed</Text>
      <Button title="Go to Profile" onPress={() => router.push("/profile")} />
    </SafeAreaView>
  );
};

export default feed;
