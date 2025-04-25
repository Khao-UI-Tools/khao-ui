export const buildHtmlId = (title: string): string => {
  let id: string = "";

  if (title) {
    id = toKebabCase(title);
  }

  return id;
};

const toKebabCase = (input: string): string => {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
};
