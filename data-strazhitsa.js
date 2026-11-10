// data-strazhitsa.js - Данни за проект ВяЕЦ "Стражица" (70 MW)

const STRAZHITSA_DATA = {
  name: "ВяЕЦ «Стражица» (70 MW)",
  centerCoords: [43.45340732365396, 28.106775776072386], // Приблизителен център на района
  defaultZoom: 13,
  items: [
    // --- ЦЕНТРАЛЕН ВЪЗЕЛ И ПОДСТАНЦИЯ ---
    {
      id: "ST-SUBSTATION",
      name: "Нова П/ст 33/110kV ВяЕЦ „Тесса Грийн“",
      branch: "Централен възел",
      coords: [43.447540725524206, 28.101091683767535],
      overallStatus: "Изкопни работи",
      progress: 40,
      specs: { trafo: "33/110 kV", cable: "OPGW / OPUG", type: "Основна подстанция" },
      stages: { road: "Готов", pad: "Изграждане на КРУ 33kV", foundation: "Изкоп и основи", grid: "Оптична свързаност ODF", turbine: "—" },
      timeline: [
        { date: "06.10.2026", title: "Изграждане на КРУ 33kV", note: "Монтаж на съоръжения в имот 19.", img: "" }
      ],
      driveLink: ""
    },

    // --- ГЕНЕРАТОРИ ---
    {
      id: "ST-T4",
      name: "Ветрогенератор T4",
      branch: "Клон 4 (Branch 4)",
      coords: [43.454380166872674, 28.080472406134103],
      overallStatus: "Планиран",
      progress: 10,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 4", type: "Етап 1" },
      stages: { road: "Проектиране", pad: "Проект", foundation: "Не е стартиран", grid: "В проект", turbine: "Не е доставена" },
      timeline: [],
      driveLink: ""
    },
    {
      id: "ST-T7",
      name: "Ветрогенератор T7",
      branch: "Клон 2 (Branch 2)",
      coords: [43.4606605742575, 28.07797361191551],
      overallStatus: "Изкопни работи",
      progress: 35,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 2", type: "Етап 1" },
      stages: { road: "Готов", pad: "В процес", foundation: "Изкоп", grid: "Полагане на кабел", turbine: "Очаква се" },
      timeline: [],
      driveLink: ""
    },
    {
      id: "ST-T9",
      name: "Ветрогенератор T9",
      branch: "Клон 2 (Branch 2)",
      coords: [43.45395255015543, 28.093216125563053],
      overallStatus: "Планиран",
      progress: 15,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 2", type: "Етап 1" },
      stages: { road: "Трасиран", pad: "Планирана", foundation: "Не е стартиран", grid: "Проект", turbine: "Не е доставена" },
      timeline: [],
      driveLink: ""
    },
    {
      id: "ST-T10",
      name: "Ветрогенератор T10",
      branch: "Клон 5 (Branch 5)",
      coords: [43.46180895019626, 28.087849015288498],
      overallStatus: "Армировка / Бетон",
      progress: 55,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 5", type: "Етап 1" },
      stages: { road: "Готов", pad: "Готова", foundation: "Излят подложен бетон", grid: "Изкоп", turbine: "Не е доставена" },
      timeline: [
        { date: "06.10.2026", title: "Инспекция на площадка T10", note: "Проверка на армировъчни изходи.", img: "" }
      ],
      driveLink: ""
    },
    {
      id: "ST-T12",
      name: "Ветрогенератор T12",
      branch: "Клон 5 (Branch 5)",
      coords: [43.45749558030799, 28.10615784642912],
      overallStatus: "Планиран",
      progress: 10,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 5", type: "Етап 1" },
      stages: { road: "Проект", pad: "Проект", foundation: "Проект", grid: "Проект", turbine: "—" },
      timeline: [],
      driveLink: ""
    },
    {
      id: "ST-T13",
      name: "Ветрогенератор T13",
      branch: "Клон 5 (Branch 5)",
      coords: [43.46058274729716, 28.113493944107052],
      overallStatus: "Планиран",
      progress: 10,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 5", type: "Етап 1" },
      stages: { road: "Проект", pad: "Проект", foundation: "Проект", grid: "Проект", turbine: "—" },
      timeline: [],
      driveLink: ""
    },
    {
      id: "ST-T14",
      name: "Ветрогенератор T14",
      branch: "Клон 4 (Branch 4)",
      coords: [43.4550072388753, 28.122917355298593],
      overallStatus: "Армировка / Бетон",
      progress: 50,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 4", type: "Етап 1" },
      stages: { road: "Готов", pad: "Готова", foundation: "Армиране", grid: "Готово трасе", turbine: "Очаква се" },
      timeline: [],
      driveLink: ""
    },
    {
      id: "ST-T16",
      name: "Ветрогенератор T16",
      branch: "Клон 3 (Branch 3)",
      coords: [43.455475722370345, 28.118667867700392],
      overallStatus: "Армировка / Бетон",
      progress: 60,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 3", type: "Етап 1" },
      stages: { road: "Готов", pad: "Готова", foundation: "Бетониран фундамент", grid: "Кабелна линия готова", turbine: "—" },
      timeline: [
        { date: "31.08.2026", title: "Фундамент T16", note: "Завършен етап по бетониране.", img: "" }
      ],
      driveLink: ""
    },
    {
      id: "ST-T17",
      name: "Ветрогенератор T17",
      branch: "Клон 3 (Branch 3)",
      coords: [43.45338689180382, 28.113458223909518],
      overallStatus: "Планиран",
      progress: 10,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 3", type: "Етап 1" },
      stages: { road: "Проект", pad: "Проект", foundation: "Проект", grid: "Проект", turbine: "—" },
      timeline: [],
      driveLink: ""
    },
    {
      id: "ST-T18",
      name: "Ветрогенератор T18",
      branch: "Клон 6 (Branch 6)",
      coords: [43.44751679535807, 28.12050650798733],
      overallStatus: "Изкопни работи",
      progress: 25,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 6", type: "Етап 1" },
      stages: { road: "В процес", pad: "Насип", foundation: "Изкоп", grid: "Проект", turbine: "Не е доставена" },
      timeline: [
        { date: "23.09.2026", title: "Начало на изкопи по Клон 6", note: "Дължина на трасето 1085 м.", img: "" }
      ],
      driveLink: ""
    },
    {
      id: "ST-T19",
      name: "Ветрогенератор T19",
      branch: "Клон 6 (Branch 6)",
      coords: [43.44355605786013, 28.123731126702292],
      overallStatus: "Изкопни работи",
      progress: 20,
      specs: { trafo: "5.1 MVA", cable: "OPUG Клон 6", type: "Етап 1" },
      stages: { road: "В процес", pad: "В процес", foundation: "Изкоп", grid: "Проект", turbine: "—" },
      timeline: [],
      driveLink: ""
    }
  ]
};

// Свързващи променливи (мостчета) за index.html:
const STRAZHITSA_CONFIG = {
  name: STRAZHITSA_DATA.name,
  centerCoords: STRAZHITSA_DATA.centerCoords,
  defaultZoom: STRAZHITSA_DATA.defaultZoom
};

const STRAZHITSA_TURBINES = STRAZHITSA_DATA.items;
