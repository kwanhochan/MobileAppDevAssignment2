import React from 'react';
import { Image } from 'react-native';

import { Colors } from '@/constants/Colors';

interface Props {
  uri: string;
  size?: number;
  /** white line for profile pictures. */
  bordered?: boolean;
}

export default function Avatar({ uri, size = 40, bordered }: Props) {
  return (
    <Image
      source={{ uri }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: bordered ? 4 : 0,
        borderColor: Colors.card,
        backgroundColor: Colors.secondaryButton,
      }}
    />
  );
}
