import React from 'react';
import PostCard from './PostCard';

const posts = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1640&auto=format&fit=crop',
    caption: 'Morning studio session ✨🎬',
    user: 'Ava Carter',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=300&auto=format&fit=crop',
    verified: true,
    time: '2h ago',
    likes: '2.1k',
    comments: '128',
  },
  {
    id: 2,
    type: 'video',
    src: 'https://cdn.coverr.co/videos/coverr-smiling-young-woman-while-typing-on-her-smartphone-5179/1080p.mp4',
    caption: 'Behind the scenes from today’s shoot 💡',
    user: 'Noah Williams',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop',
    verified: true,
    time: '4h ago',
    likes: '1.4k',
    comments: '86',
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1640&auto=format&fit=crop',
    caption: 'Color grading this set all night 🌈',
    user: 'Mila Novak',
    avatar: 'https://images.unsplash.com/photo-1547253781-316765ndbqwe?q=80&w=300&auto=format&fit=crop',
    verified: false,
    time: '6h ago',
    likes: '932',
    comments: '41',
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1600660792277-e20fd8e3ac3a?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjE2NzEwNTh8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'New set just dropped. Thoughts? 🔥',
    user: 'Leo Park',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    verified: true,
    time: '8h ago',
    likes: '1.1k',
    comments: '73',
  },
];

export default function Feed() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-6">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">For You</h2>
        <div className="inline-flex overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800">
          <button className="px-4 py-1.5 text-sm bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">Following</button>
          <button className="px-4 py-1.5 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">Trending</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
