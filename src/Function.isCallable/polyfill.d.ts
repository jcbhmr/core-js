declare global {
  interface FunctionConstructor {
    /**
     * @see https://github.com/caitp/TC39-Proposals/blob/trunk/tc39-reflect-isconstructor-iscallable.md#functioniscallable--argument-
     * @category Stage 0
     */
    isCallable(argument: any): boolean;
  }
}
export {};
