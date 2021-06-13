export const Hues: { [key: string]: number } = {
  Purple: 246,
  Black: 240,
  Accent: 164,
  White: 212,
};

export const Saturation: { [key: string]: number } = {
  Purple: 28,
  Black: 7,
  Accent: 68,
  White: 61,
};

export const Lightness: { [key: string]: number } = {
  Purple: 48,
  Black: 12,
  Accent: 72,
  White: 91,
};

export const step = 5;

export const variants: { [key: string]: string[] } = {
  purpleDark: [
    `Purple-dark-1`,
    `Purple-dark-2`,
    `Purple-dark-3`,
    `Purple-dark-4`,
    `Purple-dark-5`,
    `Purple-dark-6`,
  ],
  purpleLight: [`Purple-light-1`, `Purple-light-2`, `Purple-light-3`],
  blackLight: [`Black-light-1`, `Black-light-2`, `Black-light-3`],
  blackDark: [`Black-dark-1`, `Black-dark-2`],
  whiteDark: [`White-dark-1`, `White-dark-2`, `White-dark-3`],
};
