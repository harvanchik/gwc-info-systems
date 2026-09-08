/** Prefix internal URLs for a GitHub project site, or use the origin root on Sites. */
export function sitePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
