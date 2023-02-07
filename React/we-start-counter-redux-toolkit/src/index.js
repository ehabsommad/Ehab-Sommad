import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { reduxStore } from './redux/redux-store';
import Counter from "./Counter"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={reduxStore}>
  <Counter/>
</Provider>);

