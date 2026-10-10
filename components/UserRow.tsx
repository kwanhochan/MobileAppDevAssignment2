import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Avatar from '@/components/Avatar';
import { Colors } from '@/constants/Colors';
import { User } from '@/types';

interface Props {
  user: User;
  onPress: () => void;
}

export default function UserRow({ user, onPress }: Props) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <Avatar uri={user.avatar} size={52} />
      <View style={styles.text}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.sub}>{user.mutualFriends} mutual friends · {user.job}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={Colors.subtext} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  text: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: '600', color: Colors.text },
  sub: { fontSize: 13, marginTop: 2, color: Colors.subtext },
});
