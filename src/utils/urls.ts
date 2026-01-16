export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  if (base.endsWith("/")) {
    return `${base}${normalizedPath}`;
  }
  return `${base}/${normalizedPath}`;
};
