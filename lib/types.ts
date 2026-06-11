export type SessionType = 'foncier' | 'force-haut' | 'vitesse' | 'force-bas' | 'puissance';
export type Phase = 'réveil' | 'construction' | 'performance';
export type Intensity = 'faible' | 'modérée' | 'élevée' | 'maximale';
export type KneeLoad = 'léger' | 'modéré' | 'élevé';

export interface Exercise {
  name: string;
  sets?: number;
  reps?: string;
  duration?: string;
  rest?: string;
  note?: string;
  kneeWarning?: boolean;
}

export interface ExerciseBlock {
  title: string;
  emoji?: string;
  exercises: Exercise[];
}

export interface Session {
  day: string;
  dayShort: string;
  type: SessionType;
  title: string;
  duration: string;
  intensity: Intensity;
  objective: string;
  kneeLoad: KneeLoad;
  blocks: ExerciseBlock[];
  tips?: string[];
  warnings?: string[];
}

export interface Week {
  number: number;
  phase: Phase;
  phaseLabel: string;
  title: string;
  objective: string;
  volumeHours: number;
  sessions: Session[];
}
