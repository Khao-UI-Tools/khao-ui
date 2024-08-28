export const stringBooleans = ["true", "false"];
export type StringBoolean = "true" | "false";

export const isTrue = (value: StringBoolean): boolean => {
  return value === "true";
};
