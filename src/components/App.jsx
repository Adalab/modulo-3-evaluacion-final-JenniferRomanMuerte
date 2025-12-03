// Fichero src/components/App.jsx
import "../styles/App.scss";
import ls from "../services/localStorage";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/api";
import Header from "./Header";
import PersonagesList from "./PersonagesList";
import Filters from "./Filters/Filters";
import PersonageDetails from "./PersonageDetails";
import Spinner from "./utils/Spinner";

function App() {
  const [personages, setPersonages] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      response.sort((a, b) => a.name.localeCompare(b.name));
      setPersonages(response);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  const updateFilterName = (value) => {
    setFilterName(value);
  };
  const updateFilterHouse = (value) => {
    setFilterHouse(value);
  };

  const resetPage = () => {
    setFilterName("");
    setFilterHouse("");
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              {isLoading ? (
                <Spinner/>
              ) : (
                <>
                  <Filters
                    updateFilterName={updateFilterName}
                    filterName={filterName}
                    personages={personages}
                    filterHouse={filterHouse}
                    updateFilterHouse={updateFilterHouse}
                    resetPage = {resetPage}
                  />
                  <PersonagesList
                    personages={personages}
                    filterName={filterName}
                    filterHouse={filterHouse}
                  />
                </>
              )}
            </main>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <PersonageDetails personages={personages} isLoading={isLoading} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
