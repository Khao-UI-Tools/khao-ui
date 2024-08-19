export const cardFillings = [
  "surface",
  "surface-dark",
  "primary",
  "secondary",
  "tertiary",
  "success",
  "error",
];

export type CardFilling = (typeof cardFillings)[number];

export const cardFillingDefault: CardFilling = "surface-dark";
