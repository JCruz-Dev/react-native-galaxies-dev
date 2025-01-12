import { Stack } from "expo-router";

const NewsTack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "News" }} />
      <Stack.Screen name="news" />
    </Stack>
  );
};
export default NewsTack;
