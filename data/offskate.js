export const efforts = {
  stamina: {
    fr: 'Endurance',
    en: 'Stamina',
    kr: '체력',
    key: 'stamina',
  },
  strength: {
    fr: 'Force',
    en: 'Strength',
    kr: '힘',
    key: 'strength',
  },
  flexibility: {
    fr: 'Souplesse',
    en: 'Flexibility',
    kr: '유연성',
    key: 'flexibility',
  },

  agility: {
    fr: 'Agilité',
    en: 'Agility',
    kr: '민첩성',
    key: 'agility',
  },
}

export const bodyParts = {
  tigh: {
    fr: 'Cuisses',
    en: 'Tighs',
    kr: '허벅지',
    key: 'tigh',
  },
  back: {
    fr: 'Dos',
    en: 'Back',
    kr: '등',
    key: 'back',
  },
  arms: {
    fr: 'Bras',
    en: 'Arms',
    kr: '팔',
    key: 'arms',
  },
  abs: {
    fr: 'Abdominaux',
    en: 'Abs',
    kr: '복근',
    key: 'abs',
  },
  shoulders: {
    fr: 'Epaules',
    en: 'Shoulders',
    kr: '어깨',
    key: 'shoulders',
  },
  calves: {
    fr: 'Mollets',
    en: 'Calves',
    kr: '종아리',
    key: 'calves',
  },
  glutes: {
    fr: 'Fessiers',
    en: 'Glutes',
    kr: '엉덩이',
    key: 'glutes',
  },
  chest: {
    fr: 'Pectoraux',
    en: 'Chest',
    kr: '가슴',
    key: 'chest',
  },
  neck: {
    fr: 'Cou',
    en: 'Neck',
    kr: '목',
    key: 'neck',
  },
}

export const offskate = [
  {
    id: 'squat-jump',
    name: {
      fr: 'Squat Jump',
      en: 'Squat Jump',
      kr: '스쿼트 점프',
    },
    description: {
      fr: "Squattez puis sautez en l'air en tendant les jambes.",
      en: 'Squat down then jump in the air while extending your legs.',
      kr: '다리를 뻗고 하늘로 뛰어 오르세요.',
    },
    body: [bodyParts.tigh, bodyParts.glutes],
    effort: [efforts.strength, efforts.power],
    baseDuration: 30,
    bilateral: false,

    image: '/sources/characters/sagwa.svg',
  },
]
