import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PhaseTag from '@/components/PhaseTag';
import IntensityBar from '@/components/IntensityBar';
import SessionTypeIcon from '@/components/SessionTypeIcon';
import { programme, SESSION_TYPE_LABELS, INTENSITY_LABELS, KNEE_LOAD_LABELS } from '@/lib/programme';

export function generateStaticParams() {
  const params: { semaine: string; jour: string }[] = [];
  programme.forEach((week) => {
    week.sessions.forEach((_, idx) => {
      params.push({ semaine: String(week.number), jour: String(idx) });
    });
  });
  return params;
}

export default async function SeancePage({
  params,
}: {
  params: Promise<{ semaine: string; jour: string }>;
}) {
  const { semaine, jour } = await params;
  const week = programme.find((w) => w.number === Number(semaine));
  if (!week) notFound();

  const sessionIdx = Number(jour);
  const session = week.sessions[sessionIdx];
  if (!session) notFound();

  const typeInfo = SESSION_TYPE_LABELS[session.type];
  const intensityInfo = INTENSITY_LABELS[session.intensity];
  const kneeInfo = KNEE_LOAD_LABELS[session.kneeLoad];

  const prevSession = sessionIdx > 0 ? week.sessions[sessionIdx - 1] : null;
  const nextSession = sessionIdx < week.sessions.length - 1 ? week.sessions[sessionIdx + 1] : null;

  const totalExercises = session.blocks.reduce((sum, b) => sum + b.exercises.length, 0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">

        {/* Fil d'Ariane */}
        <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Accueil</Link>
          <span>›</span>
          <Link href={`/semaine/${week.number}`} className="hover:text-emerald-400 transition-colors">
            Semaine {week.number}
          </Link>
          <span>›</span>
          <span className="text-gray-300">{session.day}</span>
        </div>

        {/* En-tête séance */}
        <section className={`rounded-2xl border p-5 ${typeInfo.bg}`}>
          <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
            <div className="flex items-center gap-3">
              <SessionTypeIcon type={session.type} />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono text-gray-500">
                    Semaine {week.number} · {session.day}
                  </span>
                  <PhaseTag phase={week.phase} label={week.phaseLabel} />
                </div>
                <h1 className="text-xl font-bold text-white mt-1">{session.title}</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-white font-mono">{session.duration}</div>
            </div>
          </div>

          <p className="text-sm text-gray-300 mb-4 italic">{session.objective}</p>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-black/20 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Intensité</div>
              <div className={`text-sm font-bold ${intensityInfo.color}`}>{intensityInfo.label}</div>
              <div className="mt-1 flex justify-center">
                <IntensityBar intensity={session.intensity} />
              </div>
            </div>
            <div className="bg-black/20 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Charge genou</div>
              <div className="text-sm font-semibold text-white">{kneeInfo.label}</div>
            </div>
            <div className="bg-black/20 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Exercices</div>
              <div className="text-sm font-bold text-white">{totalExercises} exercices</div>
            </div>
          </div>
        </section>

        {/* Avertissements */}
        {session.warnings && session.warnings.length > 0 && (
          <section className="rounded-xl border border-red-800 bg-red-950/30 p-4">
            <h3 className="font-bold text-red-300 text-sm mb-2 flex items-center gap-2">
              <span>⚠️</span> Points de vigilance
            </h3>
            <ul className="space-y-1">
              {session.warnings.map((w, i) => (
                <li key={i} className="text-sm text-red-200/80 flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">›</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Blocs d'exercices */}
        <section className="space-y-4">
          {session.blocks.map((block, blockIdx) => (
            <div key={blockIdx} className="rounded-xl border border-gray-800 bg-gray-950/40 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/40">
                {block.emoji && <span className="text-lg">{block.emoji}</span>}
                <h3 className="font-bold text-gray-200">{block.title}</h3>
                <span className="text-xs text-gray-600 font-mono ml-auto">{block.exercises.length} exercice{block.exercises.length > 1 ? 's' : ''}</span>
              </div>

              <div className="divide-y divide-gray-900">
                {block.exercises.map((exercise, exIdx) => (
                  <div
                    key={exIdx}
                    className={`px-4 py-3 ${exercise.kneeWarning ? 'border-l-2 border-l-amber-600' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-white text-sm">{exercise.name}</span>
                          {exercise.kneeWarning && (
                            <span className="text-xs bg-amber-900/50 text-amber-400 border border-amber-800 rounded px-1.5 py-0.5">
                              🦵 Genou
                            </span>
                          )}
                        </div>
                        {exercise.note && (
                          <p className="text-xs text-gray-500 mt-0.5 italic">{exercise.note}</p>
                        )}
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {exercise.sets && (
                          <div className="text-center">
                            <div className="text-lg font-black text-emerald-400 leading-none">{exercise.sets}</div>
                            <div className="text-xs text-gray-600 font-mono">séries</div>
                          </div>
                        )}
                        {exercise.reps && (
                          <div className="text-center">
                            <div className="text-sm font-bold text-white leading-none">{exercise.reps}</div>
                            <div className="text-xs text-gray-600 font-mono">reps</div>
                          </div>
                        )}
                        {exercise.duration && (
                          <div className="text-center">
                            <div className="text-sm font-bold text-sky-400 leading-none">{exercise.duration}</div>
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
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Conseils */}
        {session.tips && session.tips.length > 0 && (
          <section className="rounded-xl border border-emerald-900 bg-emerald-950/20 p-4">
            <h3 className="font-bold text-emerald-300 text-sm mb-3 flex items-center gap-2">
              <span>💡</span> Conseils & Points clés
            </h3>
            <ul className="space-y-2">
              {session.tips.map((tip, i) => (
                <li key={i} className="text-sm text-emerald-200/80 flex items-start gap-2">
                  <span className="text-emerald-600 shrink-0 mt-0.5">›</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Navigation séances */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-900">
          {prevSession ? (
            <Link
              href={`/seance/${week.number}/${sessionIdx - 1}`}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-400 transition-colors"
            >
              <span>←</span>
              <span>{prevSession.day} – {prevSession.title.split('–')[0].trim()}</span>
            </Link>
          ) : (
            <Link href={`/semaine/${week.number}`} className="text-sm text-gray-600 hover:text-gray-400 transition-colors">
              ← Semaine {week.number}
            </Link>
          )}
          {nextSession && (
            <Link
              href={`/seance/${week.number}/${sessionIdx + 1}`}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-400 transition-colors"
            >
              <span>{nextSession.day} – {nextSession.title.split('–')[0].trim()}</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
