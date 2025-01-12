import { SafeAreaView, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";

const details = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details</Text>
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default details;
