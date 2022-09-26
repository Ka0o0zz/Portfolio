export const toBoolean = (string: string | false | null) => {
  if (string === "true") return true;
  if (string === "false") return false;
  if (string === null) return null;
};
