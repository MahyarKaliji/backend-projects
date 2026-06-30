const lengthUnits = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
};

const weightUnits = {
  mg: 0.000001,
  g: 0.001,
  kg: 1,
  oz: 0.02834952,
  lb: 0.45359237,
};

export const convertLength = (value, from, to) => {
  return (value * lengthUnits[from]) / lengthUnits[to];
};

export const convertWeight = (value, from, to) => {
  return (value * weightUnits[from]) / weightUnits[to];
};

export const convertTemperature = (value, from, to) => {
  let celsius;

  if (from === "C") celsius = value;
  if (from === "F") celsius = ((value - 32) * 5) / 9;
  if (from === "K") celsius = value - 273.15;

  if (to === "C") return celsius;
  if (to === "F") return (celsius * 9) / 5 + 32;
  if (to === "K") return celsius + 273.15;
};
