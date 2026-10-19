// data-chernogor.js - Данни за ФЕЦ Черногор

const CHERNOGOR_CONFIG = {
  name: "ФЕЦ «Черногор» + ВЛ 110kV и Тутракан",
  centerCoords: [43.942761, 26.743339],
  defaultZoom: 14
};

const CHERNOGOR_TURBINES = [
  {
    id: "CH-STS1",
    name: "Трансформаторна станция STS-0000K-H1",
    branch: "ФЕЦ Площадка",
    coords: [43.942761, 26.743339],
    overallStatus: "Армировка / Бетон",
    progress: 50,
    specs: { trafo: "Huawei / STS", cable: "Вътрешна мрежа 0.4/20kV", type: "Трафостанция" },
    stages: { road: "Готов", pad: "Готова", foundation: "Излят фундамент", grid: "Монтаж трафо", turbine: "—" },
    timeline: [],
    driveLink: "",
    video: null
  }
];
