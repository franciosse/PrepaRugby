import { Week } from './types';

export const programme: Week[] = [
  // ─────────────────────────────────────────────
  // SEMAINE 1 – BASE DE COURSE & RENFORCEMENT
  // Il court depuis 2 semaines → base cardio existante
  // ─────────────────────────────────────────────
  {
    number: 1,
    phase: 'réveil',
    phaseLabel: 'Phase 1 – Base de course',
    title: 'Consolidation course & Renforcement',
    objective: 'La reprise de course est validée. On consolide l\'endurance, on installe le renforcement musculaire et on travaille la technique de course pour préparer la vitesse.',
    volumeHours: 5,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier – Footing continu 25 min',
        duration: '55 min',
        intensity: 'modérée',
        objective: 'Consolider la reprise de course avec un effort aérobie maîtrisé',
        kneeLoad: 'modéré',
        warnings: ['Arrêter si douleur aiguë ou gonflement post-séance', 'Surveiller les sensations en fin de footing'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Marche active', duration: '3 min' },
              { name: 'Rotations chevilles & hanches', sets: 2, reps: '10 rotations chaque sens' },
              { name: 'Trot très léger (mise en route)', duration: '4 min' },
              { name: 'Éducatifs : talons-fesses + montées de genoux', sets: 2, reps: '20m chaque' },
            ],
          },
          {
            title: 'Footing principal',
            emoji: '🏃',
            exercises: [
              { name: 'Footing continu', duration: '25 min', note: '65–70% VMA = 10.4–11.2 km/h (5:20–5:46/km) – allure conversation', kneeWarning: true },
            ],
          },
          {
            title: 'Proprioception (important post-ménisque)',
            emoji: '⚖️',
            exercises: [
              { name: 'Équilibre unipodal yeux ouverts', sets: 3, duration: '30s par jambe', kneeWarning: true },
              { name: 'Équilibre unipodal yeux fermés', sets: 2, duration: '20s par jambe', kneeWarning: true },
              { name: 'Fentes avant statiques lentes', sets: 2, reps: '10 par jambe', note: 'Contrôle du genou', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Marche 3 min', duration: '3 min' },
              { name: 'Étirements ischio-jambiers, quadriceps, mollets', duration: '10 min' },
              { name: 'Glaçage genou si sensation de chaleur', duration: '10 min' },
            ],
          },
        ],
        tips: ['FC cible : 130–145 bpm', 'Si l\'allure est confortable, ne pas accélérer – laisser l\'organisme s\'adapter'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force haut du corps + Gainage',
        duration: '60 min',
        intensity: 'modérée',
        objective: 'Développer la force du haut du corps et la stabilité du tronc – base pour les contacts rugby',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Mobilité épaules & rotation thoracique', duration: '6 min' },
              { name: 'Pompes légères', sets: 2, reps: '8' },
            ],
          },
          {
            title: 'Poussée',
            emoji: '💪',
            exercises: [
              { name: 'Pompes classiques', sets: 4, reps: '12', rest: '60s' },
              { name: 'Pompes diamant (triceps)', sets: 3, reps: '10', rest: '60s' },
              { name: 'Développé épaules haltères', sets: 4, reps: '10', rest: '75s' },
              { name: 'Dips (banc ou chaise)', sets: 3, reps: '12', rest: '60s' },
            ],
          },
          {
            title: 'Traction & Dos',
            emoji: '🏋️',
            exercises: [
              { name: 'Tractions (ou tirage horizontal TRX)', sets: 4, reps: '8', rest: '90s' },
              { name: 'Rowing haltères (coude serré)', sets: 3, reps: '12 par bras', rest: '60s' },
              { name: 'Face pulls (élastique)', sets: 3, reps: '15', rest: '45s', note: 'Coiffes rotateurs' },
            ],
          },
          {
            title: 'Gainage & Core',
            emoji: '🔩',
            exercises: [
              { name: 'Planche frontale', sets: 4, duration: '35s', rest: '30s' },
              { name: 'Planche latérale', sets: 3, duration: '25s par côté' },
              { name: 'Superman (extension dorsale)', sets: 3, reps: '12' },
              { name: 'Mountain climbers lents', sets: 3, reps: '20' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements pectoraux, dos et épaules', duration: '10 min' },
            ],
          },
        ],
        tips: ['Charges légères à modérées – priorité à la technique', 'Respiration : expiration sur l\'effort'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Technique de course + Accélérations progressives',
        duration: '55 min',
        intensity: 'modérée',
        objective: 'Travailler la mécanique de course et introduire les premières accélérations',
        kneeLoad: 'modéré',
        warnings: ['Accélérations en ligne droite uniquement', 'Intensité 60–75% max cette semaine'],
        blocks: [
          {
            title: 'Échauffement dynamique',
            emoji: '🔥',
            exercises: [
              { name: 'Trot léger', duration: '6 min' },
              { name: 'Talons-fesses', sets: 3, reps: '20m' },
              { name: 'Montées de genoux (skipping A)', sets: 3, reps: '20m' },
              { name: 'Pas chassés latéraux', sets: 2, reps: '20m aller-retour' },
              { name: 'Foulées bondissantes légères', sets: 3, reps: '20m' },
            ],
          },
          {
            title: 'Travail technique foulée',
            emoji: '📐',
            exercises: [
              { name: 'Posture de course (alignement tête-épaules-hanches)', duration: '5 min', note: 'Exercices au mur ou miroir' },
              { name: 'Course haute fréquence 10m', sets: 5, reps: '10m', rest: '45s', note: 'Fréquence de foulée élevée, amplitude réduite' },
              { name: 'Course grande amplitude 20m', sets: 4, reps: '20m', rest: '60s' },
            ],
          },
          {
            title: 'Accélérations progressives',
            emoji: '⚡',
            exercises: [
              { name: 'Accélérations 15m (60%)', sets: 5, reps: '15m', rest: '60s', kneeWarning: true },
              { name: 'Accélérations 20m (70%)', sets: 5, reps: '20m', rest: '75s', kneeWarning: true },
              { name: 'Accélérations 25m (75%)', sets: 4, reps: '25m', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot récupération', duration: '5 min' },
              { name: 'Foam roller quadriceps & IT-band', duration: '4 min' },
              { name: 'Étirements MI', duration: '8 min' },
            ],
          },
        ],
        tips: ['Les accélérations doivent être fluides, sans crispation', 'Récupération complète entre les répétitions'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force membres inférieurs – Charges légères, amplitude progressive',
        duration: '60 min',
        intensity: 'modérée',
        objective: 'Renforcer les muscles autour du genou avec une amplitude croissante et des charges légères',
        kneeLoad: 'modéré',
        warnings: ['Squat : amplitude jusqu\'à 90° (pas full squat cette semaine)', 'Stopper si douleur aiguë au genou'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo résistance légère', duration: '8 min' },
              { name: 'Squat au poids du corps lent (mobilité)', sets: 2, reps: '10' },
            ],
          },
          {
            title: 'Force MI principale',
            emoji: '🦵',
            exercises: [
              { name: 'Squat au poids du corps (90°)', sets: 4, reps: '12', rest: '60s', note: 'Genoux dans l\'axe des pieds', kneeWarning: true },
              { name: 'Fentes avant (amplitude contrôlée)', sets: 3, reps: '12 par jambe', rest: '75s', kneeWarning: true },
              { name: 'Step-up boîte 25cm', sets: 3, reps: '12 par jambe', rest: '60s', kneeWarning: true },
              { name: 'Leg curl allongé (charge légère)', sets: 3, reps: '15', rest: '60s', note: 'Ischio-jambiers' },
              { name: 'Abducteurs élastique', sets: 3, reps: '15 par jambe' },
            ],
          },
          {
            title: 'Fessiers & Stabilisation',
            emoji: '🔩',
            exercises: [
              { name: 'Hip thrust bilatéral (poids du corps ou haltère léger)', sets: 4, reps: '15', rest: '60s' },
              { name: 'Pont fessier unilatéral', sets: 3, reps: '10 par jambe', rest: '60s' },
              { name: 'Relevés de mollets debout', sets: 4, reps: '20', rest: '30s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements MI complets', duration: '12 min' },
              { name: 'Glaçage genou si besoin', duration: '10 min' },
            ],
          },
        ],
        tips: ['Priorité à la qualité du mouvement', 'Bien contracter les abdominaux pendant les squats'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Circuit dynamique + Footing de consolidation',
        duration: '55 min',
        intensity: 'modérée',
        objective: 'Combiner effort musculaire et endurance pour une séance complète de fin de semaine',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Trot léger', duration: '6 min' },
              { name: 'Éducatifs dynamiques', duration: '4 min' },
            ],
          },
          {
            title: 'Circuit corps entier (3 tours – 30s repos entre exercices, 2 min entre tours)',
            emoji: '🔄',
            exercises: [
              { name: 'Pompes', reps: '12' },
              { name: 'Squat au poids du corps', reps: '15', kneeWarning: true },
              { name: 'Planche frontale', duration: '30s' },
              { name: 'Foulées bondissantes légères', reps: '10m' },
              { name: 'Crunchs', reps: '15' },
              { name: 'Pont fessier', reps: '15' },
            ],
          },
          {
            title: 'Footing de consolidation',
            emoji: '🏃',
            exercises: [
              { name: 'Footing continu', duration: '18 min', note: '65% FCmax', kneeWarning: true },
            ],
          },
          {
            title: 'Récupération',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements globaux', duration: '12 min' },
              { name: 'Bilan semaine 1 (sensations genou, fatigue)', duration: '5 min' },
            ],
          },
        ],
        tips: ['Bilan : noter sur 10 la fatigue du genou en fin de semaine', 'Week-end : repos ou natation légère'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 2 – DÉVELOPPEMENT COURSE & FORCE
  // ─────────────────────────────────────────────
  {
    number: 2,
    phase: 'réveil',
    phaseLabel: 'Phase 1 – Base de course',
    title: 'Développement endurance & Force',
    objective: 'Augmenter le volume de course, introduire les premiers sprints courts et progresser en force. Le genou est prêt pour plus.',
    volumeHours: 6,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier – Footing 30 min + Fartlek court',
        duration: '60 min',
        intensity: 'modérée',
        objective: 'Augmenter le volume aérobie avec variations d\'allure contrôlées',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Trot léger + mobilité', duration: '8 min' },
              { name: 'Éducatifs course', duration: '4 min' },
            ],
          },
          {
            title: 'Footing avec variations',
            emoji: '🏃',
            exercises: [
              { name: 'Footing continu 70% VMA', duration: '20 min', note: '11.2 km/h – allure 5:21/km', kneeWarning: true },
              { name: 'Fartlek : 5× (1 min à 80% / 2 min à 65%)', duration: '15 min', note: 'Effort 80% = 12.8 km/h (4:41/km) · Récup 65% = 10.4 km/h (5:46/km)', kneeWarning: true },
            ],
          },
          {
            title: 'Proprioception avancée',
            emoji: '⚖️',
            exercises: [
              { name: 'Équilibre unipodal avec déstabilisation (partenaire ou balle)', sets: 3, duration: '30s par jambe', kneeWarning: true },
              { name: 'Fentes avec rotation de tronc', sets: 2, reps: '10 par jambe', note: 'Sans torsion du genou', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Marche 3 min + étirements', duration: '12 min' },
            ],
          },
        ],
        tips: ['Le fartlek doit rester confortable – jamais à bout de souffle', 'Surveillance genou : normal si légère fatigue, anormal si douleur aiguë'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force haut du corps – Progression charges',
        duration: '65 min',
        intensity: 'modérée',
        objective: 'Augmenter le volume et les charges du haut du corps',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Mobilité + activation épaules', duration: '6 min' },
              { name: 'Pompes progressives', sets: 2, reps: '10' },
            ],
          },
          {
            title: 'Poussée (+charge vs S1)',
            emoji: '💪',
            exercises: [
              { name: 'Pompes classiques', sets: 4, reps: '14', rest: '60s' },
              { name: 'Développé haltères couché', sets: 4, reps: '10', rest: '75s', note: 'Charge modérée' },
              { name: 'Développé militaire barre', sets: 4, reps: '8', rest: '90s' },
              { name: 'Dips lestés (sac léger)', sets: 3, reps: '10', rest: '75s' },
            ],
          },
          {
            title: 'Traction & Dos',
            emoji: '🏋️',
            exercises: [
              { name: 'Tractions strictes', sets: 4, reps: '8–10', rest: '90s' },
              { name: 'Rowing barre penché', sets: 4, reps: '10', rest: '75s' },
              { name: 'Tirage nuque prise large', sets: 3, reps: '12', rest: '60s' },
            ],
          },
          {
            title: 'Core renforcé',
            emoji: '🔩',
            exercises: [
              { name: 'Planche frontale', sets: 4, duration: '40s' },
              { name: 'Russian twists', sets: 3, reps: '20' },
              { name: 'Rollout (AB wheel ou barre)', sets: 3, reps: '8' },
            ],
          },
        ],
        tips: ['Augmenter la charge de 5–10% vs S1 si mouvement maîtrisé'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Sprints courts + Travail de départ',
        duration: '60 min',
        intensity: 'élevée',
        objective: 'Introduire les premiers sprints courts à haute intensité',
        kneeLoad: 'modéré',
        warnings: ['Ligne droite uniquement', 'Récupération complète entre chaque sprint (90s min)'],
        blocks: [
          {
            title: 'Échauffement complet',
            emoji: '🔥',
            exercises: [
              { name: 'Trot léger', duration: '6 min' },
              { name: 'Éducatifs (talons-fesses, genoux, foulées)', duration: '8 min' },
              { name: 'Accélérations progressives 20m (60-70-80%)', sets: 3, reps: '20m' },
            ],
          },
          {
            title: 'Sprints courts',
            emoji: '⚡',
            exercises: [
              { name: 'Sprint 15m départ arrêté', sets: 6, reps: '15m', rest: '90s', note: '85–90% effort', kneeWarning: true },
              { name: 'Sprint 20m départ arrêté', sets: 6, reps: '20m', rest: '90s', kneeWarning: true },
              { name: 'Sprint 25m départ arrêté', sets: 5, reps: '25m', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Travail de départ explosif',
            emoji: '🚀',
            exercises: [
              { name: 'Départ allongé au sol → sprint 10m', sets: 5, reps: '10m', rest: '90s' },
              { name: 'Départ de dos (demi-tour + sprint 15m)', sets: 4, reps: '15m', rest: '90s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot léger', duration: '6 min' },
              { name: 'Foam roller + étirements', duration: '10 min' },
            ],
          },
        ],
        tips: ['Sprints = efforts maximaux AVEC récupération complète', 'Chronométrer les 20m pour suivre la progression'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force MI – Amplitude complète, charges croissantes',
        duration: '65 min',
        intensity: 'modérée',
        objective: 'Squatter plus profond, charger davantage, renforcer les chaînes postérieures',
        kneeLoad: 'modéré',
        warnings: ['Squat full range si genou OK (pas de douleur semaine 1)', 'Toujours garder les genoux dans l\'axe'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo léger', duration: '8 min' },
              { name: 'Squat au poids du corps (warm-up)', sets: 3, reps: '10' },
              { name: 'Fentes marchées légères', sets: 2, reps: '10 par jambe' },
            ],
          },
          {
            title: 'Force MI',
            emoji: '🦵',
            exercises: [
              { name: 'Squat barre ou haltères (amplitude progressive)', sets: 4, reps: '10', rest: '90s', note: '30–40 kg selon niveau', kneeWarning: true },
              { name: 'Fentes avant avec haltères', sets: 3, reps: '12 par jambe', rest: '75s', kneeWarning: true },
              { name: 'Romanian deadlift (haltères)', sets: 4, reps: '12', rest: '90s' },
              { name: 'Step-up boîte 30cm', sets: 3, reps: '12 par jambe', rest: '75s', kneeWarning: true },
              { name: 'Leg curl charge légère-modérée', sets: 3, reps: '15', rest: '60s' },
            ],
          },
          {
            title: 'Fessiers & Explosivité',
            emoji: '⚡',
            exercises: [
              { name: 'Hip thrust barre légère', sets: 4, reps: '12', rest: '75s' },
              { name: 'Squat sauté (atterrissage contrôlé)', sets: 3, reps: '8', rest: '90s', note: 'Réception genoux fléchis', kneeWarning: true },
              { name: 'Mollets unilatéraux', sets: 3, reps: '15 par jambe' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements MI + foam roller', duration: '14 min' },
            ],
          },
        ],
        tips: ['Charge squat semaine 2 : +5 kg vs S1', 'Le squat sauté marque l\'entrée dans la pliométrie – prudence à la réception'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Circuit puissance + Footing renforcé',
        duration: '60 min',
        intensity: 'modérée',
        objective: 'Séance mixte force-vitesse-endurance pour consolider l\'ensemble de la semaine',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs', duration: '10 min' },
            ],
          },
          {
            title: 'Circuit puissance (3 tours)',
            emoji: '⚡',
            exercises: [
              { name: 'Pompes explosives (mains décollent si possible)', reps: '10', rest: '30s' },
              { name: 'Squat sauté', reps: '10', kneeWarning: true },
              { name: 'Sprint 20m', reps: '20m', kneeWarning: true },
              { name: 'Med ball chest pass (ou pompes explo)', reps: '8' },
              { name: 'Foulées bondissantes 15m', reps: '15m' },
            ],
          },
          {
            title: 'Footing de fin de semaine',
            emoji: '🏃',
            exercises: [
              { name: 'Footing continu 20 min', duration: '20 min', note: '65–70% FCmax', kneeWarning: true },
            ],
          },
          {
            title: 'Récupération',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements + glaçage genou si besoin', duration: '12 min' },
              { name: 'Bilan S2 : noter les temps de sprint 20m', duration: '3 min' },
            ],
          },
        ],
        tips: ['Fin S2 : progression attendue sur 20m et sur les charges en force', 'Si genou répond bien → S3 plus intense'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 3 – VITESSE & FORCE EN DÉVELOPPEMENT
  // ─────────────────────────────────────────────
  {
    number: 3,
    phase: 'construction',
    phaseLabel: 'Phase 2 – Développement',
    title: 'Vitesse & Force en développement',
    objective: 'Footing continu 25+ min, sprints 30m, introduction des changements de direction simples, charges significatives en force.',
    volumeHours: 6.5,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier – Footing 25 min + Intervals légers',
        duration: '65 min',
        intensity: 'modérée',
        objective: 'Développer la VMA de base avec des variations d\'allure progressives',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Trot léger + éducatifs', duration: '12 min' },
            ],
          },
          {
            title: 'Séance cardio',
            emoji: '📊',
            exercises: [
              { name: 'Footing continu 70% FCmax', duration: '20 min', kneeWarning: true },
              { name: 'Intervals : 5× (2 min à 80% / 90s récup trot)', duration: '17 min 30', kneeWarning: true },
            ],
          },
          {
            title: 'Proprioception dynamique',
            emoji: '⚖️',
            exercises: [
              { name: 'Réceptions unipodales légères (saut faible hauteur)', sets: 3, reps: '8 par jambe', kneeWarning: true },
              { name: 'Équilibre après accélération courte', sets: 4, reps: '10m sprint + équilibre 5s', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot + marche + étirements', duration: '12 min' },
            ],
          },
        ],
        tips: ['FC cible intervals : 155–170 bpm', 'Bonne hydratation avant, pendant, après'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force haut du corps – Intensité accrue',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Charges plus lourdes sur développé et traction pour développer la puissance du haut',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Mobilité + activation', duration: '8 min' },
            ],
          },
          {
            title: 'Poussée lourde',
            emoji: '💪',
            exercises: [
              { name: 'Développé couché haltères', sets: 4, reps: '8', rest: '90s', note: '60–65% RM' },
              { name: 'Pompes lestées', sets: 3, reps: '10', rest: '75s' },
              { name: 'Développé militaire barre', sets: 4, reps: '8', rest: '90s' },
            ],
          },
          {
            title: 'Traction lourde',
            emoji: '🏋️',
            exercises: [
              { name: 'Tractions strictes', sets: 4, reps: '8–10', rest: '90s' },
              { name: 'Rowing barre penché', sets: 4, reps: '8', rest: '90s' },
              { name: 'Tirage nuque', sets: 3, reps: '10', rest: '75s' },
            ],
          },
          {
            title: 'Core puissance',
            emoji: '🔩',
            exercises: [
              { name: 'Planche avec mouvement bras', sets: 4, duration: '40s' },
              { name: 'Rollout AB wheel', sets: 3, reps: '10' },
              { name: 'Hanging knee raises (barre de traction)', sets: 3, reps: '15' },
            ],
          },
          {
            title: 'Spécifique 3ème ligne – Contact & Grip',
            emoji: '🏉',
            exercises: [
              { name: 'Grip serviette (serviette enroulée sur barre de traction)', sets: 3, duration: '30s', note: 'Préhension pour plaquage, ruck et maul' },
              { name: 'Renforcement cou (4 directions – résistance main)', sets: 2, reps: '10 chaque direction', note: 'Sécurité en plaquage et en mêlée' },
              { name: 'Position jackal isométrique (pont bras tendus, dos plat)', sets: 3, duration: '20s', note: 'Simulation gratteur – pousser vers l\'avant depuis les appuis' },
            ],
          },
        ],
        tips: ['Temps sous tension : descente 3s, poussée rapide', 'Progression obligatoire sur développé couché'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Sprints 30m + Changements direction simples',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Développer la vitesse linéaire et introduire les premiers appuis latéraux',
        kneeLoad: 'modéré',
        warnings: ['Changements de direction : virages larges (>120°) uniquement', 'Pas de pivot sur genou opéré'],
        blocks: [
          {
            title: 'Échauffement complet',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs + accélérations progressives', duration: '15 min' },
            ],
          },
          {
            title: 'Sprints',
            emoji: '⚡',
            exercises: [
              { name: 'Sprint 20m départ arrêté', sets: 5, reps: '20m', rest: '90s', kneeWarning: true },
              { name: 'Sprint 30m départ arrêté', sets: 6, reps: '30m', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Changements de direction progressifs',
            emoji: '↩️',
            exercises: [
              { name: 'L-drill simplifié (virage large 135°)', sets: 6, reps: '1 rep', rest: '90s', note: 'Virage côté sain en premier', kneeWarning: true },
              { name: 'Shuttle run 5-5 (1 côté à la fois)', sets: 5, reps: '1 rep', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Spécifique Centre – Step & Changement de rythme',
            emoji: '⚡',
            exercises: [
              { name: 'Step-drill cônes (amorce + changement pied d\'appui)', sets: 4, reps: '5 reps', rest: '60s', note: 'Centre : travail du crochet/step de match', kneeWarning: true },
              { name: 'Feinte de vitesse + accélération 25m', sets: 5, reps: '25m', rest: '90s', note: 'Centre : ralentir 3 foulées + explosion – simulation contre en match', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot 8 min + foam roller + étirements', duration: '18 min' },
            ],
          },
        ],
        tips: ['Surveiller la technique d\'appui : talon-orteil sur l\'extérieur du virage', 'Objectif sprint 30m : noter le temps'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force MI – Charges progressives + Box jumps',
        duration: '70 min',
        intensity: 'élevée',
        objective: 'Monter en charge sur les mouvements fondamentaux, introduire la pliométrie',
        kneeLoad: 'élevé',
        warnings: ['Box jump : atterrissage souple, genoux fléchis – phase critique'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo + squat progressif', duration: '12 min' },
            ],
          },
          {
            title: 'Force principale',
            emoji: '🦵',
            exercises: [
              { name: 'Squat barre (50–60% RM)', sets: 4, reps: '8', rest: '2 min', kneeWarning: true },
              { name: 'Fentes marchées haltères', sets: 3, reps: '12 par jambe', rest: '90s', kneeWarning: true },
              { name: 'Romanian deadlift barre', sets: 4, reps: '10', rest: '90s' },
              { name: 'Presse cuisses (charge modérée)', sets: 3, reps: '12', rest: '75s', kneeWarning: true },
            ],
          },
          {
            title: 'Pliométrie introduite',
            emoji: '⚡',
            exercises: [
              { name: 'Box jump boîte 30cm (atterrissage souple)', sets: 3, reps: '8', rest: '90s', kneeWarning: true },
              { name: 'Hip thrust barre', sets: 4, reps: '12', rest: '75s' },
              { name: 'Foulées bondissantes 15m', sets: 3, reps: '15m', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements + foam roller', duration: '14 min' },
            ],
          },
        ],
        tips: ['Charge squat : 35–50 kg selon niveau', 'Box jump = phase la plus délicate – prendre son temps'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Circuit puissance + Footing 20 min',
        duration: '65 min',
        intensity: 'modérée',
        objective: 'Travailler la puissance corps entier et consolider l\'endurance de semaine',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs', duration: '10 min' },
            ],
          },
          {
            title: 'Circuit puissance corps entier (3 tours)',
            emoji: '⚡',
            exercises: [
              { name: 'Pompes explosives', reps: '10', rest: '30s' },
              { name: 'Squat sauté', reps: '10', kneeWarning: true },
              { name: 'Sprint 20m', reps: '20m', kneeWarning: true },
              { name: 'Med ball slam', reps: '10' },
              { name: 'Planche dynamique', duration: '30s' },
            ],
          },
          {
            title: 'Footing',
            emoji: '🏃',
            exercises: [
              { name: 'Footing continu 20 min', duration: '20 min', note: '65–70% FCmax', kneeWarning: true },
            ],
          },
          {
            title: 'Récupération',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements complets', duration: '12 min' },
              { name: 'Glaçage genou si besoin', duration: '10 min' },
            ],
          },
        ],
        tips: ['Fin S3 : bilan sprint 30m et charge squat – noter la progression'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 4 – INTENSIFICATION
  // ─────────────────────────────────────────────
  {
    number: 4,
    phase: 'construction',
    phaseLabel: 'Phase 2 – Développement',
    title: 'Intensification – Charge & Vitesse',
    objective: 'Charges lourdes, intervals VMA, sprints 40m, changements de direction plus marqués et départs spécifiques rugby.',
    volumeHours: 7.5,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier / VMA – Intervals 6×3 min',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Développer la VMA et l\'endurance intermittente spécifique rugby',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Footing + éducatifs', duration: '12 min' },
            ],
          },
          {
            title: 'Intervals VMA',
            emoji: '📊',
            exercises: [
              { name: 'Interval 3 min à 80% VMA / 2 min récup trot', sets: 6, reps: '3 min effort', rest: '2 min', note: 'Pace effort : 12.8 km/h (4:41/km) – FC 155–170 bpm – ~640m couverts par répétition', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot + marche + étirements', duration: '12 min' },
            ],
          },
        ],
        tips: ['Récupération active entre intervals (trot lent, pas de marche)', 'Si fatigue accumulée → réduire à 5 intervals'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force haut du corps + Puissance',
        duration: '70 min',
        intensity: 'élevée',
        objective: 'Combiner force maximale et puissance pour préparer aux contacts rugby',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Activation épaules + pompes progressives', duration: '8 min' },
            ],
          },
          {
            title: 'Force lourde',
            emoji: '💪',
            exercises: [
              { name: 'Développé couché barre', sets: 5, reps: '5', rest: '2 min 30', note: '65–70% RM' },
              { name: 'Tractions lestées', sets: 4, reps: '6–8', rest: '2 min' },
              { name: 'Rowing barre penché', sets: 4, reps: '8', rest: '90s' },
            ],
          },
          {
            title: 'Puissance haut du corps',
            emoji: '🚀',
            exercises: [
              { name: 'Pompes pliométriques (mains décollent)', sets: 4, reps: '8', rest: '90s' },
              { name: 'Med ball chest pass (au mur ou partenaire)', sets: 4, reps: '10', rest: '60s' },
              { name: 'Med ball overhead slam', sets: 3, reps: '10', rest: '60s' },
            ],
          },
          {
            title: 'Gainage avancé',
            emoji: '🔩',
            exercises: [
              { name: 'Planche + row haltère', sets: 3, reps: '10 par côté' },
              { name: 'L-sit (dips ou sol)', sets: 3, duration: '15s' },
            ],
          },
          {
            title: 'Spécifique postes – 3ème ligne & Centre',
            emoji: '🏉',
            exercises: [
              { name: 'Grip serviette (barre de traction)', sets: 3, duration: '35s', note: '3ème ligne : force de préhension contact' },
              { name: 'Renforcement cou (4 directions)', sets: 2, reps: '12 chaque direction', note: '3ème ligne : stabilité cervicale en plaquage' },
              { name: 'Pompes explosives + rebond latéral', sets: 3, reps: '8', note: 'Centre : réactivité et changement de direction bras' },
            ],
          },
        ],
        tips: ['Complexes force-puissance = transfert rugbystique direct'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Sprints 40m + Agilité rugby',
        duration: '70 min',
        intensity: 'élevée',
        objective: 'Développer la vitesse sur 40m et l\'agilité avec des changements de direction rugby',
        kneeLoad: 'modéré',
        warnings: ['Changements de direction à vitesse contrôlée – ne pas aller à fond en virage'],
        blocks: [
          {
            title: 'Échauffement dynamique',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs + accélérations progressives 20m', duration: '15 min' },
            ],
          },
          {
            title: 'Sprints principaux',
            emoji: '⚡',
            exercises: [
              { name: 'Sprint 30m', sets: 5, reps: '30m', rest: '2 min', kneeWarning: true },
              { name: 'Sprint 40m', sets: 6, reps: '40m', rest: '2 min 30', kneeWarning: true },
              { name: 'Sprint 60m – Centre (distance décisive de match)', sets: 4, reps: '60m', rest: '3 min', note: 'Récupération complète – effort maximal', kneeWarning: true },
            ],
          },
          {
            title: 'Agilité rugby',
            emoji: '🏉',
            exercises: [
              { name: 'L-drill (cônes en L)', sets: 6, reps: '1 rep', rest: '90s', kneeWarning: true },
              { name: 'Shuttle run 5-10-5', sets: 5, reps: '1 rep', rest: '90s', kneeWarning: true },
              { name: 'Départ position rugby (3 appuis) + sprint 15m – 3ème ligne', sets: 5, reps: '15m', rest: '90s', note: '3ème ligne : départ rapide depuis le sol/ruck' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot + foam roller + étirements', duration: '15 min' },
            ],
          },
        ],
        tips: ['Temps cible sprint 40m : <5.8s pour arrières, <6.2s pour avants', 'Appui virage : côté extérieur talon-orteil'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force MI lourde + Complexes puissance',
        duration: '75 min',
        intensity: 'élevée',
        objective: 'Charges élevées sur squat/deadlift et premiers complexes force-pliométrie',
        kneeLoad: 'élevé',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo + squat barre vide progressif', duration: '12 min' },
            ],
          },
          {
            title: 'Force MI lourde',
            emoji: '🦵',
            exercises: [
              { name: 'Squat barre (60–65% RM)', sets: 4, reps: '6', rest: '2 min 30', kneeWarning: true },
              { name: 'Romanian deadlift barre', sets: 4, reps: '8', rest: '2 min' },
              { name: 'Fentes bulgares haltères', sets: 3, reps: '10 par jambe', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Complexes force-puissance',
            emoji: '⚡',
            exercises: [
              { name: 'Complexe : Squat 4 reps lourd → Box jump 4 reps', sets: 4, reps: '4+4', rest: '2 min 30', kneeWarning: true },
              { name: 'Foulées bondissantes maximales 20m', sets: 4, reps: '20m', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Accessoires',
            emoji: '🔩',
            exercises: [
              { name: 'Hip thrust barre lourd', sets: 4, reps: '10', rest: '90s' },
              { name: 'Nordic curl (excentrique ischio)', sets: 3, reps: '6', rest: '2 min', note: 'Prévention claquages ischios' },
            ],
          },
        ],
        tips: ['PAP : attendre 3–5 min après le squat lourd avant le box jump', 'Nordic curls = protection anti-blessure essentielle'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Conditioning rugby – Sprint + Circuit',
        duration: '70 min',
        intensity: 'élevée',
        objective: 'Simuler les efforts intermittents d\'un entraînement rugby',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Activation',
            emoji: '🏉',
            exercises: [
              { name: 'Trot + éducatifs + sprints activation', duration: '12 min' },
            ],
          },
          {
            title: 'Conditioning (4 blocs – 2 min repos entre blocs)',
            emoji: '⚡',
            exercises: [
              { name: 'Bloc 1 : 3× (sprint 30m + 10 pompes + 10 squats)', rest: '90s entre reps', kneeWarning: true },
              { name: 'Bloc 2 : Shuttle run 10-20-30m ×5', rest: '2 min' },
              { name: 'Bloc 3 : Med ball circuit (chest, slam, rotation ×10)', rest: '90s' },
              { name: 'Bloc 4 : Sprint 40m ×6', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Récupération active',
            emoji: '🧘',
            exercises: [
              { name: 'Marche + étirements complets', duration: '14 min' },
              { name: 'Glaçage genou + bilan S4', duration: '10 min' },
            ],
          },
        ],
        tips: ['Bilan S4 : comparer temps sprint 40m vs S2 (sprint 20m)', 'Si progrès bien visibles → S5-S6 à fond'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 5 – PERFORMANCE SPÉCIFIQUE RUGBY
  // ─────────────────────────────────────────────
  {
    number: 5,
    phase: 'performance',
    phaseLabel: 'Phase 3 – Performance rugby',
    title: 'Performance spécifique rugby',
    objective: 'Entraînements intensifs spécifiques rugby. VMA poussée, vitesse maximale, force max 5×5, complexes explosifs et simulation jeu.',
    volumeHours: 8,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'VMA – Fartlek / Intervals 400m',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Développer la capacité aérobie maximale spécifique rugby',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Footing + éducatifs', duration: '15 min' },
            ],
          },
          {
            title: 'Fartlek ou Intervals 400m',
            emoji: '📊',
            exercises: [
              { name: 'Option A – Fartlek 35 min', duration: '35 min', note: '2 min à 82% (13.1 km/h · 4:35/km) · 1 min récup 60% (9.6 km/h) · sprints 10s à 16 km/h', kneeWarning: true },
              { name: 'Option B – 8×400m à 85–90% VMA', sets: 8, reps: '400m', rest: '1 min 30', note: 'Temps cible : 1:46 à 85% (13.6 km/h) · 1:40 à 90% (14.4 km/h)', kneeWarning: true },
              { name: 'Option C – 30-30 intermittent (avancé)', sets: 12, reps: '133m en 30s / 30s repos passif', note: '100% VMA = 16 km/h · 12 à 15 reps · Très spécifique rugby', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot + marche + étirements', duration: '15 min' },
            ],
          },
        ],
        tips: ['FC effort intervals : 160–175 bpm', 'Récupération active entre les 400m (pas de marche)'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force maximale haut du corps – 5×5',
        duration: '70 min',
        intensity: 'maximale',
        objective: 'Atteindre des charges maximales sur les mouvements fondamentaux',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Mobilité + séries progressives d\'activation', duration: '10 min' },
            ],
          },
          {
            title: 'Force max 5×5',
            emoji: '💪',
            exercises: [
              { name: 'Développé couché barre', sets: 5, reps: '5', rest: '2 min 30', note: '70–75% RM' },
              { name: 'Tractions lestées', sets: 5, reps: '5', rest: '2 min 30' },
              { name: 'Développé militaire barre', sets: 5, reps: '5', rest: '2 min' },
            ],
          },
          {
            title: 'Accessoires',
            emoji: '🏋️',
            exercises: [
              { name: 'Dips lestés', sets: 3, reps: '8', rest: '90s' },
              { name: 'Curl biceps haltères lourds', sets: 3, reps: '8', rest: '60s' },
              { name: 'Face pulls + Shrugs', sets: 3, reps: '15' },
            ],
          },
          {
            title: 'Core lourd',
            emoji: '🔩',
            exercises: [
              { name: 'Ab rollout', sets: 4, reps: '12' },
              { name: 'Planche lestée', sets: 3, duration: '45s' },
            ],
          },
          {
            title: 'Spécifique postes – Contact & Vitesse',
            emoji: '🏉',
            exercises: [
              { name: 'Grip serviette (max duration)', sets: 3, duration: '40s', note: '3ème ligne : surcharge fonctionnelle plaquage/ruck' },
              { name: 'Renforcement cou lourd (élastique ou charge légère)', sets: 3, reps: '12 chaque direction', note: '3ème ligne : stabilité maximale au contact' },
              { name: 'Fente latérale + accélération 10m', sets: 4, reps: '10m', rest: '60s', note: 'Centre : sortie de step en accélération' },
            ],
          },
        ],
        tips: ['5×5 = protocole optimal force maximale', 'Repos complet entre les séries (2–3 min)'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Vitesse maximale + Agilité spécifique rugby',
        duration: '70 min',
        intensity: 'maximale',
        objective: 'Exprimer la vitesse maximale et travailler l\'agilité propre au jeu rugby',
        kneeLoad: 'modéré',
        warnings: ['Changements de direction à vitesse élevée : contrôler la technique d\'appui'],
        blocks: [
          {
            title: 'Échauffement premium',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs + accélérations progressives (60-70-80-90%)', duration: '18 min' },
            ],
          },
          {
            title: 'Vitesse maximale',
            emoji: '⚡',
            exercises: [
              { name: 'Sprint 40m (récupération complète 2 min 30)', sets: 8, reps: '40m', rest: '2 min 30', note: 'MAXIMALE – chronométrer chaque effort', kneeWarning: true },
              { name: 'Sprint 60m – Centre (distance de match décisive)', sets: 4, reps: '60m', rest: '3 min', note: 'Centre : vitesse de pointe sur distance décisive', kneeWarning: true },
            ],
          },
          {
            title: 'Agilité & Spécifique postes',
            emoji: '🏉',
            exercises: [
              { name: 'T-drill (4 cônes en T)', sets: 6, reps: '1 rep', rest: '90s', note: 'Temps cible : < 10s avants · < 9.5s arrières', kneeWarning: true },
              { name: 'Zig-zag cônes + step final – Centre', sets: 6, reps: '25m', rest: '90s', note: 'Centre : finir chaque séquence par un crochet extérieur', kneeWarning: true },
              { name: 'Jackal position → sprint réactif 10m – 3ème ligne', sets: 4, reps: '10m', rest: '60s', note: '3ème ligne : se relever du grattage + sprint de relance' },
              { name: 'Départ balle en main + sprint 20m – 3ème ligne', sets: 5, reps: '20m', rest: '90s', note: '3ème ligne : simulation carry depuis ruck' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot + foam roller', duration: '12 min' },
            ],
          },
        ],
        tips: ['Hydratation ++ lors des séances de vitesse', 'T-drill : chronométrer chaque répétition pour évaluer la progression'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force-Puissance MI – Complexes lourds',
        duration: '75 min',
        intensity: 'maximale',
        objective: 'Pics de force + puissance explosive maximale',
        kneeLoad: 'élevé',
        blocks: [
          {
            title: 'Échauffement spécifique',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo + squat barre vide + séries PAP', duration: '12 min' },
            ],
          },
          {
            title: 'Force-Puissance (complexes)',
            emoji: '⚡',
            exercises: [
              { name: 'Complexe 1 : Squat 3 reps (70–75%) → Box jump 4 reps', sets: 4, reps: '3+4', rest: '2 min 30', kneeWarning: true },
              { name: 'Complexe 2 : Romanian DL 4 reps lourds → Foulées bondissantes 15m', sets: 4, reps: '4+15m', rest: '2 min' },
              { name: 'Power clean léger (ou saut avec barre légère 25–30 kg)', sets: 3, reps: '5', rest: '2 min' },
            ],
          },
          {
            title: 'Accessoires',
            emoji: '🔩',
            exercises: [
              { name: 'Hip thrust barre lourd', sets: 4, reps: '8', rest: '90s' },
              { name: 'Nordic curl (ischio excentrique)', sets: 3, reps: '6', rest: '2 min' },
              { name: 'Mollets unilatéraux lestés', sets: 3, reps: '15 par jambe' },
            ],
          },
        ],
        tips: ['PAP : 3–5 min entre squat lourd et box jump', 'Mesurer hauteur box jump vs S3'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Simulation séance rugby',
        duration: '75 min',
        intensity: 'élevée',
        objective: 'Reproduire les efforts d\'un entraînement rugby complet',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Activation pré-match',
            emoji: '🏉',
            exercises: [
              { name: 'Footing + éducatifs + sprints activation', duration: '15 min' },
              { name: 'Contacts épaules légers (si partenaire disponible)', sets: 3, reps: '5 contacts', note: 'Valider avec kiné si contacts autorisés', kneeWarning: true },
            ],
          },
          {
            title: 'Conditioning rugby (4 blocs)',
            emoji: '⚡',
            exercises: [
              { name: 'Bloc 1 : 3×(sprint 30m + 10 pompes + 10 squats)', rest: '90s entre reps, 3 min entre blocs' },
              { name: 'Bloc 2 : Shuttle run 10-20-30m ×5', rest: '2 min' },
              { name: 'Bloc 3 : Med ball circuit ×10 (chest, slam, rotation)', rest: '90s' },
              { name: 'Bloc 4 : Sprint 40m ×6', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Récupération active',
            emoji: '🧘',
            exercises: [
              { name: 'Marche + étirements complets', duration: '15 min' },
              { name: 'Glaçage genou + bilan S5', duration: '10 min' },
            ],
          },
        ],
        tips: ['Si reprise club d\'ici S5 : adapter le volume en conséquence', 'Bilan S5 : comparer sprints et charges vs S1'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 6 – PIC DE FORME / RETOUR AU JEU
  // ─────────────────────────────────────────────
  {
    number: 6,
    phase: 'performance',
    phaseLabel: 'Phase 3 – Performance rugby',
    title: 'Pic de forme – Retour au jeu',
    objective: 'Affûtage final. Volume légèrement réduit, intensité maintenue au max. Prêt pour la reprise complète en compétition.',
    volumeHours: 7,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier entretien + Sprints courts 100m',
        duration: '60 min',
        intensity: 'élevée',
        objective: 'Maintenir la capacité aérobie tout en conservant la tonicité musculaire',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Footing + mobilité', duration: '12 min' },
            ],
          },
          {
            title: 'Foncier + Sprints',
            emoji: '🏃',
            exercises: [
              { name: 'Footing continu 25 min', duration: '25 min', note: '70–75% FCmax', kneeWarning: true },
              { name: 'Sprints finaux 10×100m', sets: 10, reps: '100m', rest: '45s', note: 'Intensité 85–90%', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot + étirements', duration: '10 min' },
            ],
          },
        ],
        tips: ['Semaine 6 = affûtage : -20% volume, même intensité', 'Récupération prioritaire'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force maintenance haut du corps',
        duration: '60 min',
        intensity: 'élevée',
        objective: 'Maintenir les gains de force en réduisant le volume',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Activation + pompes progressives', duration: '8 min' },
            ],
          },
          {
            title: 'Force maintenance (volume -30% vs S5)',
            emoji: '💪',
            exercises: [
              { name: 'Développé couché barre', sets: 4, reps: '3', rest: '2 min', note: '75–80% RM – maintien pic de force' },
              { name: 'Tractions lestées', sets: 4, reps: '3–5', rest: '2 min' },
              { name: 'Développé militaire', sets: 3, reps: '5', rest: '90s' },
            ],
          },
          {
            title: 'Puissance express',
            emoji: '🚀',
            exercises: [
              { name: 'Pompes explosives', sets: 3, reps: '8', rest: '90s' },
              { name: 'Med ball chest pass', sets: 3, reps: '10', rest: '60s' },
            ],
          },
          {
            title: 'Core',
            emoji: '🔩',
            exercises: [
              { name: 'Planche + variations', sets: 3, duration: '45s' },
              { name: 'Gainage dynamique', sets: 2, reps: '10 par côté' },
            ],
          },
        ],
        tips: ['Moins de volume mais mêmes charges – maintenir le niveau atteint'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Vitesse maximale – Séance pic',
        duration: '60 min',
        intensity: 'maximale',
        objective: 'Exprimer la vitesse maximale acquise sur 6 semaines',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement premium',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs + accélérations 60-70-80-90%', duration: '18 min' },
            ],
          },
          {
            title: 'Sprints vitesse max',
            emoji: '⚡',
            exercises: [
              { name: 'Sprint 40m (récup complète 3 min)', sets: 10, reps: '40m', note: 'OBJECTIF : meilleur temps de tout le programme', rest: '3 min', kneeWarning: true },
            ],
          },
          {
            title: 'Départs spécifiques rugby',
            emoji: '🏉',
            exercises: [
              { name: 'Départ sur signal sonore (réaction)', sets: 8, reps: '20m', rest: '90s' },
              { name: 'Changement de direction sur signal', sets: 5, reps: '1 rep', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot récup + foam roller MI', duration: '12 min' },
            ],
          },
        ],
        tips: ['Chronométrer chaque sprint 40m – noter le meilleur temps', 'Comparer avec les temps de S2 (sprint 20m×2) pour mesurer la progression'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Puissance MI – Pic expressif',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Exprimer la puissance maximale sur les membres inférieurs avant le retour au jeu',
        kneeLoad: 'élevé',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Activation PAP + squat barre vide', duration: '12 min' },
            ],
          },
          {
            title: 'Force pic',
            emoji: '🦵',
            exercises: [
              { name: 'Squat barre (75–80% RM)', sets: 4, reps: '3', rest: '3 min', kneeWarning: true },
              { name: 'Romanian deadlift lourd', sets: 3, reps: '5', rest: '2 min' },
            ],
          },
          {
            title: 'Puissance explosive',
            emoji: '⚡',
            exercises: [
              { name: 'Box jump (hauteur maximale atteinte)', sets: 4, reps: '5', rest: '2 min', kneeWarning: true },
              { name: 'Foulées bondissantes maximales 30m', sets: 4, reps: '30m', rest: '2 min', kneeWarning: true },
              { name: 'Sprint résistance élastique 20m', sets: 5, reps: '20m', rest: '90s' },
            ],
          },
          {
            title: 'Gainage',
            emoji: '🔩',
            exercises: [
              { name: 'Planche dynamique + rotation', sets: 3, duration: '40s' },
            ],
          },
        ],
        tips: ['Mesurer la hauteur box jump S1 vs S6 : objectif +5–8 cm', 'Pas de fatigue inutile – garder de l\'énergie pour vendredi'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Séance type match – Retour terrain',
        duration: '80 min',
        intensity: 'maximale',
        objective: 'Simulation complète entraînement rugby. 6 semaines sont terminées – prêt pour la compétition !',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Activation pré-match',
            emoji: '🏉',
            exercises: [
              { name: 'Footing + éducatifs + sprints activation', duration: '15 min' },
              { name: 'Contacts épaule / maul léger (si autorisé)', sets: 3, reps: '5 actions', note: 'Avec accord kiné / médecin', kneeWarning: true },
            ],
          },
          {
            title: 'Jeu conditionné rugby',
            emoji: '⚡',
            exercises: [
              { name: 'Exercices de passes en mouvement', duration: '10 min' },
              { name: 'Touches courtes + sprint soutien', sets: 6, reps: '1 action', rest: '90s' },
              { name: 'Jeu au pied + récupération balle', duration: '10 min' },
              { name: 'Sprint d\'appui + soutien (3×3)', sets: 4, reps: '1 séquence', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Bilan des 6 semaines 🏆',
            emoji: '🏆',
            exercises: [
              { name: 'Test sprint 40m chronométré (2 essais)', sets: 2, reps: '40m', rest: 'Récup complète', kneeWarning: true },
              { name: 'Test box jump (meilleure hauteur)', sets: 3, reps: '1 saut max', kneeWarning: true },
              { name: 'Bilan subjectif : genou, confiance, forme générale', duration: '5 min' },
            ],
          },
          {
            title: 'Récupération finale',
            emoji: '🧘',
            exercises: [
              { name: 'Marche + étirements complets', duration: '15 min' },
              { name: 'Glaçage genou + récupération globale', duration: '15 min' },
            ],
          },
        ],
        tips: [
          'FÉLICITATIONS – 6 semaines complètes !',
          'Reprendre contact avec le kiné pour validation retour compétition',
          'Continuer le renforcement genou même en reprise (1 séance/semaine)',
          'Bilan attendu : +15–20% sur les charges, sprint 40m nettement amélioré',
        ],
      },
    ],
  },
];

