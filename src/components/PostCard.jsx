import React from 'react';
import { Heart, MessageCircle, Share2, BadgeCheck } from 'lucide-react';

export default function PostCard({ post }) {
  return (
    <article className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur overflow-hidden shadow-sm hover:shadow-md transition">
      <header className="flex items-center gap-3 px-4 pt-4">
        <img
          src={post.avatar}
          alt={`${post.user} avatar`}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">{post.user}</h3>
            {post.verified && (
              <BadgeCheck className="h-4 w-4 text-blue-500" />
            )}
          </div>
          <p className="text-xs text-neutral-500">{post.time}</p>
        </div>
      </header>

      <div className="mt-3">
        {post.type === 'video' ? (
          <div className="relative aspect-[4/5] sm:aspect-video bg-neutral-100 dark:bg-neutral-800">
            <video
              className="h-full w-full object-cover"
              src={post.src}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        ) : (
          <img
            src={post.src}
            alt={post.caption}
            className="h-auto w-full object-cover aspect-[4/5] sm:aspect-video"
          />
        )}
      </div>

      <div className="px-4 py-3">
        <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2">{post.caption}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              <Heart className="h-4 w-4" /> {post.likes}
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              <MessageCircle className="h-4 w-4" /> {post.comments}
            </button>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            <Share2 className="h-4 w-4" /> Share
          </button>
        </div>
      </div>
    </article>
  );
}
