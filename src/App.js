import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import getDataReducer from "./store/reducer/getData.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router } from "react-router-dom";

const rootReducer = combineReducers({
  data: getDataReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>
  );
}

export default App;
