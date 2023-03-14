import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

// const logAction = (store) => {
//   return next => {
//     return action => {
//       const result = next(action)
//       console.log(`Logging action before reach to reducer ${JSON.stringify(result)}`)
//       return result
//     }
//   }
// }

const store = createStore(reducer,applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
