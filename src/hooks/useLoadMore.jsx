import { useState } from "react";

export function useLoadMore(initialValue = 2) {
  const [visibleRows, setVisibleRows] = useState(initialValue);

  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 2);
  };

  return { visibleRows, handleLoadMore };
}
