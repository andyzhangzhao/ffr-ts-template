// Import
import React from 'react';

// Import Routers
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './routes';

// Import Css
import './App.css';

function App() {
  return (
    <div className="HelloWorld">
      <BrowserRouter>
        <Link className="link" to={'/home'}>
          to home
        </Link>
        <Link className="link" to={'/test'}>
          to test sf component
        </Link>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
