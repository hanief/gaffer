'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';
import { ChatSection } from '@llamaindex/chat-ui';
import { useSession, signOut } from 'next-auth/react';
interface GameState {
  manager: {
    name: string;
    club: string;
    reputation: number;
    experience: number;
  };
  currentDate: Date;
  nextMatch: {
    opponent: string;
    date: Date;
    venue: string;
    competition: string;
  } | null;
}

export default function GameUI() {
    const { data: session, status } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [gameState, setGameState] = useState<GameState>({
    manager: {
      name: '',
      club: '',
      reputation: 50,
      experience: 0,
    },
    currentDate: new Date(),
    nextMatch: null,
  });

  const handler = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: 'Welcome to Gaffer! I\'m your personal assistant. Would you like to start a new career? Please tell me your name and choose a club to manage.'
      }
    ],
  });

  return (
    <div className="flex flex-col h-screen">
    <div className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
        <div>
            <h1 className="text-xl font-bold">Gaffer</h1>
            <p className="text-sm text-gray-400">
            {gameState.manager.name ? `Manager: ${gameState.manager.name} | Club: ${gameState.manager.club}` : 'New Career'}
            </p>
        </div>
        <div className="text-right flex align-center items-end gap-2">
            <p className="text-sm">{gameState.currentDate.toLocaleDateString()}</p>
            {gameState.nextMatch && (
            <p className="text-sm text-yellow-400">
                Next Match: {gameState.nextMatch.opponent} ({gameState.nextMatch.competition})
            </p>
            )}
            {session && (
              <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
              role="menuitem"
              >
              Sign Out
              </button>
            )}
        </div>
        </div>
    </div>
    
    <div className="flex-1 overflow-hidden">
        <ChatSection 
        handler={handler}
        />
    </div>
    </div>
  );
} 