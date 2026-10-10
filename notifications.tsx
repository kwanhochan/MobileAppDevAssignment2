import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import Avatar from '@/components/Avatar';
import { Colors } from '@/constants/Colors';
import { NOTIFICATIONS, findUser } from '@/data/mockData';

/** notification tab. */
export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <FlatList
      style={{ backgroundColor: Colors.card }}
      data={NOTIFICATIONS}
      keyExtractor={(n) => n.id}
      renderItem={({ item }) => {
        const actor = findUser(item.actorId);
        if (!actor) return null;
        return (
          <Pressable
            style={[styles.row, item.isNew && { backgroundColor: Colors.unreadBg }]}
            onPress={() => router.push({ pathname: '/profile/[id]', params: { id: actor.id } })}
          >
            <Avatar uri={actor.avatar} size={56} />
            <View style={styles.text}>
              <Text style={styles.message}>
                <Text style={styles.bold}>{actor.name}</Text> {item.text}
              </Text>
              <Text style={[styles.time, item.isNew && { color: Colors.primary }]}>{item.time}</Text>
            </View>
            {item.isNew && <View style={styles.dot} />}
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  text: { flex: 1, marginLeft: 12 },
  message: { fontSize: 15, lineHeight: 20, color: Colors.text },
  bold: { fontWeight: '700' },
  time: { fontSize: 13, marginTop: 2, color: Colors.subtext },
  dot: { width: 12, height: 12, borderRadius: 6, backgroundColor: Colors.primary, marginLeft: 8 },
});
