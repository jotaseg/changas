import { useUser } from "@clerk/clerk-expo";
import { View, Text } from "react-native";

export default function Home() {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hola, {user?.emailAddresses[0].emailAddress}! 👋</Text>
    </View>
  );
}
