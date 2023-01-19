import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

import './styles.css'

//yarn dev -> http://localhost:5173/
//yarn add --dev @testing-library/react Testing Components
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Hola, soy Sergio' subtitle={26}></FirstApp>
    </React.StrictMode>
)