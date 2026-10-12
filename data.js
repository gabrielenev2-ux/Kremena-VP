// data.js - ВЕЦ "Кремена - Тригорци"
const ACCESS_PIN = "kremena2026"; // Вашата парола за вход

const PROJECT_CONFIG = {
  name: "ВЕЦ «Кремена - Тригорци» (70 MW)",
  centerCoords: [43.565, 28.145], // Център около парка
  defaultZoom: 13
};

// Етапи на изграждане и техните цветове
const STATUS_COLORS = {
  "Планиран": "#94a3b8",            // Сиво
  "Изкопни работи": "#f59e0b",      // Оранжево
  "Армировка / Бетон": "#3b82f6",   // Синьо
  "Монтаж на турбина": "#8b5cf6",   // Лилаво
  "Завършен (Акт 14/15)": "#10b981",// Зелено
  "Бъдещо разширение": "#64748b"    // Тъмно сиво
};

const TURBINES_DATA = [
  // --- КЛОН 1 (Branch 1) ---
  {
    id: "T1",
    name: "Ветрогенератор T1",
    branch: "Клон 1",
    coords: [43.557739, 28.119453],
    overallStatus: "Армировка / Бетон",
    progress: 55,
    specs: { trafo: "1x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Армиране", grid: "Изкоп", turbine: "Очаква се" },
    timeline: [
      { date: "10.08.2026", title: "Изкоп завършен", note: "Нивото на подложен бетон е прието.", img: "" }
    ],
    video: null
  },
  {
    id: "T2",
    name: "Ветрогенератор T2",
    branch: "Клон 1",
    coords: [43.559733, 28.126353],
    overallStatus: "Изкопни работи",
    progress: 30,
    specs: { trafo: "1x 5.1 MVA", cable: "1x185/25 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "В насип", foundation: "Изкоп", grid: "В проект", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T5",
    name: "Ветрогенератор T5",
    branch: "Клон 1",
    coords: [43.563800, 28.134050],
    overallStatus: "Планиран",
    progress: 10,
    specs: { trafo: "1x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Трасиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T7",
    name: "Ветрогенератор T7",
    branch: "Клон 1",
    coords: [43.571536, 28.137017],
    overallStatus: "Планиран",
    progress: 5,
    specs: { trafo: "1x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "В процес", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T8",
    name: "Ветрогенератор T8",
    branch: "Клон 1",
    coords: [43.574708, 28.134431],
    overallStatus: "Планиран",
    progress: 5,
    specs: { trafo: "1x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Не е стартиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 2 (Branch 2) ---
  {
    id: "T4",
    name: "Ветрогенератор T4",
    branch: "Клон 2",
    coords: [43.564311, 28.142633],
    overallStatus: "Изкопни работи",
    progress: 35,
    specs: { trafo: "1x 5.1 MVA", cable: "1x95/16 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Уплътнена", foundation: "Изкоп", grid: "Трасе прокарано", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T9",
    name: "Ветрогенератор T9",
    branch: "Клон 2",
    coords: [43.568986, 28.147161],
    overallStatus: "Планиран",
    progress: 10,
    specs: { trafo: "1x 5.1 MVA", cable: "1x185/25 mm²", type: "3 inputs + 1 trafo" },
    stages: { road: "Трасиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 3 (Branch 3) ---
  {
    id: "T11",
    name: "Ветрогенератор T11",
    branch: "Клон 3",
    coords: [43.568867, 28.160269],
    overallStatus: "Планиран",
    progress: 10,
    specs: { trafo: "1x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Трасиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T12",
    name: "Ветрогенератор T12",
    branch: "Клон 3",
    coords: [43.563956, 28.163772],
    overallStatus: "Планиран",
    progress: 0,
    specs: { trafo: "1x 5.1 MVA", cable: "1x185/25 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Не е стартиран", pad: "Не е стартирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T13",
    name: "Ветрогенератор T13",
    branch: "Клон 3",
    coords: [43.561775, 28.145539],
    overallStatus: "Планиран",
    progress: 0,
    specs: { trafo: "1x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Не е стартиран", pad: "Не е стартирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 4 (Branch 4) ---
  {
    id: "T14",
    name: "Ветрогенератор T14",
    branch: "Клон 4",
    coords: [43.555614, 28.150214],
    overallStatus: "Армировка / Бетон",
    progress: 65,
    specs: { trafo: "1x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Кофриране и армиране", grid: "Кабел положен", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T15",
    name: "Ветрогенератор T15",
    branch: "Клон 4",
    coords: [43.548272, 28.153833],
    overallStatus: "Завършен (Акт 14/15)",
    progress: 90,
    specs: { trafo: "1x 5.1 MVA", cable: "1x185/25 mm²", type: "3 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Бетониран (Акт 14)", grid: "Положен кабел", turbine: "Очаква се" },
    timeline: [],
    video: null
  },
  {
    id: "T16",
    name: "Ветрогенератор T16",
    branch: "Клон 4",
    coords: [43.542703, 28.156458],
    overallStatus: "Завършен (Акт 14/15)",
    progress: 95,
    specs: { trafo: "1x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Бетониран, обратен насип", grid: "Кабелна линия готова", turbine: "Компоненти на площадка" },
    timeline: [],
    video: null
  },
  {
    id: "T19",
    name: "Ветрогенератор T19",
    branch: "Клон 4",
    coords: [43.553383, 28.161289],
    overallStatus: "Планиран",
    progress: 0,
    specs: { trafo: "1x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Не е стартиран", pad: "Не е стартирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 5 & 4a (Branch 5 & 4a) ---
  {
    id: "T18",
    name: "Ветрогенератор T18",
    branch: "Клон 5",
    coords: [43.557733, 28.167542],
    overallStatus: "Изкопни работи",
    progress: 40,
    specs: { trafo: "1x 5.1 MVA", cable: "1x95/16 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "В процес", foundation: "Изкоп", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T17",
    name: "Ветрогенератор T17",
    branch: "Клон 4a (Бъдещ)",
    coords: [43.550000, 28.160000], // временно близо до Т19, ще се уточни
    overallStatus: "Бъдещо разширение",
    progress: 0,
    specs: { trafo: "1x 5.1 MVA", cable: "1x95/16 mm²", type: "Бъдещо разширение" },
    stages: { road: "Проект", pad: "Проект", foundation: "Проект", grid: "Проект", turbine: "Проект" },
    timeline: [],
    video: null
  },

  // --- ПОДСТАНЦИЯ И BESS ---
  {
    id: "SUBSTATION",
    name: "Подстанция 33/110 kV",
    branch: "Централен възел",
    coords: [43.572781, 28.158119],
    overallStatus: "Армировка / Бетон",
    progress: 60,
    specs: { trafo: "2x Тр-ри 110/33kV", cable: "Шини 33kV, КРУ Siemens NXPLUS C", type: "Подстанция" },
    stages: { road: "Готов", pad: "Площадка готова", foundation: "Фундаменти готови", grid: "Свързаност 33kV в ход", turbine: "—" },
    timeline: [],
    video: null
  },
  {
    id: "BESS",
    name: "Батерийно стопанство (BESS)",
    branch: "Съхранение",
    coords: [43.571000, 28.156000],
    overallStatus: "Планиран",
    progress: 10,
    specs: { trafo: "Кабел 1x400/35 mm²", cable: "Към ПС 33/110kV", type: "BESS" },
    stages: { road: "Трасиран", pad: "Планирана", foundation: "Проект", grid: "Проект", turbine: "—" },
    timeline: [],
    video: null
  }
];
