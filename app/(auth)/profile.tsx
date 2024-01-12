import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Profile() {
  const { user } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSaveUser = async () => {
    try {
      const result = await user?.update({
        firstName,
        lastName,
      });
      console.log("🚀 ~ file: profile.tsx:16 ~ onSaveUser ~ result:", result);
    } catch (e) {
      console.log(
        "🚀 ~ file: profile.tsx:18 ~ onSaveUser ~ e",
        JSON.stringify(e)
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        Hola {user?.firstName} {user?.lastName}!
      </Text>

      <TextInput
        placeholder="Tu nombre"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.inputField}
      />
      <TextInput
        placeholder="Tu apellido"
        value={lastName}
        onChangeText={setLastName}
        style={styles.inputField}
      />
      <Button
        onPress={onSaveUser}
        title="Cambiar nombre"
        color={"#6c47ff"}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
