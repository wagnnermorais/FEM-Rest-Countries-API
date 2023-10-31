import { useState } from "react";

export function useLoadCountries(initialValue = 2, minVisible = 2) {
  const [visibleRows, setVisibleRows] = useState(initialValue);

  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 2);
  };

  const handleLoadLess = () => {
    if (visibleRows - 2 >= minVisible) {
      setVisibleRows((prevVisibleRows) => prevVisibleRows - 2);
    }
  };

  return { visibleRows, handleLoadMore, handleLoadLess };
}
