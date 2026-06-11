import { Phase } from '@/lib/types';

const phaseStyles: Record<Phase, string> = {
  'réveil': 'bg-emerald-900/60 text-emerald-300 border-emerald-700',
  'construction': 'bg-amber-900/60 text-amber-300 border-amber-700',
  'performance': 'bg-red-900/60 text-red-300 border-red-700',
};

export default function PhaseTag({ phase, label }: { phase: Phase; label: string }) {
  return (
    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border ${phaseStyles[phase]}`}>
      {label}
    </span>
  );
}
