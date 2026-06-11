import { Week } from './types';

export const programme: Week[] = [
  // ─────────────────────────────────────────────
  // SEMAINE 1 – RÉVEIL MUSCULAIRE
  // ─────────────────────────────────────────────
  {
    number: 1,
    phase: 'réveil',
    phaseLabel: 'Phase 1 – Réveil musculaire',
    title: 'Réveil & Mobilisation',
    objective: 'Réactiver le corps en douceur sans contraindre le genou opéré. Priorité à la proprioception et au renforcement non-articulaire.',
    volumeHours: 4,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier doux – Activation cardiovasculaire',
        duration: '50 min',
        intensity: 'faible',
        objective: 'Relancer le système cardiovasculaire sans impact articulaire',
        kneeLoad: 'léger',
        warnings: ['Aucune course – substituer par vélo ou marche rapide', 'Stopper si douleur au genou'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Marche active', duration: '5 min', note: 'Bras balancés, hautes foulées' },
              { name: 'Rotations chevilles & genoux', sets: 2, reps: '10 rotations chaque sens' },
              { name: 'Balancement de jambes (sagittal)', sets: 2, reps: '15 chaque jambe' },
            ],
          },
          {
            title: 'Cardio principal',
            emoji: '🚴',
            exercises: [
              { name: 'Vélo stationnaire ou marche rapide', duration: '30 min', note: '60–65% FCmax (vous pouvez parler)', rest: 'Continu' },
              { name: 'Proprioception unipodal statique', sets: 3, reps: '30s par jambe', note: 'Genou opéré inclus – très progressif', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements ischio-jambiers', sets: 2, duration: '30s par jambe' },
              { name: 'Étirements quadriceps debout', sets: 2, duration: '30s par jambe', kneeWarning: true },
              { name: 'Étirements mollets', sets: 2, duration: '30s' },
              { name: 'Glaçage genou (si besoin)', duration: '10–15 min', note: 'Après la séance si sensation de chaleur' },
            ],
          },
        ],
        tips: ['Fréquence cardiaque cible : 110–130 bpm', 'Hydratation : 500 ml pendant la séance'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force haut du corps + Gainage',
        duration: '55 min',
        intensity: 'modérée',
        objective: 'Renforcer haut du corps et tronc sans solliciter le genou',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Rotations épaules & mobilité thoracique', duration: '5 min' },
              { name: 'Cercles bras (avant/arrière)', sets: 2, reps: '15' },
              { name: 'Pompes genoux basse intensité', sets: 2, reps: '8' },
            ],
          },
          {
            title: 'Haut du corps',
            emoji: '💪',
            exercises: [
              { name: 'Pompes classiques', sets: 4, reps: '10', rest: '60s' },
              { name: 'Tractions (ou tirage horizontal TRX/anneau)', sets: 3, reps: '8', rest: '90s', note: 'TRX si pas de barre' },
              { name: 'Développé épaules avec haltères', sets: 3, reps: '10', rest: '75s' },
              { name: 'Rowing haltères (coude serré)', sets: 3, reps: '10 par bras', rest: '60s' },
              { name: 'Curl biceps', sets: 3, reps: '12', rest: '45s' },
            ],
          },
          {
            title: 'Gainage & Core',
            emoji: '🔩',
            exercises: [
              { name: 'Planche frontale', sets: 4, duration: '30s', rest: '30s' },
              { name: 'Planche latérale', sets: 3, duration: '25s par côté', rest: '30s' },
              { name: 'Superman (extension dorsale)', sets: 3, reps: '12', rest: '30s' },
              { name: 'Crunchs classiques', sets: 3, reps: '15', rest: '30s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements pectoraux (au mur)', duration: '30s par côté' },
              { name: 'Étirements trapèzes & cou', duration: '30s' },
              { name: 'Chat-vache (mobilité colonne)', sets: 2, reps: '10' },
            ],
          },
        ],
        tips: ['Charges légères à modérées – technique avant tout', 'Respiration : expiration sur l\'effort'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Coordination & Proprioception',
        duration: '50 min',
        intensity: 'faible',
        objective: 'Réhabiliter la proprioception du genou, travailler la coordination pied-corps',
        kneeLoad: 'modéré',
        warnings: ['Pas de sprint – travail technique lent', 'Surfaces stables uniquement'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Marche rapide', duration: '8 min' },
              { name: 'Mobilité cheville (cercles, flexion-extension)', sets: 2, reps: '15' },
              { name: 'Mobilité hanche (rotation interne/externe)', sets: 2, reps: '10 chaque sens' },
            ],
          },
          {
            title: 'Proprioception progressive',
            emoji: '⚖️',
            exercises: [
              { name: 'Équilibre unipodal yeux ouverts', sets: 3, duration: '30s par jambe', note: 'Sur surface stable', kneeWarning: true },
              { name: 'Équilibre unipodal yeux fermés', sets: 3, duration: '20s par jambe', kneeWarning: true },
              { name: 'Équilibre sur coussin ou planche proprioceptive', sets: 3, duration: '30s par jambe', note: 'Si disponible', kneeWarning: true },
              { name: 'Transferts de poids latéraux lents', sets: 3, reps: '10', note: 'Glissement latéral sans levée' },
            ],
          },
          {
            title: 'Coordination technique',
            emoji: '🏃',
            exercises: [
              { name: 'Montées de genoux sur place (lent)', sets: 3, reps: '20', rest: '45s' },
              { name: 'Talons-fesses sur place (lent)', sets: 3, reps: '20', rest: '45s' },
              { name: 'Skipping latéral (pas chassés)', sets: 3, reps: '20m aller-retour', rest: '45s' },
              { name: 'Échelle de coordination (si disponible)', duration: '10 min', note: 'Exercices à deux pieds d\'abord' },
            ],
          },
          {
            title: 'Renforcement isométrique genou',
            emoji: '🦵',
            exercises: [
              { name: 'Isométrique quadriceps (chaise romaine légère)', sets: 3, duration: '30s', note: 'Angle 45°, sans douleur', kneeWarning: true },
              { name: 'Pont fessier bilatéral', sets: 3, reps: '15', rest: '45s' },
              { name: 'Relevé de mollets', sets: 4, reps: '15', rest: '30s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements fléchisseurs hanche', duration: '30s par côté' },
              { name: 'Foam roller quadriceps & IT-band', duration: '2 min par jambe' },
              { name: 'Respiration diaphragmatique', duration: '5 min' },
            ],
          },
        ],
        tips: ['Écouter le genou : aucune douleur aiguë tolérée', 'La proprioception est le fondement du retour sport'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force membres inférieurs – Adaptée post-op',
        duration: '55 min',
        intensity: 'modérée',
        objective: 'Renforcer les muscles entourant le genou sans créer de stress articulaire excessif',
        kneeLoad: 'modéré',
        warnings: ['Amplitude réduite sur tous les exercices genou', 'Arrêt immédiat si douleur aiguë'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo stationnaire', duration: '10 min', note: 'Résistance faible – rotation articulaire' },
              { name: 'Marche talon-pointe', duration: '3 min' },
            ],
          },
          {
            title: 'Renforcement membres inférieurs',
            emoji: '🦵',
            exercises: [
              { name: 'Squat à la chaise (wall squat isométrique)', sets: 3, duration: '30s', note: 'Angle 45–60°, dos au mur', kneeWarning: true },
              { name: 'Fentes avant statiques (amplitude réduite)', sets: 3, reps: '10 par jambe', note: 'Descente 50%, pas de genou avant pied', kneeWarning: true },
              { name: 'Leg curl allongé (charge légère)', sets: 3, reps: '15', rest: '60s', note: 'Ischio-jambiers – charge très légère semaine 1' },
              { name: 'Abducteurs (élastique latéral)', sets: 3, reps: '15 par jambe', rest: '45s' },
              { name: 'Adducteurs (coussin entre genoux)', sets: 3, reps: '15', rest: '45s' },
              { name: 'Relevés de mollets debout', sets: 4, reps: '20', rest: '30s' },
            ],
          },
          {
            title: 'Fessiers & Stabilisation',
            emoji: '🔩',
            exercises: [
              { name: 'Pont fessier bilatéral', sets: 4, reps: '15', rest: '45s' },
              { name: 'Pont fessier unilatéral (côté sain)', sets: 3, reps: '10', rest: '60s' },
              { name: 'Clamshell (élastique)', sets: 3, reps: '15 par côté', rest: '30s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements ischio-jambiers (sol)', duration: '40s par jambe' },
              { name: 'Étirements fessiers (figure-4)', duration: '40s par côté' },
              { name: 'Glaçage genou si sensation de chaleur', duration: '10–15 min' },
            ],
          },
        ],
        tips: ['Priorité à la qualité d\'exécution', 'Garder une légère contraction des abdominaux'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Circuit récupération active + Renforcement léger',
        duration: '50 min',
        intensity: 'faible',
        objective: 'Consolider la semaine avec une séance de consolidation et récupération',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Marche/vélo', duration: '8 min', note: 'Progressif' },
            ],
          },
          {
            title: 'Circuit consolidation (3 tours)',
            emoji: '🔄',
            exercises: [
              { name: 'Pompes', reps: '12', rest: '30s entre chaque exercice' },
              { name: 'Planche frontale', duration: '30s' },
              { name: 'Crunchs', reps: '15' },
              { name: 'Pont fessier', reps: '15' },
              { name: 'Relevés de mollets', reps: '20' },
              { name: 'Superman', reps: '12' },
            ],
          },
          {
            title: 'Cardio récupération',
            emoji: '🚶',
            exercises: [
              { name: 'Marche rapide ou vélo léger', duration: '15 min', note: '55–60% FCmax' },
            ],
          },
          {
            title: 'Récupération complète',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements globaux (tout le corps)', duration: '15 min' },
              { name: 'Respiration & relaxation', duration: '5 min' },
              { name: 'Glaçage genou si besoin', duration: '10 min' },
            ],
          },
        ],
        tips: ['Bilan de la semaine : noter les sensations au genou', 'Week-end : repos actif (natation légère, marche possible)'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 2 – CONSTRUCTION DES BASES
  // ─────────────────────────────────────────────
  {
    number: 2,
    phase: 'réveil',
    phaseLabel: 'Phase 1 – Réveil musculaire',
    title: 'Construction des bases',
    objective: 'Augmenter les volumes progressivement. Introduction du trot léger si le genou est asymptomatique.',
    volumeHours: 5,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier – Introduction trot léger',
        duration: '55 min',
        intensity: 'faible',
        objective: 'Première mise en charge de course si genou OK',
        kneeLoad: 'modéré',
        warnings: ['Trot uniquement si aucune douleur semaine 1', 'Alternance marche/trot – ne pas forcer'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Marche active + mobilité', duration: '8 min' },
              { name: 'Squat léger (mobilité)', sets: 2, reps: '10' },
            ],
          },
          {
            title: 'Cardio progressif',
            emoji: '🏃',
            exercises: [
              { name: 'Marche rapide', duration: '5 min' },
              { name: 'Trot très léger (5–6 km/h)', duration: '5 min', note: 'Si genou OK', kneeWarning: true },
              { name: 'Marche rapide', duration: '3 min' },
              { name: 'Trot léger', duration: '5 min', kneeWarning: true },
              { name: 'Marche', duration: '3 min' },
              { name: 'Trot léger', duration: '5 min', kneeWarning: true },
              { name: 'Vélo ou marche si pas de course possible', duration: '30 min', note: 'Alternative au trot' },
            ],
          },
          {
            title: 'Proprioception',
            emoji: '⚖️',
            exercises: [
              { name: 'Équilibre unipodal + lancers balle légère', sets: 3, duration: '30s', note: 'Déstabilisation contrôlée', kneeWarning: true },
              { name: 'Pas chassés latéraux lents', sets: 3, reps: '30m', rest: '45s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements globaux', duration: '12 min' },
              { name: 'Glaçage si besoin', duration: '10 min' },
            ],
          },
        ],
        tips: ['Écoute du genou : sensations légères OK, douleur = stop', 'Fréquence cardiaque cible : 115–135 bpm'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force haut du corps – Progression',
        duration: '60 min',
        intensity: 'modérée',
        objective: 'Augmenter le volume et la charge haut du corps',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Mobilité épaules & poignets', duration: '5 min' },
              { name: 'Pompes larges légères', sets: 2, reps: '10' },
            ],
          },
          {
            title: 'Poussée',
            emoji: '💪',
            exercises: [
              { name: 'Pompes classiques', sets: 4, reps: '12', rest: '60s' },
              { name: 'Pompes diamant', sets: 3, reps: '10', rest: '60s', note: 'Triceps' },
              { name: 'Développé haltères (ou militaire barre)', sets: 4, reps: '10', rest: '75s' },
              { name: 'Dips banc (ou chaise)', sets: 3, reps: '12', rest: '60s' },
            ],
          },
          {
            title: 'Traction & Dos',
            emoji: '🏋️',
            exercises: [
              { name: 'Tractions prise large (ou tirage poulie)', sets: 4, reps: '8', rest: '90s' },
              { name: 'Rowing haltères', sets: 3, reps: '12 par bras', rest: '60s' },
              { name: 'Face pulls (élastique)', sets: 3, reps: '15', rest: '45s', note: 'Coiffes rotateurs' },
            ],
          },
          {
            title: 'Core renforcé',
            emoji: '🔩',
            exercises: [
              { name: 'Planche frontale', sets: 4, duration: '40s', rest: '30s' },
              { name: 'Planche latérale', sets: 3, duration: '30s par côté' },
              { name: 'Mountain climbers lents', sets: 3, reps: '20', rest: '30s' },
              { name: 'Russian twists', sets: 3, reps: '20' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements pectoraux & dorsaux', duration: '10 min' },
            ],
          },
        ],
        tips: ['Augmenter la charge de 5–10% par rapport à S1 si mouvement maîtrisé'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Vitesse – Technique de course & Accélérations courtes',
        duration: '55 min',
        intensity: 'modérée',
        objective: 'Travailler la mécanique de course et les accélérations linéaires courtes',
        kneeLoad: 'modéré',
        warnings: ['Accélérations en ligne droite uniquement', 'Pas de pivot, pas de changement de direction brusque'],
        blocks: [
          {
            title: 'Échauffement dynamique',
            emoji: '🔥',
            exercises: [
              { name: 'Trot léger', duration: '5 min' },
              { name: 'Talons-fesses', sets: 3, reps: '20m' },
              { name: 'Montées de genoux (skipping A)', sets: 3, reps: '20m' },
              { name: 'Foulées bondissantes légères', sets: 3, reps: '20m' },
            ],
          },
          {
            title: 'Technique de course',
            emoji: '📐',
            exercises: [
              { name: 'Travail de posture debout (alignement)', duration: '5 min', note: 'Tête, épaules, hanches, pieds alignés' },
              { name: 'Montées de genoux haute fréquence', sets: 4, reps: '10m', rest: '45s' },
              { name: 'Course haute avec élévation genoux', sets: 4, reps: '20m', rest: '60s' },
            ],
          },
          {
            title: 'Accélérations progressives',
            emoji: '⚡',
            exercises: [
              { name: 'Accélérations 10m (intensité 60%)', sets: 6, reps: '10m', rest: '60s', kneeWarning: true },
              { name: 'Accélérations 15m (intensité 70%)', sets: 5, reps: '15m', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Coordination échelle',
            emoji: '🪜',
            exercises: [
              { name: '2 pieds dans chaque case', sets: 3, reps: 'Longueur', rest: '45s' },
              { name: 'Pas latéraux', sets: 3, reps: 'Longueur', rest: '45s' },
              { name: 'Icky shuffle lent', sets: 3, reps: 'Longueur', rest: '60s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot récupération', duration: '5 min' },
              { name: 'Étirements & foam roller', duration: '10 min' },
            ],
          },
        ],
        tips: ['Accélérations = 60–70% de l\'effort maximal', 'Récupération complète entre les répétitions'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force MI – Progression charges',
        duration: '60 min',
        intensity: 'modérée',
        objective: 'Augmenter progressivement la sollicitation des membres inférieurs',
        kneeLoad: 'modéré',
        warnings: ['Squat jusqu\'à 90° max – surveiller la douleur'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo résistance faible', duration: '10 min' },
              { name: 'Fentes marchées légères', sets: 2, reps: '10 par jambe' },
            ],
          },
          {
            title: 'Force MI principale',
            emoji: '🦵',
            exercises: [
              { name: 'Squat au poids du corps', sets: 4, reps: '12', rest: '60s', note: 'Amplitude 90°, genoux dans l\'axe des pieds', kneeWarning: true },
              { name: 'Fentes avant', sets: 3, reps: '12 par jambe', rest: '60s', kneeWarning: true },
              { name: 'Step-up marche (boîte 20cm)', sets: 3, reps: '12 par jambe', rest: '60s', kneeWarning: true },
              { name: 'Leg curl (charge légère-modérée)', sets: 3, reps: '15', rest: '60s' },
              { name: 'Presse à cuisses (si disponible)', sets: 3, reps: '15', rest: '75s', note: 'Charge légère, amplitude contrôlée' },
            ],
          },
          {
            title: 'Fessiers & Stabilisation',
            emoji: '🔩',
            exercises: [
              { name: 'Hip thrust (barre légère ou poids corps)', sets: 4, reps: '15', rest: '60s' },
              { name: 'Romanian deadlift léger (haltères)', sets: 3, reps: '12', rest: '75s', note: 'Mise en charge progressive', kneeWarning: true },
              { name: 'Relevés mollets unijambistes', sets: 3, reps: '15 par jambe', rest: '45s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements MI complets', duration: '12 min' },
              { name: 'Foam roller', duration: '5 min' },
            ],
          },
        ],
        tips: ['Augmenter légèrement la charge vs semaine 1', 'Technique > charge'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Circuit puissance légère + Foncier',
        duration: '55 min',
        intensity: 'modérée',
        objective: 'Combiner endurance et puissance légère pour stimuler l\'adaptation',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Trot léger', duration: '8 min' },
              { name: 'Mobilité dynamique', duration: '3 min' },
            ],
          },
          {
            title: 'Circuit puissance (3 tours, 30s repos entre exercices)',
            emoji: '⚡',
            exercises: [
              { name: 'Pompes explosives (sans clap)', reps: '8', rest: '30s' },
              { name: 'Squat sauté (atterrissage souple)', reps: '8', note: 'Genou fléchi à la réception', kneeWarning: true },
              { name: 'Medicine ball chest pass (ou pompes explo)', reps: '8' },
              { name: 'Foulées bondissantes courtes', reps: '10m' },
              { name: 'Planche dynamique (alternance bras)', reps: '10' },
            ],
          },
          {
            title: 'Foncier fin de semaine',
            emoji: '🏃',
            exercises: [
              { name: 'Footing continu léger', duration: '15 min', note: '65% FCmax', kneeWarning: true },
            ],
          },
          {
            title: 'Récupération',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements globaux', duration: '12 min' },
              { name: 'Bilan semaine 2 – sensations genou', duration: '5 min', note: 'Évaluer la progression' },
            ],
          },
        ],
        tips: ['Atterrissages : amorties, genoux fléchis', 'Si genou réagit bien → semaine 3 peut être plus chargée'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 3 – ACCÉLÉRATION
  // ─────────────────────────────────────────────
  {
    number: 3,
    phase: 'construction',
    phaseLabel: 'Phase 2 – Construction',
    title: 'Montée en charge',
    objective: 'Passage à la course continue. Développement de la force et de la vitesse linéaire. Genou plus sollicité mais toujours protégé.',
    volumeHours: 6,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier – Course continue 20–25 min',
        duration: '60 min',
        intensity: 'modérée',
        objective: 'Développer l\'endurance aérobie de base en course continue',
        kneeLoad: 'modéré',
        warnings: ['Si douleur persiste → rester sur marche/vélo'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Marche rapide + mobilité', duration: '8 min' },
              { name: 'Éducatifs course', duration: '5 min' },
            ],
          },
          {
            title: 'Course principale',
            emoji: '🏃',
            exercises: [
              { name: 'Footing continu', duration: '22 min', note: '65–70% FCmax (130–145 bpm)', kneeWarning: true },
            ],
          },
          {
            title: 'Proprioception avancée',
            emoji: '⚖️',
            exercises: [
              { name: 'Lunges avec rotation tronc', sets: 3, reps: '10 par jambe', note: 'Sans torsion genou', kneeWarning: true },
              { name: 'Équilibre unipodal + réception légère', sets: 3, duration: '30s', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Marche récupération', duration: '5 min' },
              { name: 'Étirements + glaçage', duration: '12 min' },
            ],
          },
        ],
        tips: ['Test : 20 min sans douleur = cap franchi !', 'Pace : conversation possible'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force haut du corps – Intensité accrue',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Développer la force maximale sur les chaînes poussée/traction',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Mobilité dynamique + pompes légères', duration: '8 min' },
            ],
          },
          {
            title: 'Poussée (lourd)',
            emoji: '💪',
            exercises: [
              { name: 'Développé couché haltères', sets: 4, reps: '8', rest: '90s', note: 'Charge : 60–65% RM estimé' },
              { name: 'Pompes lestées (sac à dos)', sets: 3, reps: '10', rest: '75s' },
              { name: 'Développé militaire barre', sets: 4, reps: '8', rest: '90s' },
            ],
          },
          {
            title: 'Traction (lourd)',
            emoji: '🏋️',
            exercises: [
              { name: 'Tractions strictes', sets: 4, reps: '8–10', rest: '90s' },
              { name: 'Rowing barre penché', sets: 4, reps: '8', rest: '90s' },
              { name: 'Tirage nuque prise large', sets: 3, reps: '10', rest: '75s' },
            ],
          },
          {
            title: 'Core puissance',
            emoji: '🔩',
            exercises: [
              { name: 'Planche avec mouvement bras', sets: 4, duration: '40s' },
              { name: 'Rollout AB wheel (ou barre)', sets: 3, reps: '8' },
              { name: 'Hanging knee raises (si barre)', sets: 3, reps: '15' },
            ],
          },
        ],
        tips: ['Progression sur développé couché obligatoire S3', 'Temps sous tension : descente 3s, montée rapide'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Vitesse linéaire – Sprints 20–30m',
        duration: '60 min',
        intensity: 'élevée',
        objective: 'Développer la vitesse maximale sur des distances courtes en ligne droite',
        kneeLoad: 'modéré',
        warnings: ['Ligne droite uniquement', 'Récupération complète entre les sprints (90s–2min)'],
        blocks: [
          {
            title: 'Échauffement progressif',
            emoji: '🔥',
            exercises: [
              { name: 'Trot 5 min', duration: '5 min' },
              { name: 'Éducatifs (talons-fesses, genoux hauts, foulées)', duration: '10 min' },
              { name: 'Accélérations progressives 20m (60-70-80%)', sets: 3, reps: '20m' },
            ],
          },
          {
            title: 'Sprints principaux',
            emoji: '⚡',
            exercises: [
              { name: 'Sprint 20m départ arrêté', sets: 8, reps: '20m', rest: '90s', kneeWarning: true },
              { name: 'Sprint 30m départ arrêté', sets: 6, reps: '30m', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Travail explosivité départ',
            emoji: '🚀',
            exercises: [
              { name: 'Départ couché-sol (sprint 10m)', sets: 5, reps: '10m', rest: '90s' },
              { name: 'Départ de dos (demi-tour + sprint 10m)', sets: 5, reps: '10m', rest: '90s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot léger', duration: '8 min' },
              { name: 'Étirements MI + foam roller', duration: '10 min' },
            ],
          },
        ],
        tips: ['Récupération = clé pour vitesse maximale', 'Si fatigue : réduire le nombre de répétitions'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force MI – Charges progressives',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Développer la force des membres inférieurs avec charges croissantes',
        kneeLoad: 'élevé',
        warnings: ['Squat avec barre : surveiller la technique soigneusement', 'Accompagnateur recommandé pour les charges lourdes'],
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo + mobilité', duration: '10 min' },
              { name: 'Squat vide (50%)', sets: 2, reps: '10' },
            ],
          },
          {
            title: 'Force principale',
            emoji: '🦵',
            exercises: [
              { name: 'Squat barre (50–60% RM)', sets: 4, reps: '8', rest: '2 min', note: 'Full range si genou OK, sinon 90°', kneeWarning: true },
              { name: 'Fentes marchées avec haltères', sets: 3, reps: '12 par jambe', rest: '90s', kneeWarning: true },
              { name: 'Romanian deadlift (charge modérée)', sets: 4, reps: '10', rest: '90s' },
              { name: 'Presse cuisses (modérée)', sets: 3, reps: '12', rest: '75s', kneeWarning: true },
            ],
          },
          {
            title: 'Puissance MI',
            emoji: '⚡',
            exercises: [
              { name: 'Box jump atterrissage souple (boîte 30cm)', sets: 3, reps: '8', rest: '90s', note: 'Réception genoux fléchis, genou surveilli', kneeWarning: true },
              { name: 'Hip thrust barre', sets: 4, reps: '12', rest: '75s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements + foam roller MI', duration: '15 min' },
            ],
          },
        ],
        tips: ['Charge squat : 30–40 kg selon niveau', 'Box jump : atterrissage = phase la plus critique pour le genou'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Circuit puissance + Foncier développé',
        duration: '60 min',
        intensity: 'modérée',
        objective: 'Travailler la puissance corps entier et consolider l\'endurance',
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
              { name: 'Squat sauté (atterrissage souple)', reps: '10', kneeWarning: true },
              { name: 'Med ball slam', reps: '10' },
              { name: 'Sprint 20m', reps: '20m', kneeWarning: true },
              { name: 'Planche dynamique', duration: '30s' },
            ],
          },
          {
            title: 'Foncier',
            emoji: '🏃',
            exercises: [
              { name: 'Footing 20 min', duration: '20 min', note: '65–70% FCmax', kneeWarning: true },
            ],
          },
          {
            title: 'Récupération',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements complets', duration: '12 min' },
              { name: 'Glaçage si besoin', duration: '10 min' },
            ],
          },
        ],
        tips: ['Fin de S3 : bilan de progression (poids soulevés, distances sprint)'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 4 – INTENSIFICATION 1
  // ─────────────────────────────────────────────
  {
    number: 4,
    phase: 'construction',
    phaseLabel: 'Phase 2 – Construction',
    title: 'Intensification 1',
    objective: 'Augmenter les charges, la densité d\'entraînement et introduire les changements de direction simples.',
    volumeHours: 7,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier – Intervals légers 6×3 min',
        duration: '65 min',
        intensity: 'modérée',
        objective: 'Développer la VMA et l\'endurance intermittente',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Footing léger + éducatifs', duration: '12 min' },
            ],
          },
          {
            title: 'Intervals',
            emoji: '📊',
            exercises: [
              { name: 'Interval 3 min à 75–80% FCmax', sets: 6, reps: '3 min effort / 2 min récup', note: 'Récupération = trot lent', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot + marche', duration: '8 min' },
              { name: 'Étirements', duration: '10 min' },
            ],
          },
        ],
        tips: ['FC pendant effort : 150–165 bpm', 'Récupération complète avant semaine suivante si fatigue'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force haut du corps + Puissance',
        duration: '70 min',
        intensity: 'élevée',
        objective: 'Associer force et puissance pour préparer les contacts rugby',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Activation épaules + mobilité', duration: '8 min' },
            ],
          },
          {
            title: 'Force (lourd)',
            emoji: '💪',
            exercises: [
              { name: 'Développé couché barre', sets: 5, reps: '5', rest: '2 min', note: '65–70% RM' },
              { name: 'Tractions lestées (ou stricts)', sets: 4, reps: '6–8', rest: '2 min' },
              { name: 'Rowing barre', sets: 4, reps: '8', rest: '90s' },
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
              { name: 'Ab rollout', sets: 3, reps: '10' },
              { name: 'L-sit (sur dips ou sol)', sets: 3, duration: '15s' },
            ],
          },
        ],
        tips: ['Complexes force-puissance = transfert rugbystique direct'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Vitesse + Changements de direction simples',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Introduction des changements de direction à faible amplitude',
        kneeLoad: 'modéré',
        warnings: ['Virages larges uniquement (>90°)', 'Pas de pivot, appui progressif'],
        blocks: [
          {
            title: 'Échauffement dynamique',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs', duration: '12 min' },
              { name: 'Accélérations progressives 20m', sets: 3, reps: '20m' },
            ],
          },
          {
            title: 'Sprints principaux',
            emoji: '⚡',
            exercises: [
              { name: 'Sprint 30m départ arrêté', sets: 8, reps: '30m', rest: '2 min', kneeWarning: true },
              { name: 'Sprint 40m', sets: 6, reps: '40m', rest: '2 min 30', kneeWarning: true },
            ],
          },
          {
            title: 'Changements direction (progressif)',
            emoji: '↩️',
            exercises: [
              { name: 'L-Drill simplifié (virage large 135°)', sets: 6, reps: '1 rep', rest: '90s', note: 'Virage orienté côté sain en premier', kneeWarning: true },
              { name: 'Shuttle run 5-10-5 (côtés)', sets: 5, reps: '1 rep', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot 8 min + étirements', duration: '18 min' },
            ],
          },
        ],
        tips: ['Changements direction : appui talon-orteil (jambe extérieure)', 'Stop immédiat si instabilité ressentie'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force MI + Puissance',
        duration: '70 min',
        intensity: 'élevée',
        objective: 'Développer la force et la puissance des membres inférieurs',
        kneeLoad: 'élevé',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo + squat léger progressif', duration: '12 min' },
            ],
          },
          {
            title: 'Force MI (lourd)',
            emoji: '🦵',
            exercises: [
              { name: 'Squat barre (60–65% RM)', sets: 4, reps: '6', rest: '2 min 30', kneeWarning: true },
              { name: 'Romanian deadlift barre', sets: 4, reps: '8', rest: '2 min' },
              { name: 'Fentes bulgares (haltères)', sets: 3, reps: '10 par jambe', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Puissance MI',
            emoji: '⚡',
            exercises: [
              { name: 'Complexe : Squat 4 reps lourd + Box jump 4 reps', sets: 4, reps: '4+4', rest: '2 min', kneeWarning: true },
              { name: 'Foulées bondissantes (10m)', sets: 4, reps: '10m', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Accessoires',
            emoji: '🔩',
            exercises: [
              { name: 'Hip thrust lourd', sets: 4, reps: '10', rest: '90s' },
              { name: 'Mollets unilatéraux', sets: 4, reps: '15 par jambe' },
            ],
          },
        ],
        tips: ['Complexes force-puissance = effet post-activation potentiation (PAP)', 'Repos adapté = 2–3 min après le squat lourd'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Sprint + Conditioning rugby',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Simuler les efforts intermittents du rugby',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs complets', duration: '12 min' },
            ],
          },
          {
            title: 'Circuit conditioning (4 tours, 2 min repos entre tours)',
            emoji: '🏉',
            exercises: [
              { name: 'Sprint 40m', reps: '40m', rest: '1 min', kneeWarning: true },
              { name: 'Pompes explosives', reps: '10' },
              { name: 'Squat sauté', reps: '10', kneeWarning: true },
              { name: 'Montées de genoux 15m A/R', reps: '15m' },
              { name: 'Med ball chest pass', reps: '8' },
            ],
          },
          {
            title: 'Foncier récupération',
            emoji: '🏃',
            exercises: [
              { name: 'Footing 15 min', duration: '15 min', note: '65% FCmax' },
            ],
          },
          {
            title: 'Récupération',
            emoji: '🧘',
            exercises: [
              { name: 'Étirements + glaçage genou', duration: '15 min' },
            ],
          },
        ],
        tips: ['Fin S4 : évaluer la progression sur les temps de sprint 30m'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 5 – DÉVELOPPEMENT SPÉCIFIQUE
  // ─────────────────────────────────────────────
  {
    number: 5,
    phase: 'performance',
    phaseLabel: 'Phase 3 – Performance',
    title: 'Développement spécifique rugby',
    objective: 'Entraînements intensifs spécifiques rugby. Vitesse maximale, force max, VMA, et introduction du contact léger.',
    volumeHours: 8,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier / VMA – Intervals 400m',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Développer la VMA et l\'endurance intermittente spécifique rugby',
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
            title: 'Fartlek ou intervals 400m',
            emoji: '📊',
            exercises: [
              { name: 'Fartlek 35 min', duration: '35 min', note: 'Alternance : 2min effort 80% / 1min récup 60%', kneeWarning: true },
              { name: 'Ou 8×400m à 85% VMA', sets: 8, reps: '400m', rest: '1 min 30', kneeWarning: true },
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
        tips: ['FC effort : 160–175 bpm', 'Si Fartlek : inclure des phases sprint 10s'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force maximale haut du corps',
        duration: '70 min',
        intensity: 'maximale',
        objective: 'Atteindre des charges maximales sur les mouvements fondamentaux',
        kneeLoad: 'léger',
        blocks: [
          {
            title: 'Échauffement activation',
            emoji: '🔥',
            exercises: [
              { name: 'Mobilité + pompes progressives', duration: '10 min' },
            ],
          },
          {
            title: 'Force max (5×5)',
            emoji: '💪',
            exercises: [
              { name: 'Squat (poids du corps pour haut du corps → Développé couché barre)', sets: 5, reps: '5', rest: '2 min 30', note: '70–75% RM – 5×5 méthode' },
              { name: 'Tractions lestées', sets: 5, reps: '5', rest: '2 min 30' },
              { name: 'Développé militaire barre', sets: 5, reps: '5', rest: '2 min' },
            ],
          },
          {
            title: 'Accessoires',
            emoji: '🏋️',
            exercises: [
              { name: 'Dips lestés', sets: 3, reps: '8', rest: '90s' },
              { name: 'Curl biceps haltères', sets: 3, reps: '10', rest: '60s' },
              { name: 'Face pulls + Shrugs', sets: 3, reps: '15', rest: '45s' },
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
        ],
        tips: ['5×5 = protocole optimal force maximale', 'Repos suffisant entre séries (2–3 min)'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Vitesse maximale + Agilité rugby',
        duration: '70 min',
        intensity: 'maximale',
        objective: 'Développer la vitesse maximale et l\'agilité spécifique rugby avec ballon',
        kneeLoad: 'modéré',
        warnings: ['Changements de direction à vitesse élevée : superviser la technique d\'appui'],
        blocks: [
          {
            title: 'Échauffement complet',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs + accélérations prog', duration: '15 min' },
            ],
          },
          {
            title: 'Vitesse maximale',
            emoji: '⚡',
            exercises: [
              { name: 'Sprint 40m départ arrêté', sets: 10, reps: '40m', rest: '2 min 30', kneeWarning: true },
            ],
          },
          {
            title: 'Agilité rugby',
            emoji: '🏉',
            exercises: [
              { name: 'T-drill (4 cônes en T)', sets: 6, reps: '1 rep', rest: '90s', note: 'Virages maîtrisés', kneeWarning: true },
              { name: 'Zig-zag cônes (5m espacement)', sets: 6, reps: '20m', rest: '90s', kneeWarning: true },
              { name: 'Départ balle en main (sprint 20m)', sets: 5, reps: '20m', rest: '90s' },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot + marche + foam roller', duration: '15 min' },
            ],
          },
        ],
        tips: ['T-drill : temps cible <10s pour avants, <9.5s pour arrières', 'Hydratation ++'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Force-Puissance MI – Complexes',
        duration: '75 min',
        intensity: 'maximale',
        objective: 'Pics de force + développement de la puissance explosive',
        kneeLoad: 'élevé',
        blocks: [
          {
            title: 'Échauffement spécifique',
            emoji: '🔥',
            exercises: [
              { name: 'Vélo + squat barre vide', duration: '12 min' },
              { name: 'Série activation PAP : Squat 60% × 3', sets: 2, reps: '3' },
            ],
          },
          {
            title: 'Force-Puissance (complexes)',
            emoji: '⚡',
            exercises: [
              { name: 'Complexe 1 : Squat lourd 3 reps (70–75%) → Box jump 4 reps', sets: 4, reps: '3+4', rest: '2 min 30', kneeWarning: true },
              { name: 'Complexe 2 : Romanian DL lourd 4 reps → Foulées bondissantes 10m', sets: 4, reps: '4+10m', rest: '2 min' },
              { name: 'Power clean léger (ou Clean pull si débutant)', sets: 3, reps: '5', rest: '2 min', note: 'Alternative : saut avec barre légère (30kg max)' },
            ],
          },
          {
            title: 'Accessoires',
            emoji: '🔩',
            exercises: [
              { name: 'Hip thrust barre lourd', sets: 4, reps: '8', rest: '90s' },
              { name: 'Leg press', sets: 3, reps: '10', rest: '75s', kneeWarning: true },
              { name: 'Nordic curl (excentrique ischio)', sets: 3, reps: '6', rest: '2 min', note: 'Prévention blessure' },
            ],
          },
        ],
        tips: ['PAP (post-activation potentiation) : attendre 3–5 min entre le soulevé lourd et le jump', 'Nordic curls = assurance anti-claquage ischios'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Simulation séance rugby',
        duration: '75 min',
        intensity: 'élevée',
        objective: 'Reproduire les efforts d\'un entraînement rugby (si club pas encore repris)',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Activation match',
            emoji: '🏉',
            exercises: [
              { name: 'Footing + éducatifs + sprints activation', duration: '15 min' },
            ],
          },
          {
            title: 'Conditioning rugby (4 blocs)',
            emoji: '⚡',
            exercises: [
              { name: 'Bloc 1 : 3×(sprint 30m + 10 pompes + 10 squats)', rest: '90s entre reps, 3min entre blocs' },
              { name: 'Bloc 2 : Shuttle run 10-20-30m ×5', rest: '2 min' },
              { name: 'Bloc 3 : Med ball circuit (chest, slam, rotation) ×10 chaque', rest: '90s' },
              { name: 'Bloc 4 : Sprint 40m ×6', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Récupération active',
            emoji: '🧘',
            exercises: [
              { name: 'Marche 10 min', duration: '10 min' },
              { name: 'Étirements complets', duration: '15 min' },
              { name: 'Glaçage genou + bilan S5', duration: '10 min' },
            ],
          },
        ],
        tips: ['Si reprise club d\'ici S5 : adapter le volume', 'Bilan S5 : peser les gains en force et chronométrer les sprints'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SEMAINE 6 – PIC DE FORME
  // ─────────────────────────────────────────────
  {
    number: 6,
    phase: 'performance',
    phaseLabel: 'Phase 3 – Performance',
    title: 'Pic de forme – Retour au jeu',
    objective: 'Affûtage final. Réduction légère du volume, maintien de l\'intensité. Préparation au retour en compétition.',
    volumeHours: 7,
    sessions: [
      {
        day: 'Lundi',
        dayShort: 'LUN',
        type: 'foncier',
        title: 'Foncier entretien + Intervals courts',
        duration: '60 min',
        intensity: 'élevée',
        objective: 'Maintenir la capacité aérobie en réduisant légèrement le volume',
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
            title: 'Foncier principal',
            emoji: '🏃',
            exercises: [
              { name: 'Footing 25 min', duration: '25 min', note: '70–75% FCmax', kneeWarning: true },
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
        tips: ['Semaine 6 = affûtage : moins de volume, même intensité'],
      },
      {
        day: 'Mardi',
        dayShort: 'MAR',
        type: 'force-haut',
        title: 'Force maintenance haut du corps',
        duration: '60 min',
        intensity: 'élevée',
        objective: 'Maintenir les gains de force sans accumuler de fatigue',
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
            title: 'Force maintenance (volume réduit)',
            emoji: '💪',
            exercises: [
              { name: 'Développé couché barre', sets: 4, reps: '3', rest: '2 min', note: '75–80% RM – maintien pic de force' },
              { name: 'Tractions lestées', sets: 4, reps: '3–5', rest: '2 min' },
              { name: 'Développé militaire', sets: 3, reps: '5', rest: '90s' },
            ],
          },
          {
            title: 'Puissance',
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
        tips: ['Volume -30% vs S5 mais intensité = pareille', 'Récupération prioritaire'],
      },
      {
        day: 'Mercredi',
        dayShort: 'MER',
        type: 'vitesse',
        title: 'Vitesse maximale – Pic',
        duration: '60 min',
        intensity: 'maximale',
        objective: 'Exprimer la vitesse maximale acquise sur 6 semaines',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Échauffement premium',
            emoji: '🔥',
            exercises: [
              { name: 'Trot + éducatifs + accélérations progressives (60-70-80-90%)', duration: '18 min' },
            ],
          },
          {
            title: 'Sprints vitesse max',
            emoji: '⚡',
            exercises: [
              { name: 'Sprint 40m (récupération complète)', sets: 10, reps: '40m', rest: '3 min', note: 'MAXIMALE : objectif meilleur temps', kneeWarning: true },
            ],
          },
          {
            title: 'Agilité de match',
            emoji: '🏉',
            exercises: [
              { name: 'Départ sur signal (réaction)', sets: 8, reps: '20m', rest: '90s' },
              { name: 'Changement direction sur signal', sets: 5, reps: '1 rep', rest: '90s', kneeWarning: true },
            ],
          },
          {
            title: 'Retour au calme',
            emoji: '🧘',
            exercises: [
              { name: 'Trot récup + foam roller', duration: '12 min' },
            ],
          },
        ],
        tips: ['Chronométrer les sprints 40m : mesurer la progression totale sur 6 semaines'],
      },
      {
        day: 'Jeudi',
        dayShort: 'JEU',
        type: 'force-bas',
        title: 'Puissance intégrée MI',
        duration: '65 min',
        intensity: 'élevée',
        objective: 'Exprimer la puissance acquise, préparer le retour au contact',
        kneeLoad: 'élevé',
        blocks: [
          {
            title: 'Échauffement',
            emoji: '🔥',
            exercises: [
              { name: 'Activation PAP + squat vide', duration: '12 min' },
            ],
          },
          {
            title: 'Force pic',
            emoji: '🦵',
            exercises: [
              { name: 'Squat barre (75–80% RM)', sets: 4, reps: '3', rest: '3 min', kneeWarning: true },
              { name: 'Romanian DL lourd', sets: 3, reps: '5', rest: '2 min' },
            ],
          },
          {
            title: 'Puissance explosive',
            emoji: '⚡',
            exercises: [
              { name: 'Box jump maximum (hauteur max testée)', sets: 4, reps: '5', rest: '2 min', kneeWarning: true },
              { name: 'Foulées bondissantes maximales', sets: 4, reps: '30m', rest: '2 min', kneeWarning: true },
              { name: 'Sprint 20m avec résistance (élastique)', sets: 5, reps: '20m', rest: '90s' },
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
        tips: ['Mesurer la hauteur de box jump S1 vs S6 : visualiser la progression'],
      },
      {
        day: 'Vendredi',
        dayShort: 'VEN',
        type: 'puissance',
        title: 'Séance type match – Retour au jeu',
        duration: '75 min',
        intensity: 'maximale',
        objective: 'Simulation complète d\'une séance d\'entraînement rugby. Prêt pour la reprise !',
        kneeLoad: 'modéré',
        blocks: [
          {
            title: 'Activation pré-match',
            emoji: '🏉',
            exercises: [
              { name: 'Footing + éducatifs + sprints activation', duration: '15 min' },
              { name: 'Contacts épaule légère (avec partenaire)', sets: 3, reps: '5 contacts', note: 'Si disponible et autorisé par kiné', kneeWarning: true },
            ],
          },
          {
            title: 'Jeu conditionné rugby',
            emoji: '⚡',
            exercises: [
              { name: 'Exercice passe en mouvement', duration: '10 min' },
              { name: 'Touches courtes avec sprint', sets: 6, reps: '1 action', rest: '90s' },
              { name: 'Jeu au pied + récupération balle', duration: '10 min' },
              { name: 'Sprint d\'appui + soutien (3×3)', sets: 4, reps: '1 sequence', rest: '2 min', kneeWarning: true },
            ],
          },
          {
            title: 'Bilan des 6 semaines',
            emoji: '🏆',
            exercises: [
              { name: 'Test sprint 40m chronométré', sets: 2, reps: '40m', rest: 'Récup complète', kneeWarning: true },
              { name: 'Test box jump (meilleure hauteur)', sets: 3, reps: '1 saut max', kneeWarning: true },
              { name: 'Bilan subjectif : genou, forme, confiance', duration: '5 min' },
            ],
          },
          {
            title: 'Récupération finale',
            emoji: '🧘',
            exercises: [
              { name: 'Marche + étirements complets', duration: '15 min' },
              { name: 'Glaçage genou + récupération', duration: '15 min' },
            ],
          },
        ],
        tips: [
          'FÉLICITATIONS – 6 semaines complètes !',
          'Progression mesurable : sprints, charges, proprioception',
          'Reprendre contact avec le kiné pour validation retour terrain complet',
          'Maintenir renforcement spécifique genou même en reprise de compétition',
        ],
      },
    ],
  },
];

export const ATHLETE = {
  age: '15,5 ans',
  height: '1,84 m',
  weight: '76 kg',
  context: 'Retour post-opération réparation ménisque',
  goals: ['Foncier (endurance)', 'Vitesse', 'Force', 'Puissance'],
  weeks: 6,
  sessionsPerWeek: 5,
};

export const PHASES = [
  {
    phase: 'réveil',
    label: 'Phase 1 – Réveil musculaire',
    weeks: '1–2',
    color: 'emerald',
    description: 'Protection du genou, réactivation musculaire, proprioception et cardio sans impact.',
  },
  {
    phase: 'construction',
    label: 'Phase 2 – Construction',
    weeks: '3–4',
    color: 'amber',
    description: 'Course progressive, force croissante, vitesse linéaire, premiers changements de direction.',
  },
  {
    phase: 'performance',
    label: 'Phase 3 – Performance',
    weeks: '5–6',
    color: 'red',
    description: 'Charges maximales, vitesse maximale, VMA, simulation rugby, pic de forme.',
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
