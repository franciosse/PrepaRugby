import { VMA_PACES, INTERMITTENT_30_30, ATHLETE } from '@/lib/programme';

export default function VMACard() {
  return (
    <section className="rounded-xl border border-sky-800/60 bg-sky-950/20 p-5">
      <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
        <h2 className="font-bold text-sky-300 flex items-center gap-2">
          <span>📊</span> Zones d'allure – VMA {ATHLETE.vma} km/h
        </h2>
        <div className="text-xs bg-sky-900/50 border border-sky-700 text-sky-300 rounded-lg px-3 py-1.5 font-mono">
          30-30 intermittent : {INTERMITTENT_30_30.distance}m en 30s à {INTERMITTENT_30_30.speedKmh} km/h
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-sky-900">
              <th className="text-left py-1.5 pr-4 text-sky-700 font-mono text-xs">Zone</th>
              <th className="text-left py-1.5 pr-4 text-sky-700 font-mono text-xs">%VMA</th>
              <th className="text-left py-1.5 pr-4 text-sky-700 font-mono text-xs">km/h</th>
              <th className="text-left py-1.5 pr-4 text-sky-700 font-mono text-xs">Allure</th>
              <th className="text-left py-1.5 text-sky-700 font-mono text-xs">Utilisation</th>
            </tr>
          </thead>
          <tbody>
            {VMA_PACES.map((z) => (
              <tr key={z.pct} className="border-b border-sky-900/40 hover:bg-sky-950/30 transition-colors">
                <td className="py-1.5 pr-4 font-semibold text-white text-xs">{z.label}</td>
                <td className="py-1.5 pr-4 font-mono text-sky-400 text-xs">{z.pct}%</td>
                <td className="py-1.5 pr-4 font-mono text-emerald-400 text-xs font-bold">{z.kmh} km/h</td>
                <td className="py-1.5 pr-4 font-mono text-amber-400 text-xs">{z.pace}</td>
                <td className="py-1.5 text-gray-400 text-xs">{z.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
