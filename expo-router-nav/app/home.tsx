import { useRouter } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
const Home = () => {
	const router = useRouter();
	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Home</Text>
			<Button title="Go to Feed" onPress={() => router.push("/feed")} />
		</SafeAreaView>
	);
};

export default Home;
