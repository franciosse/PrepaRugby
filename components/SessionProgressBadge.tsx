'use client';

import { useProgress, exKey } from '@/hooks/useProgress';
import { ExerciseBlock } from '@/lib/types';

interface Props {
  semaine: number;
  jour: number;
  blocks: ExerciseBlock[];
}

export default function SessionProgressBadge({ semaine, jour, blocks }: Props) {
  const { isChecked } = useProgress();

  const total = blocks.reduce((s, b) => s + b.exercises.length, 0);
  const done = blocks.reduce(
    (s, b, bi) => s + b.exercises.filter((_, ei) => isChecked(exKey(semaine, jour, bi, ei))).length,
    0,
  );
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  if (done === 0) return null;

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-500 font-mono">{done}/{total} exercices</span>
        {pct === 100 && <span className="text-xs font-bold text-emerald-400">✓ Complète</span>}
      </div>
      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            pct === 100 ? 'bg-emerald-500' : 'bg-emerald-700'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
