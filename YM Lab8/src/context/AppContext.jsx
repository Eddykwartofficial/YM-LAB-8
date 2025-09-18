import React, { createContext, useReducer, useContext } from 'react';

const initialState = { programs: [], projects: [], user: JSON.parse(localStorage.getItem('user')) || null };

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_PROGRAMS': return { ...state, programs: action.payload };
    case 'ADD_PROGRAM': return { ...state, programs: [action.payload, ...state.programs] };
    case 'SET_PROJECTS': return { ...state, projects: action.payload };
    case 'ADD_PROJECT': return { ...state, projects: [action.payload, ...state.projects] };
    case 'LOGIN': localStorage.setItem('user', JSON.stringify(action.payload)); return { ...state, user: action.payload };
    case 'LOGOUT': localStorage.removeItem('user'); return { ...state, user: null };
    default: return state;
  }
}

const AppContext = createContext();
export function useApp() { return useContext(AppContext); }
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}
```
