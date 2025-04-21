import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {
  return <Stack >
    <Stack.Screen
        name="(tabs)"
        options={{headerShown: false}}
    />
    <Stack.Screen
      name="KJV_Bible/[id]"
      options={{headerShown: false}}
    />
  </Stack>
}
