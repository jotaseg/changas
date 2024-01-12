import { Stack } from "expo-router";

const Screen = Stack.Screen;

export default function PublicLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6c47ff",
        },
        headerTintColor: "#fff",
        headerBackTitle: "Back",
      }}
    >
      <Screen
        name="login"
        options={{
          headerTitle: "Iniciar sesión",
        }}
      />
      <Screen
        name="register"
        options={{
          headerTitle: "Registrarse",
        }}
      />
      <Screen
        name="reset"
        options={{
          headerTitle: "Cambiar contraseña",
        }}
      />
    </Stack>
  );
}
