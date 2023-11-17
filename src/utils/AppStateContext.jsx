import { createContext, useContext, useReducer } from "react";

const AppStateContext = createContext();

const initialState = {
  visibleRows: 2,
  searchValue: "",
  selectedContinent: null,
};

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "SET_VISIBLE_ROWS":
      return { ...state, visibleRows: action.payload };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "SET_SELECTED_CONTINENT":
      return { ...state, selectedContinent: action.payload };
    default:
      return state;
  }
};

const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppStateProvider, useAppState };
