export const chipFillings = [
  "surface",
  "surface-dark",
  "primary",
  "secondary",
  "tertiary",
  "success",
  "error",
];

export type ChipFilling = (typeof chipFillings)[number];

export const chipFillingDefault: ChipFilling = "surface";
