import { Intensity } from '@/lib/types';

const levels: Record<Intensity, number> = {
  faible: 1,
  modérée: 2,
  élevée: 3,
  maximale: 4,
};

const colors: Record<Intensity, string> = {
  faible: 'bg-emerald-500',
  modérée: 'bg-yellow-500',
  élevée: 'bg-orange-500',
  maximale: 'bg-red-500',
};

export default function IntensityBar({ intensity }: { intensity: Intensity }) {
  const level = levels[intensity];
  const color = colors[intensity];
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`h-2 w-5 rounded-sm ${i <= level ? color : 'bg-gray-800'}`}
        />
      ))}
    </div>
  );
}
