// Fichero src/components/App.jsx
import "../styles/App.scss";
import ls from "../services/localStorage";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/api";
import Header from "./Header";
import PersonagesList from "./PersonagesList";
import Filters from "./Filters/Filters";

function App() {
  const [personages, setPersonages] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      setPersonages(response);
    });
  }, []);

  const updateFilterName = (value) =>{
    setFilterName(value);
  }

  return (
    <>
      <Header />
      <main>
        <Filters updateFilterName={updateFilterName} filterName={filterName}/>
        <PersonagesList personages={personages} filterName = {filterName}/>
      </main>
    </>
  );
}

export default App;
