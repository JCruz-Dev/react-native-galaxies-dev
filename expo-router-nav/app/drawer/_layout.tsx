import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";

const CustomDrawer = (props: any) => {
  const router = useRouter();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Reset Navigation"
        onPress={() => router.replace("/")}
      />
      <DrawerItemList {...props} />å
    </DrawerContentScrollView>
  );
};
const DrawerLayout = ({ children }) => {
  return <Drawer drawerContent={CustomDrawer} />;
};
export default DrawerLayout;
