import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = ({ children }) => {
  return (
    <Tabs>
      {/* <Tabs.Screen
        name="tab1"
        options={{
          tabBarLabel: "News Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="news"
        options={{
          headerShown: false,
          tabBarLabel: "News Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
};
export default TabsLayout;
