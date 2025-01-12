import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

const index = () => {
  return (
    <View>
      <Link href="/news/1234" asChild>
        <Text style={{ color: "blue" }}>News 123</Text>
      </Link>
      <Link href="/news/134" asChild>
        <Text style={{ color: "blue" }}>News 134</Text>
      </Link>
    </View>
  );
};
export default index;
