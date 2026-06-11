'use client';

import { useProgress, exKey } from '@/hooks/useProgress';
import { programme } from '@/lib/programme';

export default function OverallProgress() {
  const { isChecked } = useProgress();

  let totalEx = 0;
  let doneEx = 0;
  let doneSessions = 0;
  const totalSessions = programme.reduce((s, w) => s + w.sessions.length, 0);

  programme.forEach((week) => {
    week.sessions.forEach((session, jour) => {
      const exCount = session.blocks.reduce((s, b) => s + b.exercises.length, 0);
      const exDone = session.blocks.reduce(
        (s, b, bi) =>
          s + b.exercises.filter((_, ei) => isChecked(exKey(week.number, jour, bi, ei))).length,
        0,
      );
      totalEx += exCount;
      doneEx += exDone;
      if (exDone === exCount && exCount > 0) doneSessions++;
    });
  });

  const sessionPct = Math.round((doneSessions / totalSessions) * 100);
  const exPct = Math.round((doneEx / totalEx) * 100);

  return (
    <div className="rounded-xl border border-emerald-900 bg-emerald-950/20 p-5">
      <h2 className="font-bold text-emerald-300 mb-4 flex items-center gap-2">
        <span>📊</span> Ma progression globale
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">Séances complètes</span>
            <span className="text-xs font-bold text-emerald-400 font-mono">
              {doneSessions}/{totalSessions}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${sessionPct}%` }}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">Exercices cochés</span>
            <span className="text-xs font-bold text-sky-400 font-mono">
              {doneEx}/{totalEx}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-500 rounded-full transition-all duration-500"
              style={{ width: `${exPct}%` }}
            />
          </div>
        </div>
      </div>
      {doneSessions > 0 && (
        <p className="text-xs text-gray-500 mt-3 text-center">
          {doneSessions === totalSessions
            ? '🏆 Programme terminé ! Excellent travail !'
            : `Continue comme ça – encore ${totalSessions - doneSessions} séance${totalSessions - doneSessions > 1 ? 's' : ''} !`}
        </p>
      )}
    </div>
  );
}
