// use-local-storage-set-state.test.js
import React from "react";
import { useLocalStorageSetState } from "./use-local-storage-set-state";

test("throws when name is not provided", () => {
  expect(() => useLocalStorageSetState(0)).toThrow();
});
