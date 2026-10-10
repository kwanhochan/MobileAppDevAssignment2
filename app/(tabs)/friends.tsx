import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import UserRow from '@/components/UserRow';
import { Colors } from '@/constants/Colors';
import { USERS } from '@/data/mockData';

/** friends tab . */
export default function FriendsScreen() {
  const router = useRouter();

  return (
    <FlatList
      style={{ backgroundColor: Colors.card }}
      data={USERS}
      keyExtractor={(u) => u.id}
      ListHeaderComponent={<Text style={styles.heading}>People you may know</Text>}
      renderItem={({ item }) => (
        <UserRow
          user={item}
          onPress={() => router.push({ pathname: '/profile/[id]', params: { id: item.id } })}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 18, fontWeight: '700', color: Colors.text, padding: 16, paddingBottom: 6 },
});
