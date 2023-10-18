declare global {
  interface Array<T> {
    /**
     * Returns the item located at the specified index.
     *
     * @category ES2022
     * @param index The zero-based index of the desired code unit. A negative
     *   index will count back from the last item.
     */
    at(index: number): T | undefined;
  }
}
export {};
