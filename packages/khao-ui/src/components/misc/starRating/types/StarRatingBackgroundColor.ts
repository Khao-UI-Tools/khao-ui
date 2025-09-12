export const starRatingBackgroundColors = [
  "surface-container",
  "surface-container-low", 
  "surface-container-high",
  "surface-container-highest"
];

export type StarRatingBackgroundColor = (typeof starRatingBackgroundColors)[number];

export const starRatingBackgroundColorDefault: StarRatingBackgroundColor = "surface-container";