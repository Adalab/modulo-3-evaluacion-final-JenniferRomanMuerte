// Fichero src/components/App.jsx
import '../styles/App.scss';
import ls from "../services/localStorage";
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import callToApi from '../services/api';
import Header from './Header';


function App() {

  const [personages,setPersonages] = useState([]);

   useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
     setPersonages(response);
    });
  }, []);


  return (
    <>
     <Header/>
    </>
  );
}

export default App;