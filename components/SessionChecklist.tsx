'use client';

import { ExerciseBlock } from '@/lib/types';
import { useProgress, exKey } from '@/hooks/useProgress';

interface Props {
  semaine: number;
  jour: number;
  blocks: ExerciseBlock[];
}

export default function SessionChecklist({ semaine, jour, blocks }: Props) {
  const { toggle, isChecked, progress } = useProgress();

  const totalExercises = blocks.reduce((s, b) => s + b.exercises.length, 0);
  const doneCount = blocks.reduce(
    (s, b, bi) =>
      s + b.exercises.filter((_, ei) => isChecked(exKey(semaine, jour, bi, ei))).length,
    0,
  );
  const pct = totalExercises > 0 ? Math.round((doneCount / totalExercises) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* Barre de progression globale */}
      <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-300">Progression de la séance</span>
          <span className="text-sm font-bold text-emerald-400 font-mono">
            {doneCount}/{totalExercises}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct === 100 && (
          <div className="mt-2 text-center text-sm font-bold text-emerald-400">
            🏆 Séance complète !
          </div>
        )}
      </div>

      {/* Blocs avec checkboxes */}
      {blocks.map((block, bi) => {
        const blockDone = block.exercises.filter((_, ei) =>
          isChecked(exKey(semaine, jour, bi, ei)),
        ).length;
        return (
          <div key={bi} className="rounded-xl border border-gray-800 bg-gray-950/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/40">
              {block.emoji && <span className="text-lg">{block.emoji}</span>}
              <h3 className="font-bold text-gray-200 flex-1">{block.title}</h3>
              <span className="text-xs text-gray-600 font-mono">
                {blockDone}/{block.exercises.length}
              </span>
            </div>

            <div className="divide-y divide-gray-900">
              {block.exercises.map((exercise, ei) => {
                const key = exKey(semaine, jour, bi, ei);
                const checked = isChecked(key);
                return (
                  <div
                    key={ei}
                    className={`px-4 py-3 cursor-pointer transition-colors ${
                      checked
                        ? 'bg-emerald-950/30'
                        : 'hover:bg-gray-900/40'
                    } ${exercise.kneeWarning ? 'border-l-2 border-l-amber-600' : ''}`}
                    onClick={() => toggle(key)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Checkbox custom */}
                      <div
                        className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                          checked
                            ? 'bg-emerald-500 border-emerald-500'
                            : 'border-gray-600 bg-transparent'
                        }`}
                      >
                        {checked && (
                          <svg viewBox="0 0 12 10" className="w-3 h-3 text-white fill-none stroke-white stroke-2">
                            <polyline points="1,5 4,9 11,1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`font-semibold text-sm transition-colors ${checked ? 'text-gray-500 line-through' : 'text-white'}`}>
                            {exercise.name}
                          </span>
                          {exercise.kneeWarning && (
                            <span className="text-xs bg-amber-900/50 text-amber-400 border border-amber-800 rounded px-1.5 py-0.5">
                              🦵 Genou
                            </span>
                          )}
                        </div>
                        {exercise.note && (
                          <p className={`text-xs mt-0.5 italic transition-colors ${checked ? 'text-gray-700' : 'text-gray-500'}`}>
                            {exercise.note}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {exercise.sets && (
                          <div className="text-center">
                            <div className={`text-lg font-black leading-none transition-colors ${checked ? 'text-gray-600' : 'text-emerald-400'}`}>
                              {exercise.sets}
                            </div>
                            <div className="text-xs text-gray-600 font-mono">séries</div>
                          </div>
                        )}
                        {exercise.reps && (
                          <div className="text-center">
                            <div className={`text-sm font-bold leading-none transition-colors ${checked ? 'text-gray-600' : 'text-white'}`}>
                              {exercise.reps}
                            </div>
                            <div className="text-xs text-gray-600 font-mono">reps</div>
                          </div>
                        )}
                        {exercise.duration && (
                          <div className="text-center">
                            <div className={`text-sm font-bold leading-none transition-colors ${checked ? 'text-gray-600' : 'text-sky-400'}`}>
                              {exercise.duration}
                            </div>
                            <div className="text-xs text-gray-600 font-mono">durée</div>
                          </div>
                        )}
                        {exercise.rest && (
                          <div className="text-center">
                            <div className="text-xs font-semibold text-gray-500 leading-none">{exercise.rest}</div>
                            <div className="text-xs text-gray-700 font-mono">repos</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
