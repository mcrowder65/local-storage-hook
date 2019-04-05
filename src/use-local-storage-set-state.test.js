// use-local-storage-set-state.test.js
import React from "react";
import { render, fireEvent } from "react-testing-library";
import { useLocalStorageSetState } from "./use-local-storage-set-state";

test("throws when name is not provided", () => {
  expect(() => useLocalStorageSetState(0)).toThrow();
});

test("persists on component unmounts and rerenders", () => {
  function Comp() {
    const [value, setValue] = useLocalStorageSetState(0, "value");

    return (
      <div>
        {value}
        <button onClick={() => setValue(value + 1)}>Add value</button>
      </div>
    );
  }
  const { getByText, rerender, unmount } = render(<Comp />);
  expect(getByText(/0/i)).toBeInTheDocument();
  fireEvent.click(getByText(/add value/i));
  expect(getByText(/1/i)).toBeInTheDocument();

  unmount();
  rerender(<Comp />);
  expect(getByText(/1/i)).toBeInTheDocument();
});
