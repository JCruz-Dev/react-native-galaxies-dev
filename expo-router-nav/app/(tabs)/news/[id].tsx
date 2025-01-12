import { Button, SafeAreaView, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

const Newsdetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Stack.Screen options={{ headerTitle: `News #${id}` }} />
      <Text>News: {id}</Text>
    </SafeAreaView>
  );
};

export default Newsdetails;
