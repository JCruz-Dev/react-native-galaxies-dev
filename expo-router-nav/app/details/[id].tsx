import { Button, SafeAreaView, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const details = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Details</Text>
      <Text>{id}</Text>
      <Button
        title="Update params"
        onPress={() => {
          router.setParams({ id: "456" });
        }}
      />
    </SafeAreaView>
  );
};

export default details;
