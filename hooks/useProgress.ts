'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'prepa-rugby-progress';

function load(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

function save(progress: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...progress]));
}

export function useProgress() {
  const [progress, setProgress] = useState<Set<string>>(new Set());

  useEffect(() => {
    setProgress(load());
  }, []);

  const toggle = useCallback((key: string) => {
    setProgress((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      save(next);
      return next;
    });
  }, []);

  const isChecked = useCallback((key: string) => progress.has(key), [progress]);

  return { toggle, isChecked, progress };
}

/** Clé unique par exercice */
export function exKey(semaine: number, jour: number, block: number, ex: number) {
  return `s${semaine}-j${jour}-b${block}-e${ex}`;
}
