import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { Colors } from '@/constants/Colors';

/** emoji tab icons */
function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return <Text style={{ fontSize: 24, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>;
}

/** navigation bar */
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: Colors.card },
        headerStyle: { backgroundColor: Colors.card },
        headerTitleAlign: 'left',
        headerTitleStyle: { fontSize: 24, fontWeight: '700', color: Colors.text },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'facebook',
          headerTitleStyle: { fontSize: 30, fontWeight: '800', color: Colors.primary },
          tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{ title: 'Friends', tabBarIcon: ({ focused }) => <TabIcon emoji="👥" focused={focused} /> }}
      />
      <Tabs.Screen
        name="notifications"
        options={{ title: 'Notifications', tabBarIcon: ({ focused }) => <TabIcon emoji="🔔" focused={focused} /> }}
      />
    </Tabs>
  );
}
