export const textFieldTypes = ["text", "output", "password", "email", "number", "search", "tel", "url"] as const;

export type TextFieldType = (typeof textFieldTypes)[number];

export const textFieldTypeDefault: TextFieldType = "text";
