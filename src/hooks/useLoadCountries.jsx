import { useAppState } from "../utils/AppStateContext";

export function useLoadCountries() {
  const { state, dispatch } = useAppState();

  const handleLoadMore = () => {
    dispatch({
      type: "SET_VISIBLE_ROWS",
      payload: state.visibleRows + 2,
    });
  };

  const handleLoadLess = () => {
    if (state.visibleRows - 2 >= 2) {
      dispatch({ type: "SET_VISIBLE_ROWS", payload: state.visibleRows - 2 });
    }
  };

  return { visibleRows: state.visibleRows, handleLoadMore, handleLoadLess };
}
