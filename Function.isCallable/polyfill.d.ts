/** @module Function.isCallable */
declare global {
  interface FunctionConstructor {
    /**
     * @category Stage 0
     * @see https://github.com/caitp/TC39-Proposals/blob/trunk/tc39-reflect-isconstructor-iscallable.md#functioniscallable--argument-
     */
    isCallable(argument: any): boolean;
  }
}
export {};
