export class DupplicateException extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, DupplicateException.prototype);
  }
}
