import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] w-full overflow-hidden rounded-b-3xl border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-neutral-950/80" />
        <div className="absolute inset-x-0 bottom-8 mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Create. Connect. Get Verified.
          </h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            A premium platform for verified creators to share short videos and photos with a modern, elegant experience.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="pointer-events-auto rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 hover:brightness-110 transition">
              Get Started
            </button>
            <button className="pointer-events-auto rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 px-5 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              Explore Creators
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
