export const cardTypes = ["elevated", "filled", "outlined"];

export type CardType = (typeof cardTypes)[number];

export const cardTypeDefault: CardType = "elevated";
