export function logError(error: unknown, header: string) {
  if (error instanceof Error) {
    console.error(`${header}\n\n${error.message}`);
  } else {
    console.error(`${header}\n\n${String(error)}`);
  }
}
