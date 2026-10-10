import React from 'react';
import { FlatList } from 'react-native';

import PostCard from '@/components/PostCard';
import { Colors } from '@/constants/Colors';
import { POSTS } from '@/data/mockData';

/** home tab */
export default function HomeScreen() {
  return (
    <FlatList
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingBottom: 16 }}
      data={POSTS}
      keyExtractor={(p) => p.id}
      renderItem={({ item }) => <PostCard post={item} />}
    />
  );
}
