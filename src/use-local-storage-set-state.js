export const useLocalStorageSetState = (initialValue, name) => {
  if (!name) {
    throw new Error("Name must be provided to persist to localStorage");
  }
};
