import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, headerTitle: "Your Home" }}
      />
      <Stack.Screen name="Home" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="feed" />
      <Stack.Screen name="drawer" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
};

export default StackLayout;