export const ATHLETE = {
  age: '15,5 ans',
  height: '1,84 m',
  weight: '76 kg',
  context: 'Post-opération ménisque – reprise course validée (2 semaines)',
  goals: ['Foncier (endurance)', 'Vitesse', 'Force', 'Puissance'],
  weeks: 6,
  sessionsPerWeek: 5,
  vma: 16,
  positions: ['Troisième ligne', 'Centre'],
};

/** Zones d'allure calculées sur VMA = 16 km/h */
export const VMA_PACES = [
  { label: 'Récupération', pct: 60, kmh: 9.6,  pace: '6:15/km', use: 'Récup active entre séries' },
  { label: 'Aérobie léger', pct: 65, kmh: 10.4, pace: '5:46/km', use: 'Footing facile (S1-S2)' },
  { label: 'Aérobie base',  pct: 70, kmh: 11.2, pace: '5:21/km', use: 'Footing continu (S2-S4)' },
  { label: 'Tempo',         pct: 75, kmh: 12.0, pace: '5:00/km', use: 'Fartlek effort modéré' },
  { label: 'Seuil',         pct: 80, kmh: 12.8, pace: '4:41/km', use: 'Intervals 3 min (S3-S4)' },
  { label: 'VMA 85%',       pct: 85, kmh: 13.6, pace: '4:25/km', use: '400m répétés (S4-S5)' },
  { label: 'VMA 90%',       pct: 90, kmh: 14.4, pace: '4:10/km', use: '400m avancé (S5)' },
  { label: 'VMA 100%',      pct: 100, kmh: 16.0, pace: '3:45/km', use: '30-30 intermittent (S5-S6)' },
];

