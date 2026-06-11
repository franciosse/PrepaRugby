import { SessionType } from '@/lib/types';

const icons: Record<SessionType, string> = {
  foncier: '🏃',
  'force-haut': '💪',
  vitesse: '⚡',
  'force-bas': '🦵',
  puissance: '🏉',
};

export default function SessionTypeIcon({ type }: { type: SessionType }) {
  return <span className="text-xl">{icons[type]}</span>;
}
