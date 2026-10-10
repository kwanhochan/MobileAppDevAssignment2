import { AppNotification, Post, Reel, User } from '@/types';

const img = (seed: string, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const face = (n: number) => `https://i.pravatar.cc/300?img=${n}`;

export const USERS: User[] = [
  {
    id: 'u1',
    name: 'Alex Johnson',
    avatar: img('ocean-wave', 300, 300),
    cover: img('succulents', 900, 400),
    location: 'Calgary, Alberta',
    school: 'SAIT',
    job: 'Software Developer',
    mutualFriends: 24,
  },
  {
    id: 'u2',
    name: 'Priya Sharma',
    avatar: face(47),
    cover: img('lake-louise', 900, 400),
    location: 'Edmonton, Alberta',
    school: 'University of Alberta',
    job: 'UX Designer',
    mutualFriends: 12,
  },
  {
    id: 'u3',
    name: 'Marcus Lee',
    avatar: face(12),
    cover: img('city-night', 900, 400),
    location: 'Vancouver, BC',
    school: 'BCIT',
    job: 'Mobile Engineer',
    mutualFriends: 8,
  },
  {
    id: 'u4',
    name: 'Emily Chen',
    avatar: face(44),
    cover: img('flowers-field', 900, 400),
    location: 'Toronto, Ontario',
    school: 'University of Toronto',
    job: 'Data Analyst',
    mutualFriends: 31,
  },
  {
    id: 'u5',
    name: 'Daniel Okafor',
    avatar: face(33),
    cover: img('desert-road', 900, 400),
    location: 'Calgary, Alberta',
    school: 'Mount Royal University',
    job: 'Photographer',
    mutualFriends: 5,
  },
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    authorId: 'u1',
    time: '3 hrs ago',
    text: 'Had a great time building my first React Native app in Expo! 🚀',
    image: img('gallery-frames'),
    likes: 128,
    comments: 2,
    taggedIds: [],
  },
  {
    id: 'p2',
    authorId: 'u2',
    time: '5 hrs ago',
    text: 'New design system finally shipped 🎨',
    image: img('design-desk'),
    likes: 342,
    comments: 14,
    taggedIds: ['u1'],
  },
  {
    id: 'p3',
    authorId: 'u5',
    time: 'Yesterday',
    text: 'Golden hour over Calgary tonight. No filter needed.',
    image: img('calgary-skyline'),
    likes: 905,
    comments: 37,
    taggedIds: ['u1'],
  },
  {
    id: 'p4',
    authorId: 'u3',
    time: '3 days ago',
    text: 'Tip: use FlatList instead of ScrollView for long lists.',
    likes: 214,
    comments: 9,
    taggedIds: [],
  },
  {
    id: 'p5',
    authorId: 'u1',
    time: '1 week ago',
    text: 'Weekend hike at Johnston Canyon with the crew.',
    image: img('canyon-hike'),
    likes: 176,
    comments: 5,
    taggedIds: ['u5'],
  },
];

export const REELS: Reel[] = [
  { id: 'r1', authorId: 'u1', thumbnail: img('reel-code', 400, 700) },
  { id: 'r2', authorId: 'u1', thumbnail: img('reel-hike', 400, 700) },
  { id: 'r3', authorId: 'u5', thumbnail: img('reel-sunset', 400, 700) },
  { id: 'r4', authorId: 'u3', thumbnail: img('reel-game', 400, 700) },
  { id: 'r5', authorId: 'u2', thumbnail: img('reel-design', 400, 700) },
];

export const NOTIFICATIONS: AppNotification[] = [
  { id: 'n1', actorId: 'u1', text: 'tagged you in a post.', time: '3h', isNew: true },
  { id: 'n2', actorId: 'u2', text: 'commented on your photo.', time: '5h', isNew: true },
  { id: 'n3', actorId: 'u4', text: 'sent you a friend request.', time: '1d', isNew: false },
  { id: 'n4', actorId: 'u5', text: 'and 42 others liked your post.', time: '2d', isNew: false },
  { id: 'n5', actorId: 'u3', text: 'replied to your comment.', time: '3d', isNew: false },
];

export const findUser = (id: string): User | undefined => USERS.find((u) => u.id === id);