/** Cible 30-30 intermittent : 133m à 16 km/h en 30s */
export const INTERMITTENT_30_30 = { distance: 133, speedKmh: 16 };

export const POSITIONS = [
  {
    id: 'troisieme-ligne',
    label: 'Troisième ligne (6, 7, 8)',
    icon: '⚡',
    profile: 'Poste le plus exigeant physiquement. Endurance élevée, explosivité courte distance, force de contact maximale.',
    keyQualities: ['Explosivité 0–10m', 'Force en contact (ruck/maul)', 'Endurance de haute intensité', 'Grip & préhension', 'Stabilité cervicale (plaquage)'],
    vmaCible: '≥ 17–18 km/h à terme',
    sprint40mCible: '< 5.8s',
    specificWork: ['Jackal (gratteur)', 'Grip barre/serviette', 'Renforcement cou', 'Poussée contact (tackle bag)'],
    colorClass: 'border-orange-700 bg-orange-950/30',
    tagClass: 'bg-orange-900/40 text-orange-300 border-orange-700',
  },
  {
    id: 'centre',
    label: 'Centre (12, 13)',
    icon: '🏃',
    profile: 'Poste de vitesse et de percussion. Accélération explosive, lecture du jeu, step et changement de rythme.',
    keyQualities: ['Vitesse maximale (40–60m)', 'Accélération 0–20m', 'Step & changement de direction', 'Percussion en ligne', 'Endurance intermittente'],
    vmaCible: '≥ 17 km/h à terme',
    sprint40mCible: '< 5.5s',
    specificWork: ['Sprint 60m', 'Step-drill cônes', 'Feinte de vitesse', 'Percussion + offload'],
    colorClass: 'border-sky-700 bg-sky-950/30',
    tagClass: 'bg-sky-900/40 text-sky-300 border-sky-700',
  },
];

