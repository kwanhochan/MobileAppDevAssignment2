import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import Avatar from '@/components/Avatar';
import { Colors } from '@/constants/Colors';
import { User } from '@/types';

interface Props {
  user: User;
  isFriend: boolean;
  onToggleFriend: () => void;
}

/** profile section */
export default function ProfileHeader({ user, isFriend, onToggleFriend }: Props) {
  return (
    <View>
      <Image source={{ uri: user.cover }} style={styles.cover} />
      <View style={styles.gear}>
        <Ionicons name="settings-sharp" size={22} color="#fff" />
      </View>

      <View style={styles.avatarWrap}>
        <Avatar uri={user.avatar} size={120} bordered />
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.info}>
        📍 {user.location} • 🎓 {user.school} • 💼 {user.job}
      </Text>

      <View style={styles.buttons}>
        <Pressable
          style={[styles.button, { backgroundColor: isFriend ? Colors.secondaryButton : Colors.primary }]}
          onPress={onToggleFriend}
        >
          <Text style={[styles.buttonText, { color: isFriend ? Colors.text : '#fff' }]}>
            {isFriend ? '✓ Friends' : '+ Add Friend'}
          </Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: Colors.secondaryButton }]}>
          <Text style={[styles.buttonText, { color: Colors.text }]}>Message</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: { width: '100%', height: 180, backgroundColor: Colors.secondaryButton },
  gear: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrap: { alignItems: 'center', marginTop: -60 },
  name: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginTop: 8, color: Colors.text },
  info: { fontSize: 14, textAlign: 'center', marginTop: 4, paddingHorizontal: 16, color: Colors.subtext },
  buttons: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginVertical: 14 },
  button: { minWidth: 128, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 6, alignItems: 'center' },
  buttonText: { fontSize: 15, fontWeight: '700' },
});
