"use client"

import GameUI from '@/components/GameUI';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
      <main className="min-h-screen bg-gray-900">
        <GameUI />
      </main>
    </SessionProvider>
  );
}
