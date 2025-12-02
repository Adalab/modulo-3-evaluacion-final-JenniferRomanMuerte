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
  const [filterHouse, setFilterHouse] = useState("gryffindor");

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      setPersonages(response);
    });
  }, []);

  const updateFilterName = (value) =>{
    setFilterName(value);
  }
  const updateFilterHouse = (value) =>{
    setFilterHouse(value);
  }

  return (
    <>
      <Header />
      <main>
        <Filters
        updateFilterName={updateFilterName}
        filterName={filterName}
        personages = {personages}
        filterHouse = {filterHouse}
        updateFilterHouse = {updateFilterHouse}
        />
        <PersonagesList personages={personages} filterName = {filterName}  filterHouse = {filterHouse}/>
      </main>
    </>
  );
}

export default App;
