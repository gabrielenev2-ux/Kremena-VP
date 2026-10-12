// data.js - Данни за проект ВЕЦ "Кремена - Тригорци" (70 MW)

const ACCESS_PIN = "kremena2026"; // Парола за достъп

const PROJECT_CONFIG = {
  name: "ВЕЦ «Кремена - Тригорци» (70 MW)",
  substationName: "Подстанция 33/110 kV",
  centerCoords: [43.6050, 28.1720], // Център на района на с. Кремена
  defaultZoom: 13
};

// Етапи на изграждане и техните цветове
const STATUS_COLORS = {
  "Планиран": "#94a3b8",      // Сиво
  "Изкоп": "#f59e0b",         // Оранжево
  "Армировка / Бетон": "#3b82f6", // Синьо
  "Монтаж турбина": "#8b5cf6", // Лилаво
  "Завършен / Акт 14/15": "#10b981", // Зелено
  "Бъдещо разширение": "#64748b" // Тъмно сиво
};

const TURBINES_DATA = [
  // --- КЛОН 1 (Branch 1) ---
  {
    id: "T1",
    name: "Ветрогенератор T1",
    branch: "Клон 1",
    coords: [43.332786, 28.071003],
    overallStatus: "Армировка / Бетон",
    progress: 55,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "В процес на армиране", grid: "Трасето е изкопано", turbine: "Не е доставена" },
    timeline: [
      { date: "10.08.2026", title: "Завършен изкоп", note: "Нивото на подложения бетон е одобрено.", img: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80" },
      { date: "25.08.2026", title: "Армиране на фундамент", note: "Полагане на долна скара.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" }
    ],
    video: null
  },
  {
    id: "T2",
    name: "Ветрогенератор T2",
    branch: "Клон 1",
    coords: [43.6330, 28.1480],
    overallStatus: "Изкоп",
    progress: 25,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x185/25 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "В насип", foundation: "Изкопни дейности", grid: "В проект", turbine: "Не е доставена" },
    timeline: [
      { date: "01.09.2026", title: "Начало на изкопни работи", note: "Геоложки контрол преминат успешно.", img: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80" }
    ],
    video: null
  },
  {
    id: "T5",
    name: "Ветрогенератор T5",
    branch: "Клон 1",
    coords: [43.6260, 28.1550],
    overallStatus: "Планиран",
    progress: 10,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Трасиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T7",
    name: "Ветрогенератор T7",
    branch: "Клон 1",
    coords: [43.6210, 28.1630],
    overallStatus: "Планиран",
    progress: 10,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "В процес", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T8",
    name: "Ветрогенератор T8",
    branch: "Клон 1",
    coords: [43.6240, 28.1720],
    overallStatus: "Планиран",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Не е стартиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 2 (Branch 2) ---
  {
    id: "T4",
    name: "Ветрогенератор T4",
    branch: "Клон 2",
    coords: [43.6180, 28.1520],
    overallStatus: "Изкоп",
    progress: 30,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Уплътнена", foundation: "Дълбок изкоп", grid: "Трасе прокарано", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T9",
    name: "Ветрогенератор T9",
    branch: "Клон 2",
    coords: [43.6120, 28.1650],
    overallStatus: "Планиран",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x185/25 mm²", type: "3 inputs + 1 trafo" },
    stages: { road: "Трасиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 3 (Branch 3) ---
  {
    id: "T11",
    name: "Ветрогенератор T11",
    branch: "Клон 3",
    coords: [43.6060, 28.1750],
    overallStatus: "Планиран",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Трасиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T12",
    name: "Ветрогенератор T12",
    branch: "Клон 3",
    coords: [43.6020, 28.1820],
    overallStatus: "Планиран",
    progress: 0,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x185/25 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Не е стартиран", pad: "Не е стартирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T13",
    name: "Ветрогенератор T13",
    branch: "Клон 3",
    coords: [43.6110, 28.1580],
    overallStatus: "Планиран",
    progress: 0,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Не е стартиран", pad: "Не е стартирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 4 (Branch 4) ---
  {
    id: "T14",
    name: "Ветрогенератор T14",
    branch: "Клон 4",
    coords: [43.6090, 28.1690],
    overallStatus: "Армировка / Бетон",
    progress: 60,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Кофриране и армиране", grid: "Кабел положен", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T15",
    name: "Ветрогенератор T15",
    branch: "Клон 4",
    coords: [43.6040, 28.1700],
    overallStatus: "Завършен / Акт 14/15",
    progress: 85,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x185/25 mm²", type: "3 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Бетониран (Акт 14 издаден)", grid: "Положен кабел", turbine: "Очаква се" },
    timeline: [
      { date: "05.09.2026", title: "Бетониране на фундамент", note: "Кубици бетон съгласно рецепта.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" }
    ],
    video: null
  },
  {
    id: "T16",
    name: "Ветрогенератор T16",
    branch: "Клон 4",
    coords: [43.5990, 28.1730],
    overallStatus: "Завършен / Акт 14/15",
    progress: 90,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Бетониран, обратен насип", grid: "Кабелна линия готова", turbine: "Компоненти на площадка" },
    timeline: [
      { date: "15.08.2026", title: "Изкоп фундамент T16", note: "Проверка на почвения пласт.", img: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80" },
      { date: "28.08.2026", title: "Бетониране на T16", note: "Непрекъснат залив съгласно протокол.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" }
    ],
    video: null
  },
  {
    id: "T19",
    name: "Ветрогенератор T19",
    branch: "Клон 4",
    coords: [43.5950, 28.1760],
    overallStatus: "Планиран",
    progress: 0,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Не е стартиран", pad: "Не е стартирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 4a / 5 (Branch 4a / 5) ---
  {
    id: "T18",
    name: "Ветрогенератор T18",
    branch: "Клон 5",
    coords: [43.5910, 28.1810],
    overallStatus: "Изкоп",
    progress: 35,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "В процес", foundation: "Изкоп", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T17",
    name: "Ветрогенератор T17 (Бъдещо)",
    branch: "Клон 4a (Бъдещ)",
    coords: [43.5870, 28.1870],
    overallStatus: "Бъдещо разширение",
    progress: 0,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "Бъдещо разширение" },
    stages: { road: "Проект", pad: "Проект", foundation: "Проект", grid: "Проект", turbine: "Проект" },
    timeline: [],
    video: null
  },

  // --- ОБЩИ ОБЕКТИ ---
  {
    id: "SUBSTATION",
    name: "Подстанция 33/110 kV",
    branch: "Инфраструктура",
    coords: [43.6075, 28.1670],
    overallStatus: "Армировка / Бетон",
    progress: 50,
    specs: { trafo: "2x Тр-ри 110/33kV", cable: "Шини 33kV, КРУ NXPLUS C", type: "Главна подстанция" },
    stages: { road: "Готов", pad: "Сграден кофраж", foundation: "Излети основи", grid: "Трансформатори в доставка", turbine: "—" },
    timeline: [
      { date: "01.07.2026", title: "Изкоп за фундаменти на силови трансформатори", note: "Контрол на нивата.", img: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80" }
    ],
    video: null
  },
  {
    id: "BESS",
    name: "Батерийно стопанство (BESS)",
    branch: "Инфраструктура",
    coords: [43.6065, 28.1640],
    overallStatus: "Планиран",
    progress: 10,
    specs: { trafo: "Кабелна линия 1x400/35", cable: "Връзка към ПС 33/110kV", type: "Съхранение на енергия" },
    stages: { road: "Трасиран", pad: "Планирана", foundation: "Проект", grid: "Проект", turbine: "—" },
    timeline: [],
    video: null
  }
];
