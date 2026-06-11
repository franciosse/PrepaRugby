import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PhaseTag from '@/components/PhaseTag';
import IntensityBar from '@/components/IntensityBar';
import SessionTypeIcon from '@/components/SessionTypeIcon';
import SessionProgressBadge from '@/components/SessionProgressBadge';
import { programme, SESSION_TYPE_LABELS, INTENSITY_LABELS, KNEE_LOAD_LABELS } from '@/lib/programme';

export function generateStaticParams() {
  return programme.map((w) => ({ num: String(w.number) }));
}

export default async function SemainePage({ params }: { params: Promise<{ num: string }> }) {
  const { num } = await params;
  const week = programme.find((w) => w.number === Number(num));
  if (!week) notFound();

  const prevWeek = programme.find((w) => w.number === week.number - 1);
  const nextWeek = programme.find((w) => w.number === week.number + 1);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">

        {/* Fil d'Ariane */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Accueil</Link>
          <span>›</span>
          <span className="text-gray-300">Semaine {week.number}</span>
        </div>

        {/* En-tête semaine */}
        <section className="rounded-2xl border border-emerald-900 bg-emerald-950/30 p-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-5xl font-black text-emerald-800 font-mono">S{week.number}</span>
                <PhaseTag phase={week.phase} label={week.phaseLabel} />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{week.title}</h1>
              <p className="text-gray-400 mt-2 max-w-2xl">{week.objective}</p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-xl px-4 py-3 text-center min-w-[80px]">
              <div className="text-2xl font-black text-emerald-300">{week.volumeHours}h</div>
              <div className="text-xs text-emerald-600 font-mono">/ semaine</div>
            </div>
          </div>
        </section>

        {/* Grille des 5 séances */}
        <section>
          <h2 className="text-lg font-bold text-emerald-300 mb-4">Les 5 séances de la semaine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {week.sessions.map((session, idx) => {
              const typeInfo = SESSION_TYPE_LABELS[session.type];
              const intensityInfo = INTENSITY_LABELS[session.intensity];
              const kneeInfo = KNEE_LOAD_LABELS[session.kneeLoad];
              return (
                <Link
                  key={idx}
                  href={`/seance/${week.number}/${idx}`}
                  className={`block rounded-xl border p-4 hover:brightness-110 transition-all duration-200 ${typeInfo.bg} group`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs font-bold text-gray-500 font-mono mb-1">{session.day}</div>
                      <SessionTypeIcon type={session.type} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">{session.duration}</div>
                      <div className="text-xs mt-1">{kneeInfo.label}</div>
                    </div>
                  </div>

                  <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-emerald-200 transition-colors mb-2">
                    {session.title}
                  </h3>

                  <p className="text-xs text-gray-400 mb-3 line-clamp-2">{session.objective}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold ${intensityInfo.color}`}>
                        {intensityInfo.label}
                      </span>
                      <IntensityBar intensity={session.intensity} />
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-emerald-500 transition-colors">Détail →</span>
                  </div>

                  {session.warnings && session.warnings.length > 0 && (
                    <div className="mt-3 text-xs text-amber-400/80 border-t border-amber-900/40 pt-2">
                      ⚠️ {session.warnings[0]}
                    </div>
                  )}

                  <SessionProgressBadge
                    semaine={week.number}
                    jour={idx}
                    blocks={session.blocks}
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Résumé des blocs par séance */}
        <section className="rounded-xl border border-gray-800 bg-gray-950/30 p-5">
          <h2 className="font-bold text-gray-300 mb-4">Aperçu des contenus</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-2 pr-4 text-gray-500 font-mono text-xs">Séance</th>
                  <th className="text-left py-2 pr-4 text-gray-500 font-mono text-xs">Type</th>
                  <th className="text-left py-2 pr-4 text-gray-500 font-mono text-xs">Durée</th>
                  <th className="text-left py-2 pr-4 text-gray-500 font-mono text-xs">Intensité</th>
                  <th className="text-left py-2 text-gray-500 font-mono text-xs">Genou</th>
                </tr>
              </thead>
              <tbody>
                {week.sessions.map((session, idx) => {
                  const typeInfo = SESSION_TYPE_LABELS[session.type];
                  const intensityInfo = INTENSITY_LABELS[session.intensity];
                  const kneeInfo = KNEE_LOAD_LABELS[session.kneeLoad];
                  return (
                    <tr key={idx} className="border-b border-gray-900 hover:bg-gray-900/30 transition-colors">
                      <td className="py-2 pr-4">
                        <Link href={`/seance/${week.number}/${idx}`} className="font-semibold text-white hover:text-emerald-400 transition-colors">
                          {session.day}
                        </Link>
                      </td>
                      <td className={`py-2 pr-4 text-xs font-semibold ${typeInfo.color}`}>
                        {typeInfo.label}
                      </td>
                      <td className="py-2 pr-4 text-gray-400 text-xs font-mono">{session.duration}</td>
                      <td className={`py-2 pr-4 text-xs font-semibold ${intensityInfo.color}`}>{intensityInfo.label}</td>
                      <td className="py-2 text-xs">{kneeInfo.label}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation semaines */}
        <div className="flex items-center justify-between pt-2">
          {prevWeek ? (
            <Link
              href={`/semaine/${prevWeek.number}`}
              className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-400 transition-colors"
            >
              <span>←</span>
              <span>Semaine {prevWeek.number} : {prevWeek.title}</span>
            </Link>
          ) : (
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">
              ← Retour à l'accueil
            </Link>
          )}
          {nextWeek && (
            <Link
              href={`/semaine/${nextWeek.number}`}
              className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-400 transition-colors"
            >
              <span>Semaine {nextWeek.number} : {nextWeek.title}</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
