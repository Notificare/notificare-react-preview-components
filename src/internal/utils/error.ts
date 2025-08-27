export function logError(error: unknown, header: string) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.error(`${header}\n\n${error}`);
}