export const PHASES = [
  {
    phase: 'réveil',
    label: 'Phase 1 – Base de course',
    weeks: '1–2',
    color: 'emerald',
    description: 'La course est reprise avec succès. On consolide l\'endurance, installe le renforcement et développe la technique de course.',
  },
  {
    phase: 'construction',
    label: 'Phase 2 – Développement',
    weeks: '3–4',
    color: 'amber',
    description: 'Sprints jusqu\'à 40m, changements de direction progressifs, force significative (squat chargé, complexes), VMA.',
  },
  {
    phase: 'performance',
    label: 'Phase 3 – Performance rugby',
    weeks: '5–6',
    color: 'red',
    description: 'Charges maximales 5×5, vitesse maximale, agilité rugby, VMA poussée, simulation match et pic de forme.',
  },
];

export const SESSION_TYPE_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  foncier: { label: 'Foncier', color: 'text-sky-400', bg: 'bg-sky-900/40 border-sky-700' },
  'force-haut': { label: 'Force – Haut du corps', color: 'text-purple-400', bg: 'bg-purple-900/40 border-purple-700' },
  vitesse: { label: 'Vitesse & Agilité', color: 'text-yellow-400', bg: 'bg-yellow-900/40 border-yellow-700' },
  'force-bas': { label: 'Force – Membres inférieurs', color: 'text-orange-400', bg: 'bg-orange-900/40 border-orange-700' },
  puissance: { label: 'Puissance & Rugby', color: 'text-red-400', bg: 'bg-red-900/40 border-red-700' },
};

export const INTENSITY_LABELS: Record<string, { label: string; color: string }> = {
  faible: { label: 'Faible', color: 'text-emerald-400' },
  modérée: { label: 'Modérée', color: 'text-yellow-400' },
  élevée: { label: 'Élevée', color: 'text-orange-400' },
  maximale: { label: 'Maximale', color: 'text-red-400' },
};

export const KNEE_LOAD_LABELS: Record<string, { label: string; color: string }> = {
  léger: { label: '🟢 Genou léger', color: 'text-emerald-400' },
  modéré: { label: '🟡 Genou modéré', color: 'text-yellow-400' },
  élevé: { label: '🔴 Genou élevé', color: 'text-red-400' },
};
