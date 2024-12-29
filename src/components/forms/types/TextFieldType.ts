export const textFieldTypes = ["text", "output", "password", "email", "number"];

export type TextFieldType = (typeof textFieldTypes)[number];

export const textFieldTypeDefault: TextFieldType = "text";
