import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './counterApp';

//import {FirstApp} from './FirstApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={'10'}/>
    </React.StrictMode>
)