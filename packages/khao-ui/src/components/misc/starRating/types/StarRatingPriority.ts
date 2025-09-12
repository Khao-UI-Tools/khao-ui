export const starRatingPriorities = ["primary", "secondary", "tertiary"];

export type StarRatingPriority = (typeof starRatingPriorities)[number];

export const starRatingPriorityDefault: StarRatingPriority = "primary";