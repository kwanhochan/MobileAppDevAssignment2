import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import Avatar from '@/components/Avatar';
import { Colors } from '@/constants/Colors';
import { findUser } from '@/data/mockData';
import { Post } from '@/types';

/** reusable post card  */
export default function PostCard({ post }: { post: Post }) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const author = findUser(post.authorId);
  if (!author) return null;

  // stack navigation with parameter
  const openProfile = () => router.push({ pathname: '/profile/[id]', params: { id: author.id } });

  return (
    <View style={styles.card}>
      <Pressable style={styles.header} onPress={openProfile}>
        <Avatar uri={author.avatar} size={40} />
        <View style={styles.headerText}>
          <Text style={styles.name}>{author.name}</Text>
          <Text style={styles.time}>{post.time}</Text>
        </View>
      </Pressable>

      <Text style={styles.body}>{post.text}</Text>
      {post.image ? <Image source={{ uri: post.image }} style={styles.image} /> : null}

      <View style={styles.stats}>
        <Text style={styles.statText}>👍 {post.likes + (liked ? 1 : 0)}</Text>
        <Text style={styles.statText}>{post.comments} comments</Text>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.action} onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? 'thumbs-up' : 'thumbs-up-outline'}
            size={20}
            color={liked ? Colors.primary : Colors.subtext}
          />
          <Text style={[styles.actionText, liked && { color: Colors.primary }]}>Like</Text>
        </Pressable>
        <View style={styles.action}>
          <Ionicons name="chatbubble-outline" size={19} color={Colors.subtext} />
          <Text style={styles.actionText}>Comment</Text>
        </View>
        <View style={styles.action}>
          <Ionicons name="arrow-redo-outline" size={20} color={Colors.subtext} />
          <Text style={styles.actionText}>Share</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.card, marginHorizontal: 8, marginTop: 10, borderRadius: 8, paddingTop: 12 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },
  headerText: { marginLeft: 10 },
  name: { fontSize: 15, fontWeight: '700', color: Colors.text },
  time: { fontSize: 12, color: Colors.subtext, marginTop: 2 },
  body: { fontSize: 15, lineHeight: 21, color: Colors.text, paddingHorizontal: 12, marginVertical: 10 },
  image: { width: '100%', aspectRatio: 4 / 3, backgroundColor: Colors.secondaryButton },
  stats: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 8 },
  statText: { fontSize: 13, color: Colors.subtext },
  actions: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.border,
    marginHorizontal: 12,
  },
  action: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, gap: 6 },
  actionText: { fontSize: 14, fontWeight: '600', color: Colors.subtext },
});
