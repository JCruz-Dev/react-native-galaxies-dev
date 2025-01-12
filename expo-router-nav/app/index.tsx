import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello World</Text>
        <Link href="/profile" asChild>
          <Text style={{ color: "blue" }}>Profile</Text>
        </Link>
        <Link href="/feed" asChild>
          <Text style={{ color: "blue" }}>Feed</Text>
        </Link>
        <Link href="/home" asChild>
          <Text style={{ color: "blue" }}>Home</Text>
        </Link>
        <Link href="/details/123" asChild>
          <Text style={{ color: "blue" }}>Details 123</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Index;
