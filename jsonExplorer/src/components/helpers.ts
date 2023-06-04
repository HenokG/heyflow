export const readableNamespace = (namespace: (string | null)[]): string =>
  namespace.reduce(
    (previousValue, currentValue) =>
      `${previousValue}${
        isNumeric(currentValue) ? `[${currentValue}]` : `.${currentValue}`
      }`,
    "res"
  ) || "";

const isNumeric = (value: string | null) => /^-?\d+$/.test(value || "");
