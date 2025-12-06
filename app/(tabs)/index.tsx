import { useAuth } from "@clerk/clerk-expo";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => signOut()}>
        <Text>SignOut</Text>
      </TouchableOpacity>
    </View>
  );
}
