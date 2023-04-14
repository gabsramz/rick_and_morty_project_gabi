import { Link } from "react-router-dom";

export default function Card( {id, name, status, species, gender, origin, image, onClose} ) {
   return (
      <div>
         <button onClick={() => onClose(id)}>Cerrar</button>
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
