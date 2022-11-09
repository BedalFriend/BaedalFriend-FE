import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/config/ConfigStore';
import { Provider } from 'react-redux';
import { TabProvider } from './context/TabContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  // </React.StrictMode>
  <Provider store={store}>
    <TabProvider>
      <App />
    </TabProvider>
  </Provider>
);
