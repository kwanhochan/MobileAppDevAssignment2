export interface User {
  id: string;
  name: string;
  avatar: string;
  cover: string;
  location: string;
  school: string;
  job: string;
  mutualFriends: number;
}

export interface Post {
  id: string;
  authorId: string;
  time: string;
  text: string;
  image?: string;
  likes: number;
  comments: number;
  taggedIds: string[];
}

export interface Reel {
  id: string;
  authorId: string;
  thumbnail: string;
}

export interface AppNotification {
  id: string;
  actorId: string;
  text: string;
  time: string;
  isNew: boolean;
}
