import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/styles/navbar.css"
import "./assets/styles/stepTow.css"
import './i18n'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Prime react configuration
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";//theme
import "primereact/resources/primereact.min.css";//core css
import "primeicons/primeicons.css"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="">
      <App />
    </Suspense>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
