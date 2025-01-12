import { Link } from "expo-router";
import { Text, View } from "react-native";

const Page = () => {
  return (
    <View>
      <Link href="/(pokemon)/test">
        <Text>Test</Text>
      </Link>
    </View>
  );
};
export default Page;
