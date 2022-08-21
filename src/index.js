import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mapbox-gl/dist/mapbox-gl.css';
// import { Wrapper } from "@googlemaps/react-wrapper";

const render = (status) => {
    return <h1>{status}</h1>;
};

ReactDOM.render(
  <React.StrictMode>
      {/*<Wrapper apiKey="AIzaSyCpNZNRXve5OvTxwQBEEzgxYz5yFxQ7fxw" render={render}>*/}
          <App />
      {/*</Wrapper>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
