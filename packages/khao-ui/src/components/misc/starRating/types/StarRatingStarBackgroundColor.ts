export const starRatingStarBackgroundColors = [
  "surface-container",
  "surface-container-low", 
  "surface-container-high",
  "surface-container-highest"
];

export type StarRatingStarBackgroundColor = (typeof starRatingStarBackgroundColors)[number];

export const starRatingStarBackgroundColorDefault: StarRatingStarBackgroundColor = "surface-container";