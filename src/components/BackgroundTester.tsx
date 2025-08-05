'use client';

import { useState, createContext, useContext } from 'react';

type BackgroundType = 'gradient' | 'blobs' | 'mesh';

const BackgroundContext = createContext<{
  backgroundType: BackgroundType;
  setBackgroundType: (type: BackgroundType) => void;
}>({
  backgroundType: 'gradient',
  setBackgroundType: () => {},
});

export const useBackground = () => useContext(BackgroundContext);

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('gradient');

  return (
    <BackgroundContext.Provider value={{ backgroundType, setBackgroundType }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export default function BackgroundTester() {
  const { backgroundType, setBackgroundType } = useBackground();

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-4">
      <div className="text-white text-sm mb-2">Background Test:</div>
      <div className="flex gap-2">
        <button
          onClick={() => setBackgroundType('gradient')}
          className={`px-3 py-1 rounded text-xs transition-colors ${
            backgroundType === 'gradient' 
              ? 'bg-lab-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Gradient
        </button>
        <button
          onClick={() => setBackgroundType('blobs')}
          className={`px-3 py-1 rounded text-xs transition-colors ${
            backgroundType === 'blobs' 
              ? 'bg-lab-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Blobs
        </button>
        <button
          onClick={() => setBackgroundType('mesh')}
          className={`px-3 py-1 rounded text-xs transition-colors ${
            backgroundType === 'mesh' 
              ? 'bg-lab-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Mesh
        </button>
      </div>
    </div>
  );
}
