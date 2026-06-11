import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PhaseTag from '@/components/PhaseTag';
import IntensityBar from '@/components/IntensityBar';
import SessionTypeIcon from '@/components/SessionTypeIcon';
import OverallProgress from '@/components/OverallProgress';
import { programme, ATHLETE, PHASES, SESSION_TYPE_LABELS } from '@/lib/programme';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">

        {/* Hero – Profil athlète */}
        <section className="relative overflow-hidden rounded-2xl border border-emerald-900 bg-linear-to-br from-emerald-950 via-[#071407] to-[#050d05] p-6 md:p-8">
          <div className="absolute top-0 right-0 text-[160px] opacity-5 leading-none select-none">🏉</div>
          <div className="relative">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-emerald-300 tracking-tight">
                  Préparation Physique Rugby
                </h1>
                <p className="text-emerald-600 mt-1 text-sm font-mono">Retour post-opération ménisque · 6 semaines</p>
              </div>
              <div className="flex items-center gap-2 bg-red-950/50 border border-red-800 rounded-lg px-3 py-2 text-sm">
                <span>⚠️</span>
                <span className="text-red-300 font-medium">Post-op ménisque</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Âge', value: ATHLETE.age },
                { label: 'Taille', value: ATHLETE.height },
                { label: 'Poids', value: ATHLETE.weight },
                { label: 'Contexte', value: 'Post-ménisque' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-emerald-950/40 border border-emerald-900/60 rounded-xl p-3">
                  <div className="text-xs text-emerald-600 font-mono uppercase tracking-wider">{label}</div>
                  <div className="text-lg font-bold text-emerald-200 mt-1">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {ATHLETE.goals.map((goal) => (
                <span key={goal} className="text-xs bg-emerald-900/40 border border-emerald-800 text-emerald-300 rounded-full px-3 py-1">
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Règles de sécurité genou */}
        <section className="rounded-xl border border-amber-800/60 bg-amber-950/20 p-5">
          <h2 className="font-bold text-amber-300 text-base mb-3 flex items-center gap-2">
            <span>🦵</span> Protocole de protection du genou opéré
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-amber-200/80">
            {[
              'Reprise course validée ✅ – programme adapté à ce niveau de récupération',
              'Séances marquées 🔴 = genou fortement sollicité → surveiller douleur aiguë',
              'Glaçage post-séance si sensation de chaleur ou gonflement',
              'Squats/fentes : amplitude contrôlée en S1, pleine amplitude dès S2 si OK',
              'Changements de direction : progressifs dès S2-S3 (virages larges d\'abord)',
              'Douleur aiguë ou instabilité = stopper et consulter le kiné',
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5 shrink-0">›</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Progression globale */}
        <OverallProgress />

        {/* Phases du programme */}
        <section>
          <h2 className="text-xl font-bold text-emerald-300 mb-4">Les 3 phases du programme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PHASES.map((p) => {
              const phaseWeeks = programme.filter((w) => w.phase === p.phase);
              return (
                <div
                  key={p.phase}
                  className={`rounded-xl border p-5 ${
                    p.phase === 'réveil'
                      ? 'border-emerald-800 bg-emerald-950/30'
                      : p.phase === 'construction'
                      ? 'border-amber-800 bg-amber-950/30'
                      : 'border-red-800 bg-red-950/30'
                  }`}
                >
                  <div className="text-xs font-mono text-gray-500 mb-2">Semaines {p.weeks}</div>
                  <h3 className="font-bold text-base text-white mb-2">{p.label}</h3>
                  <p className="text-sm text-gray-400">{p.description}</p>
                  <div className="mt-3 flex gap-2">
                    {phaseWeeks.map((w) => (
                      <Link
                        key={w.number}
                        href={`/semaine/${w.number}`}
                        className={`text-xs font-bold px-3 py-1 rounded-full transition-opacity hover:opacity-80 ${
                          p.phase === 'réveil'
                            ? 'bg-emerald-800 text-emerald-200'
                            : p.phase === 'construction'
                            ? 'bg-amber-800 text-amber-200'
                            : 'bg-red-800 text-red-200'
                        }`}
                      >
                        S{w.number}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Grille des 6 semaines */}
        <section>
          <h2 className="text-xl font-bold text-emerald-300 mb-4">Programme complet – 6 semaines</h2>
          <div className="space-y-4">
            {programme.map((week) => (
              <Link
                key={week.number}
                href={`/semaine/${week.number}`}
                className="block rounded-xl border border-emerald-900/60 bg-emerald-950/20 hover:border-emerald-700 hover:bg-emerald-950/40 transition-all duration-200 overflow-hidden group"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-black text-emerald-700 font-mono">S{week.number}</span>
                        <PhaseTag phase={week.phase} label={week.phaseLabel} />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {week.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1 max-w-xl">{week.objective}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <span className="text-xs text-gray-500 font-mono">{week.volumeHours}h / semaine</span>
                      <span className="text-xs text-gray-600 group-hover:text-emerald-500 transition-colors">
                        Voir le détail →
                      </span>
                    </div>
                  </div>

                  {/* Sessions de la semaine */}
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {week.sessions.map((session) => {
                      const typeInfo = SESSION_TYPE_LABELS[session.type];
                      return (
                        <div
                          key={session.day}
                          className={`rounded-lg border p-2 text-center ${typeInfo.bg}`}
                        >
                          <div className="text-[10px] font-bold text-gray-500 font-mono">{session.dayShort}</div>
                          <div className="my-1 text-lg">
                            <SessionTypeIcon type={session.type} />
                          </div>
                          <div className={`text-[10px] font-semibold ${typeInfo.color} leading-tight`}>
                            {typeInfo.label.split('–')[0].trim()}
                          </div>
                          <div className="mt-1">
                            <IntensityBar intensity={session.intensity} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Légende types de séance */}
        <section className="rounded-xl border border-gray-800 bg-gray-950/40 p-5">
          <h2 className="font-bold text-gray-300 text-sm mb-3">Légende des séances</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {Object.entries(SESSION_TYPE_LABELS).map(([type, info]) => (
              <div key={type} className={`rounded-lg border p-2 text-center ${info.bg}`}>
                <SessionTypeIcon type={type as import('@/lib/types').SessionType} />
                <div className={`text-xs font-semibold mt-1 ${info.color}`}>{info.label}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-xs text-gray-700 pb-4">
          Programme conçu pour un retour progressif au rugby post-opération ménisque.
          <br />Toujours valider chaque étape avec le kinésithérapeute et le médecin.
        </footer>
      </main>
    </div>
  );
}
