export const linkPriorities = ["primary", "secondary", "secondary-emphasized"] as const;

export type LinkPriority = (typeof linkPriorities)[number];

export const linkPriorityDefault: LinkPriority = "primary";
