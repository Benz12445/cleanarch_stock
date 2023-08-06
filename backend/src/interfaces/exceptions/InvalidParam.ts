export class InvalidParam extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InvalidParam.prototype);
  }
}
