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
    coords: [43.557739, 28.119453],
    overallStatus: "Изкопни работи",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: " Не е направена", grid: "Трасето е изкопано", turbine: "Не е доставена" },
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
    coords: [43.559733, 28.126353],
    overallStatus: "Армировка / Бетон",
    progress: 15,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x185/25 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "В насип", foundation: "Изкопни дейности", grid: "В проект", turbine: "Не е доставена" },
    timeline: [
      { date: "17.06.2026", title: "Подготвяне на терена T2", note: "", img: "media/T2/20260617_095346.jpg" },
      { date: "22.09.2026", title: "Метална конструкция T2", note: "", img: "media/T2/20260922_143732.jpg" },
      { date: "01.10.2026", title: "Завиване на фундамент T2", note: "", img: "media/T2/20261001_105125.jpg" },
      { date: "09.10.2026", title: "Затруване на фундамент T2", note: "", img: "media/T2/20261009_115423.jpg" }
    ],
    video: null
  },
  {
    id: "T5",
    name: "Ветрогенератор T5",
    branch: "Клон 1",
    coords: [43.563800, 28.134050],
    overallStatus: "Изкопни работи",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Изкопни дейности", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T7",
    name: "Ветрогенератор T7",
    branch: "Клон 1",
    coords: [43.571536, 28.137017],
    overallStatus: "Изкопни работи",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T8",
    name: "Ветрогенератор T8",
    branch: "Клон 1",
    coords: [43.574708, 28.134431],
    overallStatus: "Изкопни работи",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Готов", pad: "Прави се", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 2 (Branch 2) ---
  {
    id: "T4",
    name: "Ветрогенератор T4",
    branch: "Клон 2",
    coords: [43.564311, 28.142633],
    overallStatus: "Армировка / Бетон",
    progress: 15,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Готов", grid: "Готово", turbine: "Не е доставена" },
   timeline: [
      { date: "24.07.2026", title: "Подготвяне на терена T4", note: "", img: "media/T4/20260724_135733.jpg" },
      { date: "25.08.2026", title: "Льосова покривка T4", note: "", img: "media/T4/20260825_121839.jpg" },
      { date: "17.09.2026", title: "Изглажане на чакъл T4", note: "", img: "media/T4/20260917_144520.jpg" },
      { date: "23.09.2026", title: "Анкерна клетка T4", note: "", img: "media/T4/20260923_155630.jpg" },
      { date: "09.10.2026", title: "Метална конструкция T4", note: "", img: "media/T4/20261009_100741.jpg" },
      { date: "11.10.2026", title: "Бетониране на T4", note: "", img: "media/T4/ea6c62f0-4145-45a0-9ace-17eab939f699.jpg" },
    ],
    video: null
  },
  {
    id: "T9",
    name: "Ветрогенератор T9",
    branch: "Клон 2",
    coords: [43.568986, 28.147161],
    overallStatus: "Изкопни работи",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x185/25 mm²", type: "3 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Планирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 3 (Branch 3) ---
  {
    id: "T11",
    name: "Ветрогенератор T11",
    branch: "Клон 3",
    coords: [43.568867, 28.160269],
    overallStatus: "Изкопни работи",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Прави се", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T12",
    name: "Ветрогенератор T12",
    branch: "Клон 3",
    coords: [43.563956, 28.163772],
    overallStatus: "Изкопни работи",
    progress: 0,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x185/25 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Не е стартирана", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T13",
    name: "Ветрогенератор T13",
    branch: "Клон 3",
    coords: [43.561775, 28.145539],
    overallStatus: "Армировка / Бетон",
    progress: 0,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Готов", grid: "Прави се", turbine: "Не е доставена" },
    timeline: [
      { date: "17.06.2026", title: "Подготвяне на терена T13", note: "", img: "media/T13/20260617_103556.jpg" },
      { date: "14.07.2026", title: "Анкерна клетка T13", note: "", img: "media/T13/20260714_153803.jpg" },
      { date: "14.09.2026", title: "Метална конструкция T13", note: "", img: "media/T13/20260914_140650.jpg" },
      { date: "17.09.2026", title: "Бетониране на T13", note: "", img: "media/T13/20260917_144813.jpg" },
      { date: "09.10.2026", title: "Завиване на фундамент T13", note: "", img: "media/T13/20261009_110618.jpg" }
    ],
    video: null
  },

  // --- КЛОН 4 (Branch 4) ---
  {
    id: "T14",
    name: "Ветрогенератор T14",
    branch: "Клон 4",
    coords: [43.555614, 28.150214],
    overallStatus: "Армировка / Бетон",
    progress: 60,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x400/35 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Анкерна клетка", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T15",
    name: "Ветрогенератор T15",
    branch: "Клон 4",
    coords: [43.548272, 28.153833],
    overallStatus: "Армировка / Бетон",
    progress: 5,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x185/25 mm²", type: "3 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Прави се", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [
      { date: "05.09.2026", title: "Бетониране на фундамент", note: "Кубици бетон съгласно рецепта.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" }
    ],
    video: null
  },
  {
    id: "T16",
    name: "Ветрогенератор T16",
    branch: "Клон 4",
    coords: [43.542703, 28.156458],
    overallStatus: "Армировка / Бетон",
    progress: 15,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Готов", pad: "Готова", foundation: "Бетониран, обратен насип", grid: "Кабелна линия готова", turbine: "Компоненти на площадка" },
    timeline: [
      { date: "22.05.2026", title: "Подготвяне на терена T16", note: "", img: "media/T16/20260522_113043.jpg" },
      { date: "15.06.2026", title: "Изкоп фундамент T16", note: "", img: "media/T16/20260615_164436.jpg" },
      { date: "14.07.2026", title: "Анкерна клетка T16", note: "", img: "media/T16/20260714_154629.jpg" },
      { date: "31.08.2026", title: "Метална конструкция T16", note: "", img: "media/T16/20260825_115817.jpg" },
      { date: "05.09.2026", title: "Бетониране на T16", note: "", img: "media/T16/20260905_182027.jpg" },
      { date: "06.09.2026", title: "Завиване на фундамент T16", note: "", img: "media/T16/IMG-7750f8a81ecd537eee12c9e7be0b58ea-V.jpg" }
    ],
    video: null
  },
  {
    id: "T19",
    name: "Ветрогенератор T19",
    branch: "Клон 4",
    coords: [43.553383, 28.161289],
    overallStatus: "Изкопни работи",
    progress: 0,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "1 input + 1 trafo" },
    stages: { road: "Готов", pad: "Прави се", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },

  // --- КЛОН 4a / 5 (Branch 4a / 5) ---
  {
    id: "T18",
    name: "Ветрогенератор T18",
    branch: "Клон 5",
    coords: [43.557733, 28.167542],
    overallStatus: "Изкопни работи",
    progress: 35,
    specs: { trafo: "1 x 5.1 MVA", cable: "1x95/16 mm²", type: "2 inputs + 1 trafo" },
    stages: { road: "Готов", pad: "В процес", foundation: "В процес", grid: "Не е стартиран", turbine: "Не е доставена" },
    timeline: [],
    video: null
  },
  {
    id: "T17",
    name: "Ветрогенератор T17 (Бъдещо)",
    branch: "Клон 4a (Бъдещ)",
    coords: [43.550000, 28.160000],
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
    coords: [43.572781, 28.158119],
    overallStatus: "Планиран",
    progress: 50,
    specs: { trafo: "2x Тр-ри 110/33kV", cable: "Шини 33kV, КРУ NXPLUS C", type: "Главна подстанция" },
    stages: { road: "Готов", pad: "Не е стартиран", foundation: "Не е стартиран", grid: "Не е стартиран", turbine: "—" },
    timeline: [
      { date: "01.07.2026", title: "Изкоп за фундаменти на силови трансформатори", note: "Контрол на нивата.", img: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80" }
    ],
    video: null
  },
  {
    id: "BESS",
    name: "Батерийно стопанство (BESS)",
    branch: "Инфраструктура",
    coords: [43.571000, 28.156000],
    overallStatus: "Планиран",
    progress: 10,
    specs: { trafo: "Кабелна линия 1x400/35", cable: "Връзка към ПС 33/110kV", type: "Съхранение на енергия" },
    stages: { road: "Трасиран", pad: "Планирана", foundation: "Проект", grid: "Проект", turbine: "—" },
    timeline: [],
    video: null
  }
];
