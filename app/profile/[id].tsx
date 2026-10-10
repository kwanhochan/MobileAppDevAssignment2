import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import PostCard from '@/components/PostCard';
import ProfileHeader from '@/components/ProfileHeader';
import { Colors } from '@/constants/Colors';
import { POSTS, REELS, findUser } from '@/data/mockData';

const TABS = ['Posts', 'Reels', 'Tagged'] as const;
type ProfileTab = (typeof TABS)[number];

/** stack screen */
export default function ProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<ProfileTab>('Posts');
  const [isFriend, setIsFriend] = useState(false);

  const user = findUser(id ?? '');
  if (!user) {
    return <Text style={styles.empty}>User not found.</Text>;
  }

  const posts = POSTS.filter((p) => p.authorId === user.id);
  const tagged = POSTS.filter((p) => p.taggedIds.includes(user.id));
  const reels = REELS.filter((r) => r.authorId === user.id);

  return (
    <ScrollView style={{ backgroundColor: Colors.background }} contentContainerStyle={{ paddingBottom: 24 }}>
      <Stack.Screen options={{ title: user.name }} />

      <ProfileHeader user={user} isFriend={isFriend} onToggleFriend={() => setIsFriend(!isFriend)} />

      {/* Posts / Reels / Tagged tabs */}
      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && { color: Colors.text }]}>{tab}</Text>
          </Pressable>
        ))}
      </View>

      {activeTab === 'Posts' &&
        (posts.length ? posts.map((p) => <PostCard key={p.id} post={p} />) : <Text style={styles.empty}>No posts yet.</Text>)}

      {activeTab === 'Reels' &&
        (reels.length ? (
          <View style={styles.reelGrid}>
            {reels.map((r) => (
              <Image key={r.id} source={{ uri: r.thumbnail }} style={styles.reel} />
            ))}
          </View>
        ) : (
          <Text style={styles.empty}>No reels yet.</Text>
        ))}

      {activeTab === 'Tagged' &&
        (tagged.length ? tagged.map((p) => <PostCard key={p.id} post={p} />) : <Text style={styles.empty}>No tagged posts.</Text>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 12 },
  tabActive: { borderBottomWidth: 2, borderBottomColor: Colors.text },
  tabText: { fontSize: 15, color: Colors.subtext },
  empty: { textAlign: 'center', marginTop: 32, fontSize: 15, color: Colors.subtext },
  reelGrid: { flexDirection: 'row', flexWrap: 'wrap', padding: 8, gap: 8 },
  reel: { width: '48%', aspectRatio: 9 / 14, borderRadius: 10, backgroundColor: Colors.secondaryButton },
});
