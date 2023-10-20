/**
 * @module error-cause
 * @category ES2022
 */
declare global {
  interface ErrorConstructor {
    new (message: string, options?: { cause?: any }): Error;
  }
  interface Error {
    cause?: any;
  }
}
export {};
