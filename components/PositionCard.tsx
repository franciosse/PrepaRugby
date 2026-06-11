import { POSITIONS } from '@/lib/programme';

export default function PositionCard() {
  return (
    <section>
      <h2 className="text-xl font-bold text-emerald-300 mb-4">Profil de jeu ciblé</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {POSITIONS.map((pos) => (
          <div key={pos.id} className={`rounded-xl border p-5 ${pos.colorClass}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{pos.icon}</span>
              <h3 className="font-bold text-white text-base">{pos.label}</h3>
            </div>
            <p className="text-sm text-gray-300 mb-3">{pos.profile}</p>

            <div className="space-y-2">
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Qualités clés</div>
                <div className="flex flex-wrap gap-1">
                  {pos.keyQualities.map((q) => (
                    <span key={q} className={`text-xs px-2 py-0.5 rounded-full border ${pos.tagClass}`}>
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="bg-black/20 rounded-lg p-2 text-center">
                  <div className="text-xs text-gray-500 font-mono mb-0.5">VMA cible</div>
                  <div className="text-sm font-bold text-emerald-300">{pos.vmaCible}</div>
                </div>
                <div className="bg-black/20 rounded-lg p-2 text-center">
                  <div className="text-xs text-gray-500 font-mono mb-0.5">Sprint 40m</div>
                  <div className="text-sm font-bold text-yellow-300">{pos.sprint40mCible}</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Travail spécifique dans ce programme</div>
                <ul className="space-y-0.5">
                  {pos.specificWork.map((w) => (
                    <li key={w} className="text-xs text-gray-300 flex items-center gap-1.5">
                      <span className="text-emerald-600">›</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
