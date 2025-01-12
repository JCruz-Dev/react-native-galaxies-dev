import { Stack, useRouter } from "expo-router";

const StackLayout = () => {
    
  return (
      <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, headerTitle: "Your Home" }} />
      <Stack.Screen name="Home" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="feed" />
    </Stack>
  );
};

export default StackLayout;
