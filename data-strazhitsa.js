// data-strazhitsa.js - Данни за проект ВяЕЦ "Стражица" (70 MW)[cite: 9]

const STRAZHITSA_DATA = {
  name: "ВяЕЦ «Стражица» (70 MW)",
  centerCoords: [43.400, 27.500], // Приблизителен център на района
  defaultZoom: 13,
  items: [
    // --- ЦЕНТРАЛЕН ВЪЗЕЛ И ПОДСТАНЦИЯ ---
    {
      id: "ST-SUBSTATION",
      name: "Нова П/ст 33/110kV ВяЕЦ „Тесса Грийн“",
      branch: "Централен възел",
      coords: [43.401, 27.502],
      overallStatus: "Изкопни работи",
      progress: 40,
      specs: { trafo: "33/110 kV", cable: "OPGW / OPUG", type: "Основна подстанция" },
      stages: { road: "Готов", pad: "Изграждане на КРУ 33kV", foundation: "Изкоп и основи", grid: "Оптична свързаност ODF", turbine: "—" },
      timeline: [
        { date: "06.10.2026", title: "Изграждане на КРУ 33kV", note: "Монтаж на съоръжения в имот 19[cite: 9].", img: "" }
      ],
      driveLink: ""
    },

    // --- КЛОН 1 (Branch 1) ---
    {
      id: "ST-T1",
      name: "Ветрогенератор (Клон 1)",
      branch: "Клон 1 (Branch 1)",
      coords: [43.410, 27.490],
      overallStatus: "Планиран",
      progress: 10,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 1[cite: 9]", type: "Етап 2 (4 генератора)[cite: 9]" },
      stages: { road: "Проектиране", pad: "Проект", foundation: "Не е стартиран", grid: "В проект", turbine: "Не е доставена" },
      timeline: [],
      driveLink: ""
    },

    // --- КЛОН 2 (Branch 2) ---
    {
      id: "ST-T2",
      name: "Ветрогенератор T2",
      branch: "Клон 2 (Branch 2)",
      coords: [43.395, 27.515],
      overallStatus: "Изкопни работи",
      progress: 35,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 2 (2250m)[cite: 9]", type: "Етап 1 (3 генератора)[cite: 9]" },
      stages: { road: "Готов", pad: "В процес", foundation: "Изкоп", grid: "Полагане на кабел", turbine: "Очаква се" },
      timeline: [
        { date: "15.09.2026", title: "Старт на изкопи по Клон 2", note: "Трасиране на дължина 2250 м[cite: 9].", img: "" }
      ],
      driveLink: ""
    },

    // --- КЛОН 3 (Branch 3) ---
    {
      id: "ST-T3",
      name: "Ветрогенератор T3",
      branch: "Клон 3 (Branch 3)",
      coords: [43.385, 27.525],
      overallStatus: "Планиран",
      progress: 15,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 3 (1523m)[cite: 9]", type: "Етап 1[cite: 9]" },
      stages: { road: "Трасиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Проект", turbine: "Не е доставена" },
      timeline: [],
      driveLink: ""
    },

    // --- КЛОН 4 (Branch 4) ---
    {
      id: "ST-T4",
      name: "Ветрогенератор T4 / T14 / T16",
      branch: "Клон 4 (Branch 4)",
      coords: [43.415, 27.480],
      overallStatus: "Армировка / Бетон",
      progress: 60,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 4[cite: 9]", type: "Етап 1 (2 генератора)[cite: 9]" },
      stages: { road: "Готов", pad: "Готова", foundation: "Армиране и бетониране", grid: "Готово трасе", turbine: "Очаква се" },
      timeline: [
        { date: "31.08.2026", title: "Фундамент T16", note: "Завършен етап по бетониране[cite: 9].", img: "" }
      ],
      driveLink: ""
    },

    // --- КЛОН 5 (Branch 5) ---
    {
      id: "ST-T10",
      name: "Ветрогенератор T10 / T6",
      branch: "Клон 5 (Branch 5)",
      coords: [43.425, 27.470],
      overallStatus: "Армировка / Бетон",
      progress: 55,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 5 (1393m)[cite: 9]", type: "Етап 1 (2 генератора)[cite: 9]" },
      stages: { road: "Готов", pad: "Готова", foundation: "Излят подложен бетон", grid: "Изкоп", turbine: "Не е доставена" },
      timeline: [
        { date: "06.10.2026", title: "Инспекция на площадка T10", note: "Проверка на армировъчни изходи[cite: 9].", img: "" }
      ],
      driveLink: ""
    },

    // --- КЛОН 6 (Branch 6) ---
    {
      id: "ST-T18",
      name: "Ветрогенератор T18 / T19",
      branch: "Клон 6 (Branch 6)",
      coords: [43.375, 27.535],
      overallStatus: "Изкопни работи",
      progress: 25,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 6 (1085m)[cite: 9]", type: "Етап 1[cite: 9]" },
      stages: { road: "В процес", pad: "Насип", foundation: "Изкоп", grid: "Проект", turbine: "Не е доставена" },
      timeline: [
        { date: "23.09.2026", title: "Начало на изкопи по Клон 6", note: "Дължина на трасето 1085 м[cite: 9].", img: "" }
      ],
      driveLink: ""
    }
  ]
};
