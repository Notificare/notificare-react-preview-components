export class NetworkRequestError extends Error {
  constructor(public readonly response: Response) {
    super(`Failed to fetch a resource with response code '${response.status}'.`);
    this.name = 'NetworkRequestError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NetworkRequestError);
    }
  }
}
