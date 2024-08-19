export const noticeTypes = ["info", "neutral", "warning"];

export type NoticeType = (typeof noticeTypes)[number];

export const noticeTypeDefault: NoticeType = "info";
