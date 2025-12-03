import "../../styles/Sipnner.scss";
const Spinner = () => {
  return (
    <article className="spinner">
      <i className="fa-solid fa-rotate-right fa-spin"></i>
      <p className="spinner__text">Cargando...</p>
    </article>
  );
};

export default Spinner;
