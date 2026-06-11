import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PhaseTag from '@/components/PhaseTag';
import IntensityBar from '@/components/IntensityBar';
import SessionTypeIcon from '@/components/SessionTypeIcon';
import SessionChecklist from '@/components/SessionChecklist';
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
              <div className="text-sm font-bold text-white">
                {session.blocks.reduce((s, b) => s + b.exercises.length, 0)} exercices
              </div>
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

        {/* Checklist interactive (client component) */}
        <SessionChecklist
          semaine={week.number}
          jour={sessionIdx}
          blocks={session.blocks}
        />

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
