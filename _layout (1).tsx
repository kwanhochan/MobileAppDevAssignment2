import { Stack } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';

/** root stack navigator */
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.card },
        headerTintColor: Colors.text,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="profile/[id]" options={{ title: 'Profile' }} />
    </Stack>
  );
}
