import { Stack, useNavigation } from "expo-router";
import { Text, View, Button } from "react-native";

const Modal = () => {
  const navigation = useNavigation();
  const isPresented = navigation.canGoBack();
  return (
    <View>
      {isPresented && (
        <Stack.Screen
          options={{
            headerTitle: "Modal",
            headerLeft: () => (
              <Button title="Close" onPress={() => navigation.goBack()} />
            ),
          }}
        />
      )}
    </View>
  );
};
export default Modal;
