"use client";

import type { FC, ReactNode } from 'react';
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { palettes, type PaletteKey, type Palette } from '@/lib/palettes';

export type SimulationFilterKey = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';

interface ColorModeContextProps {
  activePaletteKey: PaletteKey;
  setActivePaletteKey: (key: PaletteKey) => void;
  currentPalette: Palette;
  simulationFilterKey: SimulationFilterKey;
  setSimulationFilterKey: (key: SimulationFilterKey) => void;
  useTextures: boolean;
  setUseTextures: (use: boolean) => void;
  adaptiveSystemDetection: boolean;
  setAdaptiveSystemDetection: (detect: boolean) => void;
}

const ColorModeContext = createContext<ColorModeContextProps | undefined>(undefined);

export const ColorModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activePaletteKey, setActivePaletteKey] = useState<PaletteKey>('normal');
  const [simulationFilterKey, setSimulationFilterKey] = useState<SimulationFilterKey>('none');
  const [useTextures, setUseTextures] = useState<boolean>(false);
  const [adaptiveSystemDetection, setAdaptiveSystemDetection] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = document.documentElement;
    // Remove old palette classes
    Object.keys(palettes).forEach(key => {
      root.classList.remove(`palette-${key}`);
    });
    // Add current palette class
    if (activePaletteKey !== 'normal') {
       root.classList.add(`palette-${activePaletteKey}`);
    }

    // Manage simulation filter class on a wrapper (assuming one exists with id 'content-wrapper')
    // This part needs to be coordinated with the main layout structure
    const contentWrapper = document.getElementById('content-wrapper');
    if (contentWrapper) {
        ['filter-protanopia', 'filter-deuteranopia', 'filter-tritanopia', 'filter-achromatopsia'].forEach(cls => contentWrapper.classList.remove(cls));
        if (simulationFilterKey !== 'none') {
            contentWrapper.classList.add(`filter-${simulationFilterKey}`);
        }
    }

  }, [activePaletteKey, simulationFilterKey, isMounted]);

  const currentPalette = useMemo(() => palettes[activePaletteKey], [activePaletteKey]);

  const value = {
    activePaletteKey,
    setActivePaletteKey,
    currentPalette,
    simulationFilterKey,
    setSimulationFilterKey,
    useTextures,
    setUseTextures,
    adaptiveSystemDetection,
    setAdaptiveSystemDetection,
  };
  
  if (!isMounted) {
    return null; // Or a loading spinner, to prevent hydration mismatch
  }

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
};

export const useColorMode = (): ColorModeContextProps => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};
